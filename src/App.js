import React from "react";
import PieChart from "./components/PieChart";
import BarChart from "./components/BarChart";
import { Card } from "./components/Card";
import "./App.css";

const chartData = [
  { id: 1, name: "Flexi Cap Fund", percent: "16.67", color: "#75FFFF" },
  { id: 2, name: "ELSS", percent: "25.00", color: "#AA75FF" },
  { id: 3, name: "Small Cap Fund", percent: "20.83", color: "#FF7BF2" },
  { id: 4, name: "Index Fund", percent: "20.83", color: "#FFC46A" },
  { id: 5, name: "Sectoral Fund", percent: "8.33", color: "#FF8E5D" },
  { id: 6, name: "Large & Mid Cap Fund", percent: "8.33", color: "#75D6FF" },
];

const App = () => {
  return (
    <div className="main">
      <Card
        title="Sub-Category"
        description="The assets are distributed between equity and cash & equivalents. "
        data={chartData}
        ChartComponent={PieChart}
      />
      <Card
        title="Fund Distribution"
        description="A mutual fund distribution represents the earnings of a fund being passed on to the individual investor or unit holder of the fund."
        data={chartData}
        ChartComponent={BarChart}
      />
    </div>
  );
};

export default App;
