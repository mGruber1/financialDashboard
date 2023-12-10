"use strict"

import {
  getFixedCosts,
  getIncomeRate,
  getMonthlyCosts
} from "./apiCalls.js";

import {
    echartOptions
} from "../echarts/echartOptions.js";

import { createNewDataRow } from "../utils/createNewDataRow.js";

let fixedCosts = 0;
let incomeRate = 0;
let monthlyCosts = 0;
// let displayFieldList = displayFieldList
let generalInfoField = document.getElementById("generalInfo");

export const showEmptyDataMessage = (displayFieldList) => {

    for (const element of displayFieldList) {
          const newRow = document.createElement("tr");
            const newCell = document.createElement("td");
            newCell.innerHTML = "No Data Available!";
            newRow.appendChild(newCell);

            element.appendChild(newRow);
            element.classList.add("emptyDataDisplay");
            element.parentElement.style.overflowY = "hidden";
    }
};

export const loadData = async () => {
  let data = await Promise.all([getIncomeRate(), getFixedCosts(), getMonthlyCosts()]);

  fixedCosts = data[1][0].total_fixed_costs;
  incomeRate = data[0][0].netto_pt;
  monthlyCosts = data[2];

  handleIncomeRate(incomeRate);
  handleFixedCosts(fixedCosts);
  handleFixedCostsIncomeRateRatio(calculateFixedCostsIncomeRateRatio(incomeRate,fixedCosts));
  handleFuckYouMoney(calculateFuckYouMoney(incomeRate, fixedCosts));
  handleMonthlyCosts(monthlyCosts, echartOptions);
};


export const handleIncomeRate = (incomeRate) => {
    createNewDataRow(generalInfoField,"Income Rate",incomeRate, "€");
};

export const handleFixedCosts = () => {
    createNewDataRow(generalInfoField,"Fixed Costs",fixedCosts, "€");
};

export const handleFixedCostsIncomeRateRatio = (fixedCostsIncomeRateRatio) => {
    createNewDataRow(generalInfoField,"IC/C-Ratio",fixedCostsIncomeRateRatio, "%");
}

export const handleFuckYouMoney = (fuckYouMoney) => {
    createNewDataRow(generalInfoField,"FuckYou-Money",fuckYouMoney,"€");
}

export const handleMonthlyCosts = (monthlyCosts, echartOptions) => {
    var chart = echarts.init(chartContainer);
    chart.setOption(echartOptions(monthlyCosts));
}

export const calculateFixedCostsIncomeRateRatio = (incomeRate, fixedCosts) => {
    const fixedCostsIncomeRateRatio = (fixedCosts / incomeRate * 100);
    return fixedCostsIncomeRateRatio;
}

export const calculateFuckYouMoney = (incomeRate, fixedCosts) => {
    const fuckYouMoney = incomeRate - fixedCosts;
    return fuckYouMoney
}