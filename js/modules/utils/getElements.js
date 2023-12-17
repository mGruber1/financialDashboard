"use strict";

export const generalInfoField = document.getElementById("generalInfo");
export const monthlyCostsField = document.getElementById("monthlyCostsField");
export const monthlyCostsBarChart = echarts.init(
  document.getElementById("monthlyCostsBarChart")
);
export const fixedCostsDistributionField = document.getElementById(
  "fixedCostsDistributionChart"
);
export const monthlyCarGasChart = document.getElementById(
  "monthlyCarGasCostsChart"
);

export const averageCarGasDisplayField = document.getElementById(
  "averageCarGasDisplayField"
);
export const monthlyCarGasCostsChart = echarts.init(
  document.getElementById("monthlyCarGasCostsChart")
);

export const fixedDistributionChart = echarts.init(
  document.getElementById("fixedCostsDistributionChart")
);
