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

    // Profits
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

    createCard("Profits", "€ " + profit, row);

    // REVENUES / EXPENDITURES

    createCard(
      "Revenues VS Profits",
      "€ " +
        totalRevenues.toFixed(2) +
        " / " +
        "€ " +
        totalExpenditures.toFixed(2),
      row
    );
  });
};

export const createCard = (title, innerHTML, row) => {
  let column = document.createElement("div");
  column.classList.add("col");

  let card = document.createElement("div");
  card.classList.add("card");

  let cardHeader = document.createElement("div");
  cardHeader.classList.add("card-header", "bg-dark", "text-white");
  cardHeader.innerHTML = title;

  let cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  cardBody.innerHTML = innerHTML;

  card.appendChild(cardHeader);
  card.appendChild(cardBody);
  column.appendChild(card);

  row.appendChild(column);
};
