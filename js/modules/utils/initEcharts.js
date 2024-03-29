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
  monthlyShoppingCostsChart,
  monthlyLeisureCostsChart,
} = {
  monthlyRevenuesBarChart: echarts.init(
    getElement("monthlyRevenuesBarChart"),
    null,
    { width: "auto", height: "100%" }
  ),
  monthlyExpendituresBarChart: echarts.init(
    getElement("monthlyExpendituresBarChart"),
    null,
    { width: "auto", height: "100%" }
  ),
  monthlyProfitBarChart: echarts.init(
    getElement("monthlyProfitsBarChart"),
    null,
    { width: "auto", height: "100%" }
  ),
  monthlyCarGasCostsChart: echarts.init(
    getElement("monthlyCarGasCostsChart"),
    null,
    { width: "100%", height: "100%" }
  ),
  fixedDistributionChart: echarts.init(
    getElement("fixedCostsDistributionChart"),
    null,
    { width: "450px", height: "350px" }
  ),
  monthlyInvestmentCostsChart: echarts.init(
    getElement("monthlyInvestmentCostsChart"),
    null,
    { width: "100%", height: "100%" }
  ),
  monthlyGroceryCostsChart: echarts.init(
    getElement("monthlyGroceryCostsChart"),
    null,
    { width: "100%", height: "100%" }
  ),
  monthlyShoppingCostsChart: echarts.init(
    getElement("monthlyShoppingCostsChart"),
    null,
    { width: "100%", height: "100%" }
  ),
  monthlyLeisureCostsChart: echarts.init(
    getElement("monthlyLeisureCostsChart"),
    null,
    { width: "100%", height: "100%" }
  ),
};
