"use strict";

import {
  getAllFixedCosts,
  getSumFixedCosts,
  getIncomeRate,
  getMonthlyExpenditures,
  getMonthlyRevenues,
  getCategories,
  getLastMonthExpenditures,
} from "./fetchData.js";

import {
  echartOptionsFixedCostsDistribution,
  echartOptionsMonthlyExpenditures,
  echartOptionsMonthlyProfits,
  echartOptionsMonthlyRevenues,
  echartOptionsTop3Expenditures,
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
  handleTop3Expenditures,
} from "./dataHandlingFunctions.js";

import {
  monthlyExpendituresBarChart,
  fixedDistributionChart,
  monthlyProfitBarChart,
  monthlyRevenuesBarChart,
  top3ExpendituresChart,
} from "../utils/initEcharts.js";

import { generalInfoField, kpiDisplayField } from "../utils/getFields.js";

let allFixedCosts = 0;
let sumFixedCosts = 0;
let incomeRate = 0;
let monthlyExpenditures = 0;
let monthlyRevenues = 0;
let categories = [];
let lastMonthExpenditures = [];

export const loadData = async () => {
  try {
    var data = await Promise.all([
      getIncomeRate(),
      getMonthlyExpenditures(),
      getAllFixedCosts(),
      getMonthlyRevenues(),
      getCategories(),
      getLastMonthExpenditures(),
      getSumFixedCosts(),
    ]);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  incomeRate = data[0] ?? 0;
  monthlyExpenditures = data[1] ?? 0;
  allFixedCosts = data[2] ?? 0;
  monthlyRevenues = data[3] ?? 0;
  categories = data[4] ?? 0;
  lastMonthExpenditures = data[5] ?? 0;
  sumFixedCosts = data[6];

  handleIncomeRate(incomeRate, generalInfoField);
  handleFixedCosts(sumFixedCosts, generalInfoField);
  handleFixedCostsIncomeRateRatio(
    calculateFixedCostsIncomeRateRatio(incomeRate, allFixedCosts),
    generalInfoField
  );
  handleSurplusFunds(
    calculateSurPlusFunds(incomeRate, allFixedCosts),
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
    echartOptionsFixedCostsDistribution(allFixedCosts),
    fixedDistributionChart
  );

  handleKPIDisplay(categories, kpiDisplayField);

  handleTop3Expenditures(
    echartOptionsTop3Expenditures(lastMonthExpenditures),
    top3ExpendituresChart
  );
};
