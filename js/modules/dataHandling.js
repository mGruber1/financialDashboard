"use strict"

import {
  checkBackendReachability,
  getFixedCosts,
  getIncomeRate,
} from "./apiCalls.js";

export const dataField = document.getElementById("dataList");
let fixedCosts = 0;
let incomeRate = 0;

export const showEmptyDataMessage = () => {
  const newRow = document.createElement("tr");
  const newCell = document.createElement("td");
  newCell.innerHTML = "No Data Available!";

  newRow.appendChild(newCell);
  dataField.appendChild(newRow);

  dataField.classList.add("emptyDataDisplay");
};

export const loadData = async () => {
  let data = await Promise.all([getIncomeRate(), getFixedCosts()]);

  fixedCosts = data[1][0].total_fixed_costs;
  incomeRate = data[0][0].netto_pt;

  handleIncomeRate(incomeRate);
  handleFixedCosts(fixedCosts);
  handleFixedCostsIncomeRateRatio(calculateFixedCostsIncomeRateRatio(incomeRate,fixedCosts));
  handleFuckYouMoney(calculateFuckYouMoney(incomeRate, fixedCosts));
};

export const createNewDataRow = (cellDescription, value, unit) => {
    const newRow = document.createElement("tr");
    const descriptionCell = document.createElement("td");
    descriptionCell.innerHTML = cellDescription;
  
    const valueCell = document.createElement("td");
    valueCell.innerHTML = value.toFixed(2) + unit;
  
    newRow.appendChild(descriptionCell);
    newRow.appendChild(valueCell);
  
    dataField.appendChild(newRow);
}

export const handleIncomeRate = (incomeRate) => {
    createNewDataRow("Income Rate",incomeRate, " €");
};

export const handleFixedCosts = () => {
    createNewDataRow("Fixed Costs",incomeRate, " €");
};

export const handleFixedCostsIncomeRateRatio = (fixedCostsIncomeRateRatio) => {
    createNewDataRow("IC/C-Ratio",fixedCostsIncomeRateRatio, " %");
}

export const handleFuckYouMoney = (fuckYouMoney) => {
    createNewDataRow("FuckYou-Money",fuckYouMoney," €");
}

export const calculateFixedCostsIncomeRateRatio = (incomeRate, fixedCosts) => {
    const fixedCostsIncomeRateRatio = (fixedCosts / incomeRate * 100);
    console.log(fixedCostsIncomeRateRatio)
    return fixedCostsIncomeRateRatio;
}

export const calculateFuckYouMoney = (incomeRate, fixedCosts) => {
    const fuckYouMoney = incomeRate - fixedCosts;
    return fuckYouMoney
}
if (await checkBackendReachability()) {
  loadData();
} else {
  showEmptyDataMessage();
}