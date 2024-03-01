"use strict";

const getElement = (id) => document.getElementById(id);

export const {
  monthlyRevenuesBarChart,
  monthlyExpendituresBarChart,
  monthlyProfitBarChart,
  monthlyCarGasCostsChart,
  fixedDistributionChart,
  monthlyInvestmentCostsChart,
  monthlyGroceryCostsChart,
} = {
  monthlyRevenuesBarChart: echarts.init(getElement("monthlyRevenuesBarChart")),
  monthlyExpendituresBarChart: echarts.init(getElement("monthlyExpendituresBarChart")),
  monthlyProfitBarChart: echarts.init(getElement("monthlyProfitsBarChart")),
  monthlyCarGasCostsChart: echarts.init(getElement("monthlyCarGasCostsChart")),
  fixedDistributionChart: echarts.init(getElement("fixedCostsDistributionChart")),
  monthlyInvestmentCostsChart: echarts.init(getElement("monthlyInvestmentCostsChart")),
  monthlyGroceryCostsChart: echarts.init(getElement("monthlyGroceryCostsChart")),
};