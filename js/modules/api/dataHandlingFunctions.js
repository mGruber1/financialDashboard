"use strict";

import { createNewDataRow } from "../utils/createNewDataRow.js";

export const handleIncomeRate = (incomeRate, generalInfoField) => {
  createNewDataRow(generalInfoField, "Income Rate", incomeRate, "€");
};

export const handleFixedCosts = (sumFixedCosts, generalInfoField) => {
  createNewDataRow(generalInfoField, "Fixed Costs", sumFixedCosts, "€");
};

export const handleFixedCostsIncomeRateRatio = (
  fixedCostsIncomeRateRatio,
  generalInfoField
) => {
  createNewDataRow(
    generalInfoField,
    "IC/C-Ratio",
    fixedCostsIncomeRateRatio,
    "%"
  );
};

export const handleAverageCarGasCosts = (
  averageCarGasCosts,
  averageCarGasDisplayField
) => {
  averageCarGasDisplayField.innerHTML = averageCarGasCosts + " €";
};

export const handleMonthlyCarGasCosts = (
  echartOptions,
  monthlyCarGasCostsChart
) => {
  monthlyCarGasCostsChart.setOption(echartOptions);
};

export const handleFuckYouMoney = (fuckYouMoney, generalInfoField) => {
  createNewDataRow(generalInfoField, "FuckYou-Money", fuckYouMoney, "€");
};

export const handleMonthlyCosts = (echartOptions, monthlyCostsBarChart) => {
  monthlyCostsBarChart.setOption(echartOptions);
};

export const handleFixedCostsDistribution = (
  echartOptions,
  fixedDistributionChart
) => {
  fixedDistributionChart.setOption(echartOptions);
};

export const calculateFixedCostsIncomeRateRatio = (incomeRate, fixedCosts) => {
  const fixedCostsIncomeRateRatio = (fixedCosts / incomeRate) * 100;
  return fixedCostsIncomeRateRatio;
};

export const calculateFuckYouMoney = (incomeRate, fixedCosts) => {
  const fuckYouMoney = incomeRate - fixedCosts;
  return fuckYouMoney;
};
