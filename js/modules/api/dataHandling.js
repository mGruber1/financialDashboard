"use strict";

import {
  getFixedCosts,
  getSumFixedCosts,
  getIncomeRate,
  getMonthlyExpenditures,
  getMonthlyRevenues,
  getCategories,
} from "./fetchData.js";

import {
  echartOptionsFixedCostsDistribution,
  echartOptionsMonthlyExpenditures,
  echartOptionsMonthlyProfits,
  echartOptionsMonthlyRevenues,
} from "../echarts/echartOptions.js";

import {
  handleIncomeRate,
  handleFixedCosts,
  handleFixedCostsIncomeRateRatio,
  handleMonthlyExpenditures,
  handleFixedCostsDistribution,
  calculateFixedCostsIncomeRateRatio,
  calculateSurPlusFunds,
  handleSurplusFunds,
  handleMonthlyProfits,
  handleMonthlyRevenues,
  handleKPIDisplay,
} from "./dataHandlingFunctions.js";

import {
  monthlyExpendituresBarChart,
  fixedDistributionChart,
  monthlyProfitBarChart,
  monthlyRevenuesBarChart,
} from "../utils/initEcharts.js";

import { generalInfoField, kpiDisplayField } from "../utils/getFields.js";

let fixedCosts = 0;
let sumFixedCosts = 0;
let incomeRate = 0;
let monthlyExpenditures = 0;
let monthlyRevenues = 0;
let categories = [];

export const loadData = async () => {
  try {
    var data = await Promise.all([
      getIncomeRate(),
      getSumFixedCosts(),
      getMonthlyExpenditures(),
      getFixedCosts(),
      getMonthlyRevenues(),
      getCategories(),
    ]);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  fixedCosts = data[3];
  sumFixedCosts = data[1][0].total_fixed_costs;
  incomeRate = data[0][0].income;
  monthlyExpenditures = data[2];
  monthlyRevenues = data[4];
  categories = data[5];

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

  handleMonthlyRevenues(
    echartOptionsMonthlyRevenues(monthlyRevenues),
    monthlyRevenuesBarChart
  );
  handleMonthlyExpenditures(
    echartOptionsMonthlyExpenditures(monthlyExpenditures),
    monthlyExpendituresBarChart
  );

  handleMonthlyProfits(
    echartOptionsMonthlyProfits(monthlyRevenues, monthlyExpenditures),
    monthlyProfitBarChart
  );

  handleFixedCostsDistribution(
    echartOptionsFixedCostsDistribution(fixedCosts),
    fixedDistributionChart
  );

  handleKPIDisplay(categories, kpiDisplayField);
};
