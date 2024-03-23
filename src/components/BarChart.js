import React from "react";
import { Tooltip } from "react-tooltip";
import "./style.css";

const BarChart = () => {
  const data = [20, 30, 50]; // Example data array representing percentages

  return (
    <div className="bar-chart">
      {data.map((item, index) => (
        <div
          key={index}
          className="bar"
          style={{ width: `${item}%` }}
          data-tooltip-id={`my-tooltip-inline-${index}`}
          data-tooltip-content={`Tooltip for bar ${index + 1}`}
        />
      ))}
      {data.map((_, index) => (
        <Tooltip
          key={index}
          id={`my-tooltip-inline-${index}`}
          className="tooltip"
        />
      ))}
    </div>
  );
};

export default BarChart;
