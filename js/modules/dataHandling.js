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
};

export const handleIncomeRate = (incomeRate) => {
  const newRow = document.createElement("tr");
  const descriptionCell = document.createElement("td");
  descriptionCell.innerHTML = "Income Rate";

  const valueCell = document.createElement("td");
  valueCell.innerHTML = incomeRate.toFixed(2) + " €";

  newRow.appendChild(descriptionCell);
  newRow.appendChild(valueCell);

  dataField.appendChild(newRow);
};

export const handleFixedCosts = () => {
  const newRow = document.createElement("tr");
  const descriptionCell = document.createElement("td");
  descriptionCell.innerHTML = "Fixed Costs";

  const valueCell = document.createElement("td");
  valueCell.innerHTML = fixedCosts.toFixed(2) + " €";

  newRow.appendChild(descriptionCell);
  newRow.appendChild(valueCell);

  dataField.appendChild(newRow);
};

if (await checkBackendReachability()) {
  loadData();
} else {
  showEmptyDataMessage();
}