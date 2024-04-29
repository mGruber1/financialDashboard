"use strict";

const getElement = (id) => document.getElementById(id);

export const {
  monthlyRevenuesBarChart,
  monthlyExpendituresBarChart,
  monthlyProfitBarChart,
  fixedDistributionChart,
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
  fixedDistributionChart: echarts.init(
    getElement("fixedCostsDistributionChart"),
    null,
    { width: "450px", height: "450px" }
  ),
};
