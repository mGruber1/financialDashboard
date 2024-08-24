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
      "mb-2",
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

    createCard("Profits", "€ " + profits, row, "bi-cash");
    createCard(
      "Revenues",
      "€ " + totalRevenues.toFixed(2),
      row,
      "bi-graph-up-arrow"
    );
    createCard(
      "Expenditures",
      "€ " + totalExpenditures.toFixed(2),
      row,
      "bi-graph-down-arrow"
    );
    console.log(filteredExpenditures);
  });
};

const createCard = (title, data, row, icon) => {
  let column = document.createElement("div");
  column.classList.add("col");

  let card = document.createElement("div");
  card.classList.add("card");

  let cardBody = document.createElement("div");
  cardBody.classList.add(
    "card-body",
    "d-flex",
    "justify-content-center",
    "align-items-center"
  );

  let cardDataRow = document.createElement("div");
  cardDataRow.classList.add("row", "w-100");

  let cardDataCol1 = document.createElement("div");
  cardDataCol1.classList.add("col");

  let cardDataHeading = document.createElement("span");
  cardDataHeading.classList.add("text-info");
  cardDataHeading.innerHTML = title;
  cardDataCol1.appendChild(cardDataHeading);

  let cardData = document.createElement("h5");
  cardData.innerHTML = data;
  cardDataCol1.appendChild(cardData);

  let cardDataCol2 = document.createElement("div");
  cardDataCol2.classList.add(
    "col",
    "d-flex",
    "justify-content-end",
    "align-items-center"
  );

  let cardIcon = document.createElement("i");
  cardIcon.classList.add("bi", icon, "text-secondary");
  cardIcon.style.fontSize = "2em";
  cardDataCol2.appendChild(cardIcon);

  cardDataRow.appendChild(cardDataCol1);
  cardDataRow.appendChild(cardDataCol2);

  cardBody.appendChild(cardDataRow);
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
