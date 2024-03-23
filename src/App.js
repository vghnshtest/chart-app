import React from "react";
import PieChart from "./components/PieChart";
import BarChart from "./components/BarChart";

const data = [30, 20, 10, 40];
const colors = ["red", "blue", "green", "orange"];

const App = () => {
  return (
    <div>
      <PieChart data={data} colors={colors} />
      <BarChart />
    </div>
  );
};

export default App;
