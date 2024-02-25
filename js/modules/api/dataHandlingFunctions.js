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

export const handleAverageInvestmentCosts = (
  averageInvestmentCosts,
  averageInvestmentCostsField
) => {
  averageInvestmentCostsField.innerHTML = averageInvestmentCosts + " €";
};

export const handleMonthlyInvestmentCosts = (
  echartOptions,
  monthlyInvestmentCostsChart
) => {
  monthlyInvestmentCostsChart.setOption(echartOptions);
};

export const handleAverageGroceryCosts = (
  averageGroceryCosts,
  averageGroceryCostsDisplayField
) => {
  averageGroceryCostsDisplayField.innerHTML = averageGroceryCosts + " €";
};

export const handleMonthlyGroceryCosts = (
  echartOptions,
  monthlyGroceryCostsChart
) => {
  monthlyGroceryCostsChart.setOption(echartOptions);
};

export const handleSurplusFunds = (surplusFunds, generalInfoField) => {
  createNewDataRow(generalInfoField, "Surplus-Funds", surplusFunds, "€");
};

export const handleMonthlyExpenditures = (echartOptions, monthlyCostsBarChart) => {
  monthlyCostsBarChart.setOption(echartOptions);
};

export const handleMonthlyRevenues = () => {
  console.log("hello!");
}

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

export const calculateSurPlusFunds = (incomeRate, fixedCosts) => {
  const surplusFunds = incomeRate - fixedCosts;
  return surplusFunds;
};

export const showEmptyDataMessage = () => {
  const cardBodies = document.getElementsByClassName("card-body");

  for (let cardBody of cardBodies) {
    let emptyMessageContainer = document.createElement("div");
    emptyMessageContainer.classList.add("emptyDataDisplay");

    let emptyMessage = document.createElement("span");
    emptyMessage.innerHTML = "No Data Available";

    emptyMessageContainer.appendChild(emptyMessage);
    cardBody.appendChild(emptyMessageContainer);
  }
};
