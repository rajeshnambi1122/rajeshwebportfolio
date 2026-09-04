import React, { useState, useEffect, useRef, useCallback } from "react";

const VacuumOverlay = ({ cleanModeEnabled, setCleanModeEnabled }) => {
  const [points, setPoints] = useState([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [canvasDimensions, setCanvasDimensions] = useState({ width: 0, height: 0 });

  // Refs for direct DOM manipulation (high performance 60fps animations)
  const vacuumRef = useRef(null);
  const ledRef = useRef(null);
  const pathRef = useRef(null);
  const pathParticlesRef = useRef(null);
  const animationFrameRef = useRef(null);
  const lastTimeRef = useRef(0);

  // Tracking state inside refs to avoid React batching latency in requestAnimationFrame
  const animState = useRef({
    mode: "idle", // 'idle' | 'traveling' | 'cleaning' | 'returning'
    currentPos: { x: 0, y: 0 },
    targetPos: { x: 0, y: 0 },
    angle: 0,
    cleanedLength: 0,
    totalLength: 0,
    points: [],
  });

  // Helper to find the starting location of the vacuum (anchored to header logo or top center)
  const getHeaderSpawnPos = useCallback(() => {
    const logo = document.querySelector(".rlogo");
    if (logo) {
      const rect = logo.getBoundingClientRect();
      return {
        x: rect.left + rect.width / 2 + window.scrollX,
        y: rect.top + rect.height / 2 + window.scrollY,
      };
    }
    return {
      x: window.innerWidth / 2 + window.scrollX,
      y: 35 + window.scrollY,
    };
  }, []);

  // Update canvas size to match the full scrollable page
  const updateCanvasDimensions = useCallback(() => {
    const width = Math.max(
      document.documentElement.scrollWidth,
      document.body.scrollWidth,
      window.innerWidth
    );
    const height = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight,
      window.innerHeight
    );
    setCanvasDimensions({ width, height });
  }, []);

  // Check if click target is interactive
  const isInteractive = (target) => {
    if (!target) return false;
    const interactiveTags = ["BUTTON", "A", "INPUT", "SELECT", "TEXTAREA", "SVG", "PATH"];
    if (interactiveTags.includes(target.tagName)) return true;
    if (
      target.closest("button") ||
      target.closest("a") ||
      target.closest("input") ||
      target.closest(".social") ||
      target.closest(".desktop-social") ||
      target.closest(".vacuum-fab")
    ) {
      return true;
    }
    return false;
  };

  // Spark/suck particles animation directly in DOM (efficient)
  const triggerSuckParticles = useCallback((vx, vy, angleRad) => {
    if (!pathParticlesRef.current) return;
    
    // Spawn 1-2 particles per call
    if (Math.random() > 0.4) return;

    const container = pathParticlesRef.current;
    
    // Generate particle relative to the front of the vacuum (which is rotated by angle)
    const angle = (angleRad * Math.PI) / 180;
    // Front of vacuum is about 20px forward
    const fx = vx + Math.cos(angle) * 20;
    const fy = vy + Math.sin(angle) * 20;

    // Dust particles start slightly offset from the front and get sucked in
    const offsetAngle = angle + (Math.random() - 0.5) * Math.PI; // sector in front of roomba
    const startDist = 15 + Math.random() * 20;
    const px = fx + Math.cos(offsetAngle) * startDist;
    const py = fy + Math.sin(offsetAngle) * startDist;

    const particle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    particle.setAttribute("cx", px.toString());
    particle.setAttribute("cy", py.toString());
    particle.setAttribute("r", (1 + Math.random() * 2).toString());
    particle.setAttribute("fill", Math.random() > 0.5 ? "#ccc" : "#d7cfc5");
    particle.setAttribute("opacity", "0.8");

    container.appendChild(particle);

    // Animate particle towards center
    const duration = 200 + Math.random() * 150; // ms
    const startTime = performance.now();

    const animateParticle = (time) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Interpolate towards vacuum front center
      const currentX = px + (fx - px) * progress;
      const currentY = py + (fy - py) * progress;
      particle.setAttribute("cx", currentX.toString());
      particle.setAttribute("cy", currentY.toString());
      particle.setAttribute("opacity", (0.8 * (1 - progress)).toString());

      if (progress < 1) {
        requestAnimationFrame(animateParticle);
      } else {
        particle.remove();
      }
    };

    requestAnimationFrame(animateParticle);
  }, []);

  // Animation Loop
  const animate = useCallback((timestamp) => {
    const state = animState.current;
    const dt = (timestamp - lastTimeRef.current) / 1000; // in seconds
    lastTimeRef.current = timestamp;

    if (state.mode === "traveling") {
      // Move vacuum towards points[0]
      const dx = state.targetPos.x - state.currentPos.x;
      const dy = state.targetPos.y - state.currentPos.y;
      const dist = Math.hypot(dx, dy);
      const speed = 350; // pixels per second

      if (dist < 5) {
        // Reached start! Start cleaning
        state.mode = "cleaning";
        state.currentPos = { ...state.targetPos };
        
        // Start brush spinning
        const brushes = document.querySelectorAll(".vacuum-brush");
        brushes.forEach((b) => {
          if (b instanceof HTMLElement) {
            b.style.animationPlayState = "running";
          }
        });

        // Turn LED green
        if (ledRef.current) {
          ledRef.current.setAttribute("fill", "#00ff66");
          ledRef.current.style.filter = "drop-shadow(0 0 6px #00ff66)";
        }
      } else {
        // Step closer
        const moveDist = Math.min(speed * dt, dist);
        state.currentPos.x += (dx / dist) * moveDist;
        state.currentPos.y += (dy / dist) * moveDist;
        state.angle = Math.atan2(dy, dx) * (180 / Math.PI);
      }

      // Update Vacuum DOM position
      if (vacuumRef.current) {
        vacuumRef.current.setAttribute(
          "transform",
          `translate(${state.currentPos.x}, ${state.currentPos.y}) rotate(${state.angle})`
        );
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    } else if (state.mode === "cleaning") {
      // Follow the path using SVG length methods
      if (pathRef.current) {
        const totalLen = state.totalLength || pathRef.current.getTotalLength();
        const speed = 250; // Pixels per second cleaning speed
        state.cleanedLength += speed * dt;

        if (state.cleanedLength >= totalLen) {
          // Reached end of path!
          state.mode = "returning";
          state.targetPos = getHeaderSpawnPos();
          
          // Pause brush spinning
          const brushes = document.querySelectorAll(".vacuum-brush");
          brushes.forEach((b) => {
            if (b instanceof HTMLElement) {
              b.style.animationPlayState = "paused";
            }
          });

          // Turn LED blue
          if (ledRef.current) {
            ledRef.current.setAttribute("fill", "#00d2ff");
            ledRef.current.style.filter = "drop-shadow(0 0 5px #00d2ff)";
          }
        } else {
          // Get coordinate at length
          const p = pathRef.current.getPointAtLength(state.cleanedLength);
          const nextP = pathRef.current.getPointAtLength(Math.min(state.cleanedLength + 2, totalLen));
          
          state.currentPos = { x: p.x, y: p.y };
          state.angle = Math.atan2(nextP.y - p.y, nextP.x - p.x) * (180 / Math.PI);

          // Update path dash array (erasing behind vacuum)
          pathRef.current.setAttribute(
            "stroke-dasharray",
            `0 ${state.cleanedLength} ${totalLen} ${totalLen}`
          );

          // Add a simple visual puff/particle effect at vacuum front
          triggerSuckParticles(state.currentPos.x, state.currentPos.y, state.angle);
        }

        // Update Vacuum DOM position
        if (vacuumRef.current) {
          vacuumRef.current.setAttribute(
            "transform",
            `translate(${state.currentPos.x}, ${state.currentPos.y}) rotate(${state.angle})`
          );
        }
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    } else if (state.mode === "returning") {
      // Re-evaluate spawn position in case user scrolled
      const spawnPos = getHeaderSpawnPos();
      state.targetPos = spawnPos;

      const dx = state.targetPos.x - state.currentPos.x;
      const dy = state.targetPos.y - state.currentPos.y;
      const dist = Math.hypot(dx, dy);
      const speed = 400; // return fast

      if (dist < 8) {
        // Reached home! Fade out and clear points
        state.mode = "idle";
        setPoints([]);
        if (vacuumRef.current) {
          vacuumRef.current.style.display = "none";
        }
      } else {
        const moveDist = Math.min(speed * dt, dist);
        state.currentPos.x += (dx / dist) * moveDist;
        state.currentPos.y += (dy / dist) * moveDist;
        state.angle = Math.atan2(dy, dx) * (180 / Math.PI);

        // Update DOM
        if (vacuumRef.current) {
          vacuumRef.current.setAttribute(
            "transform",
            `translate(${state.currentPos.x}, ${state.currentPos.y}) rotate(${state.angle})`
          );
        }
        animationFrameRef.current = requestAnimationFrame(animate);
      }
    }
  }, [getHeaderSpawnPos, triggerSuckParticles, setPoints]);

  // Start the robot vacuum flow
  const startCleaningFlow = useCallback((drawnPoints) => {
    // Cancel any current animation
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    const spawnPos = getHeaderSpawnPos();

    // Set initial animation state
    animState.current = {
      mode: "traveling", // Start by moving to the first path point
      currentPos: { ...spawnPos },
      targetPos: { ...drawnPoints[0] },
      angle: Math.atan2(drawnPoints[0].y - spawnPos.y, drawnPoints[0].x - spawnPos.x) * (180 / Math.PI),
      cleanedLength: 0,
      totalLength: 0,
      points: [...drawnPoints],
    };

    // Make vacuum visible and set position
    if (vacuumRef.current) {
      vacuumRef.current.style.display = "block";
      vacuumRef.current.setAttribute(
        "transform",
        `translate(${spawnPos.x}, ${spawnPos.y}) rotate(${animState.current.angle})`
      );
    }

    // Set LED to searching/traveling (blue/orange)
    if (ledRef.current) {
      ledRef.current.setAttribute("fill", "#00d2ff");
      ledRef.current.style.filter = "drop-shadow(0 0 5px #00d2ff)";
    }

    // Turn off brush spinning class for traveling phase, or keep it slow
    const brushes = document.querySelectorAll(".vacuum-brush");
    brushes.forEach((b) => {
      if (b instanceof HTMLElement) {
        b.style.animationPlayState = "paused";
      }
    });

    // Measure path length
    setTimeout(() => {
      if (pathRef.current) {
        const len = pathRef.current.getTotalLength();
        animState.current.totalLength = len;
        if (pathRef.current) {
          pathRef.current.setAttribute("stroke-dasharray", `0 0 ${len} ${len}`);
        }
      }
    }, 50);

    // Start animation loop
    lastTimeRef.current = performance.now();
    animationFrameRef.current = requestAnimationFrame(animate);
  }, [getHeaderSpawnPos, animate]);

  // Global Pointer Listeners
  useEffect(() => {
    let startX = 0;
    let startY = 0;
    let localPoints = [];
    let drawingActive = false;

    const handlePointerDown = (e) => {
      // If vacuum is already busy, ignore
      if (animState.current.mode !== "idle") {
        console.log("VacuumOverlay: Ignored - vacuum is busy", animState.current.mode);
        return;
      }

      // Ignore interactive elements
      if (isInteractive(e.target)) {
        console.log("VacuumOverlay: Ignored - target is interactive", e.target);
        return;
      }

      // In normal mode (not Clean Mode), only draw on desktop/mouse click&drag to avoid breaking mobile scroll
      const isTouch = e.type.startsWith("touch");
      if (isTouch && !cleanModeEnabled) {
        console.log("VacuumOverlay: Ignored - touch event and cleanMode not enabled");
        return;
      }

      const clientX = isTouch ? e.touches[0].clientX : e.clientX;
      const clientY = isTouch ? e.touches[0].clientY : e.clientY;

      startX = clientX + window.scrollX;
      startY = clientY + window.scrollY;
      localPoints = [];
      drawingActive = true;

      console.log("VacuumOverlay: Drag sequence started at", { startX, startY });

      // Add move and up listeners to window
      window.addEventListener(isTouch ? "touchmove" : "mousemove", handlePointerMove, { passive: false });
      window.addEventListener(isTouch ? "touchend" : "mouseup", handlePointerUp);
    };

    const handlePointerMove = (e) => {
      if (!drawingActive) return;

      const isTouch = e.type.startsWith("touch");
      const clientX = isTouch ? e.touches[0].clientX : e.clientX;
      const clientY = isTouch ? e.touches[0].clientY : e.clientY;

      const curX = clientX + window.scrollX;
      const curY = clientY + window.scrollY;

      if (localPoints.length === 0) {
        const dist = Math.hypot(curX - startX, curY - startY);
        console.log("VacuumOverlay: drag movement", { dist, curX, curY });
        if (dist > 10) {
          setIsDrawing(true);
          updateCanvasDimensions();
          localPoints = [{ x: startX, y: startY }, { x: curX, y: curY }];
          setPoints([...localPoints]);
          console.log("VacuumOverlay: Drawing activated with first points", localPoints);

          // Prevent scroll on touch devices while drawing
          if (e.cancelable) e.preventDefault();

          // Intercept and prevent the next click event so dragging on a layout doesn't trigger a click
          const preventClick = (clickEvent) => {
            clickEvent.preventDefault();
            clickEvent.stopPropagation();
            window.removeEventListener("click", preventClick, true);
          };
          window.addEventListener("click", preventClick, true);
        }
      } else {
        const lastPt = localPoints[localPoints.length - 1];
        const dist = Math.hypot(curX - lastPt.x, curY - lastPt.y);
        if (dist > 6) {
          localPoints.push({ x: curX, y: curY });
          setPoints([...localPoints]);
          console.log("VacuumOverlay: Added point. Total points:", localPoints.length);
        }
        if (e.cancelable) e.preventDefault();
      }
    };

    const handlePointerUp = () => {
      console.log("VacuumOverlay: handlePointerUp triggered", { drawingActive, pointsCount: localPoints.length });
      drawingActive = false;
      setIsDrawing(false);

      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("touchmove", handlePointerMove);
      window.removeEventListener("mouseup", handlePointerUp);
      window.removeEventListener("touchend", handlePointerUp);

      if (localPoints.length > 1) {
        console.log("VacuumOverlay: starting cleaning flow for points", localPoints);
        startCleaningFlow(localPoints);
      }
    };

    window.addEventListener("mousedown", handlePointerDown);
    window.addEventListener("touchstart", handlePointerDown, { passive: true });

    return () => {
      window.removeEventListener("mousedown", handlePointerDown);
      window.removeEventListener("touchstart", handlePointerDown);
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("touchmove", handlePointerMove);
      window.removeEventListener("mouseup", handlePointerUp);
      window.removeEventListener("touchend", handlePointerUp);
    };
  }, [cleanModeEnabled, startCleaningFlow, updateCanvasDimensions]);

  useEffect(() => {
    updateCanvasDimensions();
    window.addEventListener("resize", updateCanvasDimensions);
    window.addEventListener("scroll", updateCanvasDimensions);
    return () => {
      window.removeEventListener("resize", updateCanvasDimensions);
      window.removeEventListener("scroll", updateCanvasDimensions);
    };
  }, [updateCanvasDimensions]);

  const toggleCleanMode = () => {
    setCleanModeEnabled(!cleanModeEnabled);
  };

  // Convert points array to SVG path string
  const getPathData = () => {
    if (points.length === 0) return "";
    return points.reduce((acc, pt, idx) => {
      return idx === 0 ? `M ${pt.x} ${pt.y}` : `${acc} L ${pt.x} ${pt.y}`;
    }, "");
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        className={`vacuum-fab ${cleanModeEnabled ? "active" : ""}`}
        onClick={toggleCleanMode}
        title="Toggle Clean Mode"
        style={{
          fontFamily: "'Zain', sans-serif"
        }}
      >
        <svg width="36" height="36" viewBox="0 0 50 50">
          <circle
            cx="25"
            cy="25"
            r="22"
            fill="#1e1e1e"
            stroke={cleanModeEnabled ? "#00ff66" : "#888"}
            strokeWidth="3"
            style={{ transition: "stroke 0.3s" }}
          />
          {/* Inner ring */}
          <circle cx="25" cy="25" r="14" fill="#111" />
          {/* LED Ring */}
          <circle
            cx="25"
            cy="25"
            r="3.5"
            fill={cleanModeEnabled ? "#00ff66" : "#666"}
            className={cleanModeEnabled ? "pulse-led" : ""}
          />
          {/* Bristles representation */}
          <path
            d="M 12 14 Q 18 22 22 25 M 38 14 Q 32 22 28 25"
            stroke={cleanModeEnabled ? "#00ff66" : "#666"}
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
            style={{ transition: "stroke 0.3s" }}
          />
        </svg>
        <span className="vacuum-tooltip">
          {cleanModeEnabled ? "Clean Mode: Active!" : "Clean Mode: Draw to sweep!"}
        </span>
      </button>

      {/* Drawing Instruction Toast Banner */}
      {cleanModeEnabled && (
        <div className="vacuum-toast animate__animated animate__fadeInDown">
          🧹 Clean Mode Active! Click/touch and drag anywhere to draw dust, then release to sweep!
        </div>
      )}

      {/* Global Canvas Overlay */}
      <svg
        className={`vacuum-canvas ${isDrawing ? "drawing-active" : ""}`}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: canvasDimensions.width,
          height: canvasDimensions.height,
          pointerEvents: "none",
          zIndex: 99999,
        }}
      >
        <defs>
          {/* Dust line fuzzy texture filter */}
          <filter id="dust-texture" x="-10%" y="-10%" width="120%" height="120%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.6"
              numOctaves="3"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="7"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>

          {/* Vacuum metallic shading */}
          <radialGradient id="vacuumBodyGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#444444" />
            <stop offset="70%" stopColor="#222222" />
            <stop offset="95%" stopColor="#151515" />
            <stop offset="100%" stopColor="#0a0a0a" />
          </radialGradient>
        </defs>

        {/* The Drawn Dust Line */}
        {points.length > 0 && (
          <path
            ref={pathRef}
            d={getPathData()}
            fill="none"
            stroke="#a29b92"
            strokeWidth="14"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#dust-texture)"
            opacity="0.85"
            style={{
              transition: "opacity 0.3s",
            }}
          />
        )}

        {/* Dynamic suck particles layer */}
        <g ref={pathParticlesRef} />

        {/* The Robot Vacuum */}
        <g ref={vacuumRef} style={{ display: "none" }}>
          {/* Shadow */}
          <circle r="26" fill="#000" opacity="0.35" transform="translate(0, 3)" />

          {/* Main circular body */}
          <circle r="24" fill="url(#vacuumBodyGradient)" stroke="#111" strokeWidth="1" />

          {/* Front bumper arc (top portion of Roomba facing direction of travel) */}
          <path
            d="M -21.5 -10.5 A 24 24 0 0 1 21.5 -10.5 L 18 -15 A 24 24 0 0 0 -18 -15 Z"
            fill="#121212"
          />

          {/* Inner ring groove */}
          <circle r="17" fill="none" stroke="#1c1c1c" strokeWidth="1.5" />
          <circle r="15" fill="#181818" />

          {/* Rotating Side Brushes */}
          {/* Left Side Brush */}
          <g transform="translate(-13, -12)">
            <g className="vacuum-brush brush-left">
              <line x1="0" y1="0" x2="-8" y2="-6" stroke="#bfb6a8" strokeWidth="2.2" strokeLinecap="round" />
              <line x1="0" y1="0" x2="-10" y2="2" stroke="#bfb6a8" strokeWidth="2.2" strokeLinecap="round" />
              <line x1="0" y1="0" x2="-2" y2="-10" stroke="#bfb6a8" strokeWidth="2.2" strokeLinecap="round" />
            </g>
          </g>

          {/* Right Side Brush */}
          <g transform="translate(13, -12)">
            <g className="vacuum-brush brush-right">
              <line x1="0" y1="0" x2="8" y2="-6" stroke="#bfb6a8" strokeWidth="2.2" strokeLinecap="round" />
              <line x1="0" y1="0" x2="10" y2="2" stroke="#bfb6a8" strokeWidth="2.2" strokeLinecap="round" />
              <line x1="0" y1="0" x2="2" y2="-10" stroke="#bfb6a8" strokeWidth="2.2" strokeLinecap="round" />
            </g>
          </g>

          {/* Bumper sensor lines */}
          <line x1="-15" y1="-19" x2="-10" y2="-22" stroke="#333" strokeWidth="1" />
          <line x1="15" y1="-19" x2="10" y2="-22" stroke="#333" strokeWidth="1" />

          {/* Turret LDS (Laser Distance Sensor) dome in center */}
          <circle cx="0" cy="2" r="5.5" fill="#2d2d2d" stroke="#222" strokeWidth="1" />
          <circle cx="0" cy="2" r="3.5" fill="#1a1a1a" />
          {/* Laser diode glowing indicator */}
          <circle cx="0" cy="-0.5" r="0.8" fill="#ff2222" opacity="0.9" />

          {/* LED Glowing Indicator */}
          <circle ref={ledRef} cx="0" cy="-8" r="2.8" fill="#00ff66" />
        </g>
      </svg>

      {/* CSS Styles for animations and widget UI */}
      <style>{`
        /* Floating Action Button styling */
        .vacuum-fab {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 62px;
          height: 62px;
          border-radius: 50%;
          background: #1e1e1e;
          border: 2px solid #333;
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.4);
          cursor: pointer;
          z-index: 100000;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          outline: none;
        }
        .vacuum-fab:hover {
          transform: scale(1.1) rotate(10deg);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
          border-color: #555;
        }
        .vacuum-fab:active {
          transform: scale(0.95);
        }
        .vacuum-fab.active {
          border-color: #00ff66;
          box-shadow: 0 0 20px rgba(0, 255, 102, 0.45);
          background: #0d2716;
        }
        .vacuum-tooltip {
          position: absolute;
          bottom: 75px;
          right: 0;
          background: rgba(10, 10, 10, 0.9);
          color: #fff;
          padding: 8px 14px;
          border-radius: 8px;
          font-size: 15px;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.25s, transform 0.25s;
          transform: translateY(5px);
          font-weight: 500;
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow: 0 4px 12px rgba(0,0,0,0.25);
        }
        .vacuum-fab:hover .vacuum-tooltip {
          opacity: 1;
          transform: translateY(0);
        }

        /* Banner Notification at the top */
        .vacuum-toast {
          position: fixed;
          top: 85px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(0, 0, 0, 0.88);
          backdrop-filter: blur(8px);
          color: #f7e7d0;
          padding: 10px 20px;
          border-radius: 40px;
          font-size: 16px;
          font-weight: 500;
          z-index: 99998;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
          pointer-events: none;
          border: 1px solid rgba(255, 255, 255, 0.1);
          text-align: center;
          width: 90%;
          max-width: 550px;
        }

        /* Brush Spinning CSS Animations */
        @keyframes spin-left {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(-1080deg); }
        }
        @keyframes spin-right {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(1080deg); }
        }
        .brush-left {
          animation: spin-left 0.12s linear infinite;
          transform-origin: 0px 0px;
        }
        .brush-right {
          animation: spin-right 0.12s linear infinite;
          transform-origin: 0px 0px;
        }

        /* Pulsing LED on active button */
        @keyframes pulse-green {
          0% { opacity: 0.5; }
          50% { opacity: 1; filter: drop-shadow(0 0 5px #00ff66); }
          100% { opacity: 0.5; }
        }
        .pulse-led {
          animation: pulse-green 1.2s infinite;
        }

        /* Custom cursor while drawing */
        .vacuum-canvas.drawing-active {
          cursor: crosshair;
        }
      `}</style>
    </>
  );
};

export default VacuumOverlay;
