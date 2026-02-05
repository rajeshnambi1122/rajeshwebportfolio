import React, { useEffect, useState } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import { Tooltip } from "react-tooltip";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Heatmap = () => {
  const [values, setValues] = useState([]);
  const currentYear = new Date().getFullYear();

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

  return (
    <>
      {/* GitHub Heatmap */}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          padding: "20px 20px 0",
        }}
      >
        <div
          style={{
            background: "#fff",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
            padding: "20px",
            maxWidth: "900px",
            width: "95%",
            margin: "20px 0",
            border: "1px solid rgba(0,0,0,0.06)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              marginBottom: "15px",
            }}
          >
            <FaGithub style={{ fontSize: "2rem", color: "#333" }} />
            <h2
              style={{
                fontSize: "1.5rem",
                color: "#333",
                margin: 0,
              }}
            >
              GitHub Commits
            </h2>
          </div>
          <div
            style={{
              width: "100%",
              overflow: "hidden",
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
              showWeekdayLabels={false}
              gutterSize={3}
            />
          </div>
          <Tooltip id="github-tooltip" />
          <style>{`
            .react-calendar-heatmap {
              width: 100% !important;
              height: auto;
            }
            .react-calendar-heatmap rect {
              width: 16px;
              height: 16px;
              rx: 3;
              ry: 3;
              transition: all 0.2s ease;
            }
            .react-calendar-heatmap rect:hover {
              stroke: #555;
              stroke-width: 1px;
              transform: scale(1.1);
              transform-origin: center;
            }
            .react-calendar-heatmap text {
              font-size: 13px;
              fill: #555;
              font-weight: 500;
            }
            @media (max-width: 2000px) {
              .react-calendar-heatmap rect {
                width: 12px !important;
                height: 12px !important;
              }
              .react-calendar-heatmap text {
                font-size: 10px;
              }
            }
            .color-empty { fill: #ebedf0; }
            .color-scale-1 { fill: #9be9a8; }
            .color-scale-2 { fill: #40c463; }
            .color-scale-3 { fill: #30a14e; }
            .color-scale-4 { fill: #216e39; }
          `}</style>
        </div>
      </div>

      {/* LeetCode Widget */}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          padding: "10px",
          marginBottom: "50px"
        }}
      >
        <div
          style={{
            background: "#fff",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
            padding: "20px",
            maxWidth: "900px",
            width: "95%",
            border: "1px solid rgba(0,0,0,0.06)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              marginBottom: "15px",
            }}
          >
            <SiLeetcode style={{ fontSize: "2rem", color: "#FFA116" }} />
            <h2
              style={{
                fontSize: "1.5rem",
                color: "#333",
                margin: 0,
              }}
            >
              LeetCode Stats - Rajesh Nambi
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
                maxWidth: "500px",
                borderRadius: "8px",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Heatmap;
