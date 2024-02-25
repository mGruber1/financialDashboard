"use strict";

const getElement = (id) => document.getElementById(id);

export const {
  generalInfoField,
  monthlyRevenuesBarChart,
  monthlyExpendituresBarChart,
  monthlyProfitBarChart,
  fixedCostsDistributionField,
  monthlyCarGasChart,
  averageCarGasDisplayField,
  monthlyCarGasCostsChart,
  fixedDistributionChart,
  averageInvestmentCostsField,
  monthlyInvestmentCostsChart,
  averageGroceryCostsField,
  monthlyGroceryCostsChart,
} = {
  generalInfoField: getElement("generalInfo"),
  monthlyRevenuesBarChart: echarts.init(getElement("monthlyRevenuesBarChart")),
  monthlyExpendituresBarChart: echarts.init(getElement("monthlyExpendituresBarChart")),
  monthlyProfitBarChart: echarts.init(getElement("monthlyProfitsBarChart")),
  fixedCostsDistributionField: getElement("fixedCostsDistributionChart"),
  monthlyCarGasChart: getElement("monthlyCarGasCostsChart"),
  averageCarGasDisplayField: getElement("averageCarGasDisplayField"),
  monthlyCarGasCostsChart: echarts.init(getElement("monthlyCarGasCostsChart")),
  fixedDistributionChart: echarts.init(getElement("fixedCostsDistributionChart")),
  averageInvestmentCostsField: getElement("averageInvestmentCostsField"),
  monthlyInvestmentCostsChart: echarts.init(getElement("monthlyInvestmentCostsChart")),
  averageGroceryCostsField: getElement("averageGroceryCostsField"),
  monthlyGroceryCostsChart: echarts.init(getElement("monthlyGroceryCostsChart")),
};
