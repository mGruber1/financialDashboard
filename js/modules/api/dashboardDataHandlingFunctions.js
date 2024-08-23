"use strict";
export const handleDashboardData = (
  years,
  allExpenditures,
  allRevenues,
  dashboardDataField
) => {
  years.forEach((year) => {
    let row = document.createElement("row");
    row.classList.add(
      "row",
      "p-2",
      "border",
      "d-flex",
      "justify-content-center",
      "align-items-center"
    );
    let column = document.createElement("div");
    column.classList.add("col");

    let yearField = document.createElement("h1");
    yearField.innerHTML = year.year;
    column.appendChild(yearField);
    row.appendChild(column);
    dashboardDataField.appendChild(row);

    const filteredRevenues = filterForYear(allRevenues, year);
    const filteredExpenditures = filterForYear(allExpenditures, year);

    const totalRevenues = calculateYearlyData(filteredRevenues);
    const totalExpenditures = calculateYearlyData(filteredExpenditures);

    const profits = (totalRevenues - totalExpenditures).toFixed(2);

    createCard("Profits", "€ " + profits, row);
    createCard("Revenues", "€ " + totalRevenues.toFixed(2), row);
    createCard("Expenditures", "€ " + totalExpenditures.toFixed(2), row);
  });
};

const createCard = (title, innerHTML, row) => {
  let column = document.createElement("div");
  column.classList.add("col");

  let card = document.createElement("div");
  card.classList.add("card");

  let cardHeader = document.createElement("div");
  cardHeader.classList.add("card-header", "bg-dark", "text-white");
  cardHeader.innerHTML = title;

  let cardBody = document.createElement("div");
  cardBody.classList.add(
    "card-body",
    "d-flex",
    "justify-content-center",
    "align-items-center"
  );
  cardBody.innerHTML = innerHTML;

  card.appendChild(cardHeader);
  card.appendChild(cardBody);
  column.appendChild(card);

  row.appendChild(column);
};

const filterForYear = (data, year) => {
  return data.filter((entry) => entry.year === year.year);
};

const calculateYearlyData = (data) => {
  return data.reduce((sum, entry) => sum + entry.amount, 0);
};
