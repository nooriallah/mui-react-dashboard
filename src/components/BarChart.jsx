import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Sales", "Orders", "Profit"],
  ["2020", 1000, 400, 200],
  ["2021", 1170, 460, 250],
  ["2022", 660, 1120, 300],
  ["2023", 1030, 540, 350],
  ["2023", 931, 341, 511],
];

export const options = {
  chart: {
    title: "Company Performance",
    subtitle: "Sales, Expenses, and Profit: 2020-2024",
    
  },
};

export function BarChart() {
  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
