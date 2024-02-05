"use strict";

import {
  getFixedCosts,
  getSumFixedCosts,
  getIncomeRate,
  getMonthlyCosts,
  getAverageCarGasCosts,
  getMonthlyCarGasCosts,
  getMonthlyInvestmentPlanCosts,
  getAverageInvestmentCosts,
  getAverageGroceryCosts,
  getMonthlyGroceryCosts,
} from "./apiCalls.js";

import {
  echartOptionsMonthlyCarGasCosts,
  echartOptionsFixedCostsDistribution,
  echartOptionsMonthlyCosts,
  echartOptionsMonthlyInvestmentCosts,
  echartOptionsMonthlyGroceryCosts,
} from "../echarts/echartOptions.js";

import {
  handleIncomeRate,
  handleFixedCosts,
  handleFixedCostsIncomeRateRatio,
  handleAverageCarGasCosts,
  handleMonthlyCarGasCosts,
  handleMonthlyCosts,
  handleFixedCostsDistribution,
  handleAverageInvestmentCosts,
  handleMonthlyInvestmentCosts,
  handleAverageGroceryCosts,
  handleMonthlyGroceryCosts,
  calculateFixedCostsIncomeRateRatio,
  calculateSurPlusFunds,
  handleSurplusFunds,
} from "./dataHandlingFunctions.js";

import {
  averageCarGasDisplayField,
  generalInfoField,
  monthlyCarGasCostsChart,
  monthlyCostsBarChart,
  fixedDistributionChart,
  averageInvestmentCostsField,
  monthlyInvestmentCostsChart,
  monthlyGroceryCostsChart,
} from "../utils/getElements.js";

let fixedCosts = 0;
let sumFixedCosts = 0;
let incomeRate = 0;
let monthlyCosts = 0;
let averageCarGasCosts = 0;
let monthlyCarGasCosts = 0;
let averageInvestmentCosts = 0;
let monthlyInvestmentCosts = 0;
let averageGroceryCosts = 0;
let monthlyGroceryCosts = 0;

export const loadData = async () => {
  try {
    var data = await Promise.all([
      getIncomeRate(),
      getSumFixedCosts(),
      getMonthlyCosts(),
      getFixedCosts(),
      getAverageCarGasCosts(),
      getMonthlyCarGasCosts(),
      getMonthlyInvestmentPlanCosts(),
      getAverageInvestmentCosts(),
      getAverageGroceryCosts(),
      getMonthlyGroceryCosts(),
    ]);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  fixedCosts = data[3];
  sumFixedCosts = data[1][0].total_fixed_costs;
  incomeRate = data[0][0].amount;
  monthlyCosts = data[2];
  averageCarGasCosts = data[4][0].averageCarGasCosts.toFixed(2);
  monthlyCarGasCosts = data[5];
  monthlyInvestmentCosts = data[6];
  averageInvestmentCosts = data[7][0].averageInvestmentCosts.toFixed(2);
  averageGroceryCosts = data[8][0].averageGroceryCosts.toFixed(2);
  monthlyGroceryCosts = data[9];

  handleIncomeRate(incomeRate, generalInfoField);
  handleFixedCosts(sumFixedCosts, generalInfoField);
  handleFixedCostsIncomeRateRatio(
    calculateFixedCostsIncomeRateRatio(incomeRate, sumFixedCosts),
    generalInfoField
  );
  handleSurplusFunds(
    calculateSurPlusFunds(incomeRate, sumFixedCosts),
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

  handleAverageInvestmentCosts(
    averageInvestmentCosts,
    averageInvestmentCostsField
  );

  handleMonthlyInvestmentCosts(
    echartOptionsMonthlyInvestmentCosts(monthlyInvestmentCosts),
    monthlyInvestmentCostsChart
  );
  handleAverageGroceryCosts(averageGroceryCosts, averageGroceryCostsField);

  handleMonthlyGroceryCosts(
    echartOptionsMonthlyGroceryCosts(monthlyGroceryCosts),
    monthlyGroceryCostsChart
  );
};
