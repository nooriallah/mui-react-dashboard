import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Product", "2024 Population", "2015 Population"],
  ["Mobile Iphone 6 +", 8175000, 8008000],
  ["Computer Dell 7390", 3792000, 3694000],
  ["Jewerly", 2695000, 2896000],
  ["Lively hood", 2099000, 1953000],
  ["Cola", 1526000, 1517000],
];

export const options = {
  title: "Most selled products",
  chartArea: { width: "50%" },
  hAxis: {
    title: "Total Population",
    minValue: 0,
  },
  vAxis: {
    title: "Profitable",
  },
};

export default function HBarChart() {
  return (
    <Chart
      chartType="BarChart"
      width="100%"
      height="230px"
      data={data}
      options={options}
    />
  );
}
