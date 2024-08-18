"use strict";
export const handleDashboardData = (
  years,
  allExpenditures,
  allRevenues,
  dashboardDataField
) => {
  years.forEach((year) => {
    let row = document.createElement("row");
    row.classList.add("row", "p-2", "border");
    let yearColumn = document.createElement("div");
    yearColumn.classList.add("col");

    let span = document.createElement("span");
    span.innerHTML = year.year;
    yearColumn.appendChild(span);
    row.appendChild(yearColumn);
    dashboardDataField.appendChild(row);

    let profitsColumn = document.createElement("div");
    profitsColumn.classList.add("col");
    row.appendChild(profitsColumn);

    const filteredRevenues = allRevenues.filter(
      (entry) => entry.year === year.year
    );
    const filteredExpenditures = allExpenditures.filter(
      (entry) => entry.year === year.year
    );

    const totalRevenues = filteredRevenues.reduce(
      (sum, entry) => sum + entry.amount,
      0
    );

    const totalExpenditures = filteredExpenditures.reduce(
      (sum, entry) => sum + entry.amount,
      0
    );

    const profit = (totalRevenues - totalExpenditures).toFixed(2);

    profitsColumn.innerText = profit;
  });
};
