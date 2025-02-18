import React, { useEffect, useState } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import { Tooltip } from "react-tooltip";

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
    <div style={{ maxWidth: "100%", padding: "5px" }}>
      <h2
        style={{
          marginBottom: "5px",
          textAlign: "center",
          lineHeight: "1.2",
        }}
      >
        GitHub Contributions
      </h2>
      <div
        style={{
          fontSize: "6px",
          overflowX: "auto",
          padding: "2px",
          margin: "10px",
        }}
      >
        <CalendarHeatmap
          startDate={new Date(currentYear, 0, 1)}
          endDate={new Date()}
          values={values}
          classForValue={(value) => {
            if (!value) return "color-empty";
            return `color-scale-${Math.min(4, Math.floor(value.count / 3))}`;
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
          font-size: 4px;
          width: 300px;
        }
        .react-calendar-heatmap rect {
          width: 6px;
          height: 6px;
          rx: 1px;
          ry: 1px;
        }
        .react-calendar-heatmap text {
          font-size: 4px;
        }
        @media (max-width: 768px) {
          .react-calendar-heatmap rect {
            width: 3px !important;
            height: 3px !important;
          }
            .react-calendar-heatmap {
          font-size: 4px;
          width: 200px;
        }
          .react-calendar-heatmap text {
            font-size: 3px;
          }
          h2 {
            font-size: 0.8rem !important;
          }
        }
        .color-empty { fill: #ebedf0; }
        .color-scale-0 { fill: #ebedf0; }
        .color-scale-1 { fill: #7bc96f; }
        .color-scale-2 { fill: #239a3b; }
        .color-scale-3 { fill: #196127; }
        .color-scale-4 { fill: #0d2c1a; }
      `}</style>
    </div>
  );
};

export default Heatmap;
