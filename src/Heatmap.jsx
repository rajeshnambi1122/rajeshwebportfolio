import React, { useEffect, useState, useRef } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import { Tooltip } from "react-tooltip";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Heatmap = () => {
  const [values, setValues] = useState([]);
  const currentYear = new Date().getFullYear();
  const heatmapScrollRef = useRef(null);

  useEffect(() => {
    // Fetch data from both current and previous year to show rolling 12 months
    const previousYear = currentYear - 1;

    const fetchYear = (year) =>
      fetch(`https://github-contributions-api.jogruber.de/v4/rajeshnambi1122?y=${year}`)
        .then((response) => response.json())
        .catch((error) => {
          console.error(`Error fetching contributions for ${year}:`, error);
          return { contributions: [] };
        });

    // Fetch both years in parallel
    Promise.all([fetchYear(previousYear), fetchYear(currentYear)])
      .then(([prevYearData, currentYearData]) => {
        // Merge contributions from both years
        const allContributions = [
          ...(prevYearData.contributions || []),
          ...(currentYearData.contributions || [])
        ];

        // Filter to only show last 12 months
        const oneYearAgo = new Date();
        oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

        const filteredContributions = allContributions.filter(contribution => {
          const contributionDate = new Date(contribution.date);
          return contributionDate >= oneYearAgo && contributionDate <= new Date();
        });

        setValues(filteredContributions);
      })
      .catch((error) => {
        console.error("Error fetching contributions data:", error);
      });
  }, [currentYear]);

  // Scroll heatmap to the end (most recent) on load
  useEffect(() => {
    if (values.length > 0 && heatmapScrollRef.current) {
      setTimeout(() => {
        heatmapScrollRef.current.scrollLeft = heatmapScrollRef.current.scrollWidth;
      }, 100);
    }
  }, [values]);

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "40px",
      padding: "40px 20px",
      margin: "0 auto",
      maxWidth: "1200px"
    }}>
      {/* GitHub Heatmap */}
      <div
        style={{
          background: "transparent",
          padding: "20px 10px",
          width: "100%",
          maxWidth: "900px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            marginBottom: "25px",
          }}
        >
          <FaGithub style={{ fontSize: "2.2rem", color: "#24292e" }} />
          <h2
            style={{
              fontSize: "1.8rem",
              color: "#24292e",
              margin: 0,
              fontWeight: "700",
            }}
          >
            GitHub Contributions
          </h2>
        </div>
        <div
          ref={heatmapScrollRef}
          style={{
            width: "100%",
            overflowX: "auto",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <div
            style={{
              minWidth: "750px",
              padding: "10px 30px 10px 10px",
            }}
          >
            <CalendarHeatmap
              startDate={new Date(new Date().setFullYear(new Date().getFullYear() - 1))}
              endDate={new Date()}
              values={values}
              classForValue={(value) => {
                if (!value || value.count === 0) return "color-empty";
                if (value.count === 1) return "color-scale-1";
                if (value.count === 2) return "color-scale-2";
                if (value.count <= 4) return "color-scale-3";
                return "color-scale-4";
              }}
              tooltipDataAttrs={(value) => ({
                "data-tooltip-id": "github-tooltip",
                "data-tooltip-content": value?.date
                  ? `${value.date}: ${value.count} contributions`
                  : "No contributions",
              })}
              showMonthLabels={true}
              showWeekdayLabels={true}
              gutterSize={3}
            />
          </div>
        </div>
        <Tooltip id="github-tooltip" style={{ borderRadius: "8px", padding: "8px 12px", fontSize: "14px", backgroundColor: "#24292e", color: "#fff", zIndex: 100 }} />
        <style>{`
          .react-calendar-heatmap {
            width: 100% !important;
            height: auto;
          }
          .react-calendar-heatmap rect {
            width: 12px;
            height: 12px;
            rx: 3;
            ry: 3;
            transition: all 0.2s ease;
          }
          .react-calendar-heatmap rect:hover {
            stroke: #24292e;
            stroke-width: 1.5px;
            transform: scale(1.15);
            transform-origin: center;
          }
          .react-calendar-heatmap text {
            font-size: 11px;
            fill: #768390;
            font-weight: 500;
          }
          .color-empty { fill: #ebedf0; }
          .color-scale-1 { fill: #9be9a8; }
          .color-scale-2 { fill: #40c463; }
          .color-scale-3 { fill: #30a14e; }
          .color-scale-4 { fill: #216e39; }
        `}</style>
      </div>

      {/* LeetCode Widget */}
      <div
        style={{
          background: "transparent",
          padding: "20px 10px",
          width: "100%",
          maxWidth: "900px",
          marginBottom: "30px"
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            marginBottom: "25px",
          }}
        >
          <SiLeetcode style={{ fontSize: "2.2rem", color: "#FFA116" }} />
          <h2
            style={{
              fontSize: "1.8rem",
              color: "#333",
              margin: 0,
              fontWeight: "700",
            }}
          >
            LeetCode Stats
          </h2>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src="https://leetcard.jacoblin.cool/Jrjp0REPdl?theme=light&font=Karma&ext=heatmap"
            alt="LeetCode Stats"
            style={{
              width: "100%",
              maxWidth: "550px",
              borderRadius: "12px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
              transition: "transform 0.3s ease"
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          />
        </div>
      </div>
    </div>
  );
};

export default Heatmap;
