"use strict";

import {
  getFixedCosts,
  getSumFixedCosts,
  getIncomeRate,
  getMonthlyCosts,
  getAverageCarGasCosts,
  getMonthlyCarGasCosts,
} from "./apiCalls.js";

import {
  echartOptionsMonthlyCarGasCosts,
  echartOptionsFixedCostsDistribution,
  echartOptionsMonthlyCosts,
} from "../echarts/echartOptions.js";

import {
  handleIncomeRate,
  handleFixedCosts,
  handleFixedCostsIncomeRateRatio,
  handleAverageCarGasCosts,
  handleMonthlyCarGasCosts,
  handleFuckYouMoney,
  handleMonthlyCosts,
  handleFixedCostsDistribution,
  calculateFixedCostsIncomeRateRatio,
  calculateFuckYouMoney,
} from "./dataHandlingFunctions.js";

import {
  averageCarGasDisplayField,
  generalInfoField,
  monthlyCarGasCostsChart,
  monthlyCostsBarChart,
  fixedDistributionChart,
} from "../utils/getElements.js";

let fixedCosts = 0;
let sumFixedCosts = 0;
let incomeRate = 0;
let monthlyCosts = 0;
let averageCarGasCosts = 0;
let monthlyCarGasCosts = 0;

export const loadData = async () => {
  try {
    var data = await Promise.all([
      getIncomeRate(),
      getSumFixedCosts(),
      getMonthlyCosts(),
      getFixedCosts(),
      getAverageCarGasCosts(),
      getMonthlyCarGasCosts(),
    ]);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  fixedCosts = data[3];
  sumFixedCosts = data[1][0].total_fixed_costs;
  incomeRate = data[0][0].netto_pt;
  monthlyCosts = data[2];
  averageCarGasCosts = data[4][0].averageCarGasCosts.toFixed(2);
  monthlyCarGasCosts = data[5];

  handleIncomeRate(incomeRate, generalInfoField);
  handleFixedCosts(sumFixedCosts, generalInfoField);
  handleFixedCostsIncomeRateRatio(
    calculateFixedCostsIncomeRateRatio(incomeRate, sumFixedCosts),
    generalInfoField
  );
  handleFuckYouMoney(
    calculateFuckYouMoney(incomeRate, sumFixedCosts),
    generalInfoField
  );
  handleMonthlyCosts(
    echartOptionsMonthlyCosts(monthlyCosts),
    monthlyCostsBarChart
  );
  handleFixedCostsDistribution(
    echartOptionsFixedCostsDistribution(fixedCosts),
    fixedDistributionChart
  );
  handleAverageCarGasCosts(averageCarGasCosts, averageCarGasDisplayField);
  handleMonthlyCarGasCosts(
    echartOptionsMonthlyCarGasCosts(monthlyCarGasCosts),
    monthlyCarGasCostsChart
  );
};
