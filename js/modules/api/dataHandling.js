"use strict";

import {
  getFixedCosts,
  getSumFixedCosts,
  getIncomeRate,
  getMonthlyCosts,
} from "./apiCalls.js";

import {
  echartOptionsFixedCostsDistribution,
  echartOptionsMonthlyCosts,
} from "../echarts/echartOptions.js";

import { createNewDataRow } from "../utils/createNewDataRow.js";

let fixedCosts = 0;
let sumFixedCosts = 0;
let incomeRate = 0;
let monthlyCosts = 0;
let generalInfoField = document.getElementById("generalInfo");

export const showEmptyDataMessage = (displayFieldList) => {
  for (const element of displayFieldList) {
    const newRow = document.createElement("tr");
    const newCell = document.createElement("td");
    newCell.innerHTML = "No Data Available!";
    newRow.appendChild(newCell);

    element.appendChild(newRow);
    element.classList.add("emptyDataDisplay");
    element.parentElement.style.overflowY = "hidden";
  }
};

export const loadData = async () => {
  try {
    var data = await Promise.all([
      getIncomeRate(),
      getSumFixedCosts(),
      getMonthlyCosts(),
      getFixedCosts(),
    ]);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  fixedCosts = data[3];
  sumFixedCosts = data[1][0].total_fixed_costs;
  incomeRate = data[0][0].netto_pt;
  monthlyCosts = data[2];

  handleIncomeRate(incomeRate);
  handleFixedCosts(sumFixedCosts);
  handleFixedCostsIncomeRateRatio(
    calculateFixedCostsIncomeRateRatio(incomeRate, sumFixedCosts)
  );
  handleFuckYouMoney(calculateFuckYouMoney(incomeRate, sumFixedCosts));
  handleMonthlyCosts(echartOptionsMonthlyCosts(monthlyCosts));
  handleFixedCostsDistribution(echartOptionsFixedCostsDistribution(fixedCosts));
};

export const handleIncomeRate = (incomeRate) => {
  createNewDataRow(generalInfoField, "Income Rate", incomeRate, "€");
};

export const handleFixedCosts = () => {
  createNewDataRow(generalInfoField, "Fixed Costs", sumFixedCosts, "€");
};

export const handleFixedCostsIncomeRateRatio = (fixedCostsIncomeRateRatio) => {
  createNewDataRow(
    generalInfoField,
    "IC/C-Ratio",
    fixedCostsIncomeRateRatio,
    "%"
  );
};

export const handleFuckYouMoney = (fuckYouMoney) => {
  createNewDataRow(generalInfoField, "FuckYou-Money", fuckYouMoney, "€");
};

export const handleMonthlyCosts = (echartOptions) => {
  var monthlyCostsBarChart = echarts.init(
    document.getElementById("monthlyCostsBarChart")
  );
  monthlyCostsBarChart.setOption(echartOptions);
};

export const handleFixedCostsDistribution = (echartOptions) => {
  var fixedDistributionChart = echarts.init(
    document.getElementById("fixedCostsDistributionChart")
  );
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
