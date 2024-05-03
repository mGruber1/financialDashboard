"use strict";

const getElement = (id) => document.getElementById(id);

export const {
  monthlyRevenuesBarChart,
  monthlyExpendituresBarChart,
  top3ExpendituresChart,
  monthlyProfitBarChart,
  fixedDistributionChart,
} = {
  monthlyRevenuesBarChart: echarts.init(
    getElement("monthlyRevenuesBarChart"),
    null,
    { width: "auto", height: "auto" }
  ),
  monthlyExpendituresBarChart: echarts.init(
    getElement("monthlyExpendituresBarChart"),
    null,
    { width: "auto", height: "auto" }
  ),
  monthlyProfitBarChart: echarts.init(
    getElement("monthlyProfitsBarChart"),
    null,
    { width: "auto", height: "auto" }
  ),
  fixedDistributionChart: echarts.init(
    getElement("fixedCostsDistributionChart"),
    null,
    { width: "450px", height: "450px" }
  ),

  top3ExpendituresChart: echarts.init(
    getElement("top3ExpendituresChart"),
    null,
    { width: "450px", height: "450px" }
  ),
};
