"use strict";

import {
  getFixedCosts,
  getSumFixedCosts,
  getIncomeRate,
  getMonthlyExpenditures,
  getAverageCarGasCosts,
  getMonthlyCarGasCosts,
  getMonthlyInvestmentPlanCosts,
  getAverageInvestmentCosts,
  getAverageGroceryCosts,
  getMonthlyGroceryCosts,
  getMonthlyRevenues,
} from "./apiCalls.js";

import {
  echartOptionsMonthlyCarGasCosts,
  echartOptionsFixedCostsDistribution,
  echartOptionsMonthlyExpenditures,
  echartOptionsMonthlyInvestmentCosts,
  echartOptionsMonthlyGroceryCosts,
  echartOptionsMonthlyProfits,
} from "../echarts/echartOptions.js";

import {
  handleIncomeRate,
  handleFixedCosts,
  handleFixedCostsIncomeRateRatio,
  handleAverageCarGasCosts,
  handleMonthlyCarGasCosts,
  handleMonthlyExpenditures,
  handleFixedCostsDistribution,
  handleAverageInvestmentCosts,
  handleMonthlyInvestmentCosts,
  handleAverageGroceryCosts,
  handleMonthlyGroceryCosts,
  calculateFixedCostsIncomeRateRatio,
  calculateSurPlusFunds,
  handleSurplusFunds,
  handleMonthlyProfits,
} from "./dataHandlingFunctions.js";

import {
  averageCarGasDisplayField,
  generalInfoField,
  monthlyCarGasCostsChart,
  monthlyExpendituresBarChart,
  fixedDistributionChart,
  averageInvestmentCostsField,
  monthlyInvestmentCostsChart,
  monthlyGroceryCostsChart,
  monthlyProfitBarChart,
} from "../utils/getElements.js";

let fixedCosts = 0;
let sumFixedCosts = 0;
let incomeRate = 0;
let monthlyExpenditures = 0;
let averageCarGasCosts = 0;
let monthlyCarGasCosts = 0;
let averageInvestmentCosts = 0;
let monthlyInvestmentCosts = 0;
let averageGroceryCosts = 0;
let monthlyGroceryCosts = 0;
let monthlyRevenues = 0;

export const loadData = async () => {
  try {
    var data = await Promise.all([
      getIncomeRate(),
      getSumFixedCosts(),
      getMonthlyExpenditures(),
      getFixedCosts(),
      getAverageCarGasCosts(),
      getMonthlyCarGasCosts(),
      getMonthlyInvestmentPlanCosts(),
      getAverageInvestmentCosts(),
      getAverageGroceryCosts(),
      getMonthlyGroceryCosts(),
      getMonthlyRevenues()
    ]);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  fixedCosts = data[3];
  sumFixedCosts = data[1][0].total_fixed_costs;
  incomeRate = data[0][0].amount;
  monthlyExpenditures = data[2];
  averageCarGasCosts = data[4][0].averageCarGasCosts.toFixed(2);
  monthlyCarGasCosts = data[5];
  monthlyInvestmentCosts = data[6];
  averageInvestmentCosts = data[7][0].averageInvestmentCosts.toFixed(2);
  averageGroceryCosts = data[8][0].averageGroceryCosts.toFixed(2);
  monthlyGroceryCosts = data[9];
  monthlyRevenues = data[10];

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
  handleMonthlyExpenditures(
    echartOptionsMonthlyExpenditures(monthlyExpenditures),
    monthlyExpendituresBarChart
  );

  handleMonthlyProfits(
    echartOptionsMonthlyProfits(monthlyRevenues, monthlyExpenditures), monthlyProfitBarChart
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
