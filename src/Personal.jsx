import React from "react";
import { SiLetterboxd } from "react-icons/si";
import { FaGamepad } from "react-icons/fa";
import { TbSteeringWheel } from "react-icons/tb";

const Personal = () => {
  return (
    <div className="personal-section">
      <h1>Personal Interests</h1>
      <p className="personal-bio">
        Beyond my professional work, I'm a huge cinephile! I love discovering new films and meticulously tracking my watches on{" "}
        <span className="tech-clip tech-letterboxd"><img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Letterboxd-Logo-H-Pos-RGB.svg" alt="Letterboxd" className="tech-icon real-logo" style={{ height: "1.3em", top: "-2px" }} /></span>.
        When I want to unwind and explore immersive digital worlds, I'm currently obsessed with the chaotic sandbox of{" "}
        <span className="tech-clip tech-gta">
          <svg viewBox="0 0 100 100" className="tech-icon real-logo" style={{ height: "1.6em", top: "-2px", marginRight: "6px" }}>
            <path d="M 15 15 L 50 85 L 85 15 L 65 15 L 50 50 L 35 15 Z" fill="#5a9e33" stroke="#111" strokeWidth="4" />
            <path d="M 15 15 L 50 85 L 85 15 L 65 15 L 50 50 L 35 15 Z" fill="#5a9e33" stroke="#5a9e33" strokeWidth="1" />
            <rect x="25" y="45" width="50" height="18" fill="#111" />
            <text x="50" y="58" fill="#f3aa19" fontSize="14" fontWeight="bold" textAnchor="middle" fontFamily="Impact, sans-serif" letterSpacing="2">FIVE</text>
          </svg>
        </span> and the neon-lit streets of{" "}
        <span className="tech-clip tech-cyberpunk"><img src="https://upload.wikimedia.org/wikipedia/commons/e/e6/Cyberpunk_2077_logo.svg" alt="Cyberpunk 2077" className="tech-icon real-logo" style={{ height: "1em", top: "-2px" }} /></span>.
        Come the weekend, my eyes are glued to the screen as a massive{" "}
        <span className="tech-clip tech-f1"><img src="https://upload.wikimedia.org/wikipedia/commons/3/33/F1.svg" alt="Formula 1" className="tech-icon real-logo" style={{ height: "0.9em", top: "-2px", marginRight: "4px" }} /> Formula 1</span> fan, analyzing race strategies and cheering for my favorite teams.
      </p>

      <div className="f1-realistic-section">
        <div className="f1-realistic-track">
          <div className="rumble-strip top"></div>

          <div className="track-surface">
            {/* Start/Finish Line */}
            <div className="start-line"></div>

            {/* The Animated F1 Car */}
            <div className="f1-car-realistic">
              <svg viewBox="0 0 100 220" xmlns="http://www.w3.org/2000/svg" width="60" height="132" style={{ transform: 'rotate(-90deg)' }}>
                {/* Tires */}
                <rect x="5" y="20" width="18" height="40" rx="3" fill="#1a1a1a" />
                <rect x="77" y="20" width="18" height="40" rx="3" fill="#1a1a1a" />
                <rect x="5" y="150" width="22" height="45" rx="3" fill="#1a1a1a" />
                <rect x="73" y="150" width="22" height="45" rx="3" fill="#1a1a1a" />

                {/* Suspension */}
                <line x1="20" y1="40" x2="40" y2="60" stroke="#333" strokeWidth="3" />
                <line x1="80" y1="40" x2="60" y2="60" stroke="#333" strokeWidth="3" />
                <line x1="25" y1="170" x2="40" y2="150" stroke="#333" strokeWidth="3" />
                <line x1="75" y1="170" x2="60" y2="150" stroke="#333" strokeWidth="3" />

                {/* Front Wing */}
                <path d="M 10 10 Q 50 -5 90 10 L 95 25 L 5 25 Z" fill="#111" />
                <path d="M 15 15 Q 50 5 85 15 L 90 20 L 10 20 Z" fill="#e10600" />

                {/* Nose Cone */}
                <path d="M 45 25 L 55 25 L 60 70 L 40 70 Z" fill="#e10600" />

                {/* Chassis / Sidepods */}
                <path d="M 35 70 L 65 70 Q 85 100 80 150 L 20 150 Q 15 100 35 70 Z" fill="#e10600" />
                <path d="M 25 90 L 35 70 L 65 70 L 75 90 Z" fill="#111" />

                {/* Cockpit */}
                <rect x="42" y="85" width="16" height="25" rx="8" fill="#000" />

                {/* Halo */}
                <path d="M 40 100 Q 50 85 60 100" fill="none" stroke="#222" strokeWidth="3" />
                <line x1="50" y1="85" x2="50" y2="95" stroke="#222" strokeWidth="3" />

                {/* Engine Cover & Rear */}
                <path d="M 40 115 L 60 115 L 55 190 L 45 190 Z" fill="#e10600" />
                <path d="M 45 115 L 55 115 L 52 180 L 48 180 Z" fill="#111" />

                {/* Rear Wing */}
                <rect x="25" y="190" width="50" height="20" rx="2" fill="#111" />
                <rect x="28" y="195" width="44" height="10" rx="1" fill="#e10600" />
                <rect x="20" y="185" width="5" height="30" rx="1" fill="#e10600" />
                <rect x="75" y="185" width="5" height="30" rx="1" fill="#e10600" />
              </svg>
            </div>
          </div>

          <div className="rumble-strip bottom"></div>
        </div>
      </div>
    </div>
  );
};

export default Personal;
