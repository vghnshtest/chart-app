import React from "react";
import { Pie } from "react-chartjs-2";
import "./style.css";
import { Chart, ArcElement, Tooltip } from "chart.js";
Chart.register(ArcElement, Tooltip);

const PieChart = ({ data }) => {
  const chartData = {
    labels: data.map((data) => data.name),
    datasets: [
      {
        label: "Percent",
        data: data.map((data) => data.percent),
        backgroundColor: data.map((data) => data.color),
        borderColor: data.map((data) => data.color),
        borderWidth: 0.1,
      },
    ],
  };

  return (
    <div className="pie-chart-container">
      <Pie
        data={chartData}
        height={10}
        options={{
          plugins: {
            tooltip: {
              backgroundColor: "white",
              titleColor: "Black",
              bodyColor: "Black",
              bodyFont: {
                size: 14,
              },
            },
          },
        }}
      />
    </div>
  );
};

export default PieChart;
