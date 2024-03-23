import React from "react";
import { Tooltip } from "react-tooltip";
import "./style.css";

const BarChart = ({ data }) => {
  return (
    <div className="bar-chart">
      {data?.map((item, index) => (
        <div
          key={index}
          className="bar"
          style={{
            width: `${item?.percent}%`,
            background: item?.color,
          }}
          data-tooltip-id={`my-tooltip-inline-${index}`}
          data-tooltip-content={`${item?.name}: ${item?.percent}%`}
        />
      ))}
      {data?.map((_, index) => (
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
