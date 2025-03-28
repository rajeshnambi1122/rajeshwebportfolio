import React, { useEffect, useState } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import { Tooltip } from "react-tooltip";
import { FaGithub } from "react-icons/fa";

const Heatmap = () => {
  const [values, setValues] = useState([]);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    // Unofficial GitHub contributions API endpoint
    // (If this API changes or becomes unavailable, you'll need to update this URL.)
    fetch(
      `https://github-contributions-api.jogruber.de/v4/rajeshnambi1122?y=${currentYear}`
    )
      .then((response) => response.json())
      .then((data) => {
        // Expected data structure: { contributions: [ { date: 'YYYY-MM-DD', count: number }, ... ] }
        if (data.contributions) {
          setValues(data.contributions);
        }
      })
      .catch((error) => {
        console.error("Error fetching contributions data:", error);
      });
  }, [currentYear]);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          background: "white",
          borderRadius: "15px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          padding: "20px",
          maxWidth: "400px",
          width: "90%",
          margin: "20px 0",
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
            GitHub Contributions
          </h2>
        </div>
        <div
          style={{
            width: "100%",
            overflow: "hidden",
          }}
        >
          <CalendarHeatmap
            startDate={new Date(currentYear, 0, 1)}
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
            gutterSize={1}
          />
        </div>
        <Tooltip id="github-tooltip" />
        <style>{`
          .react-calendar-heatmap {
            width: 100% !important;
            height: auto;
          }
          .react-calendar-heatmap rect {
            width: 15px;
            height: 15px;
          }
          .react-calendar-heatmap text {
            font-size: 12px;
          }
          @media (min-width: 1024px) {
            .react-calendar-heatmap rect {
              width: 8px;
              height: 8px;
            }
            .react-calendar-heatmap text {
              font-size: 8px;
            }
          }
          @media (min-width: 769px) and (max-width: 1023px) {
            .react-calendar-heatmap rect {
              width: 9px;
              height: 9px;
            }
            .react-calendar-heatmap text {
              font-size: 8px;
            }
          }
          @media (max-width: 768px) {
            .react-calendar-heatmap rect {
              width: 4px !important;
              height: 4px !important;
            }
            .react-calendar-heatmap text {
              font-size: 4px;
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
  );
};

export default Heatmap;
