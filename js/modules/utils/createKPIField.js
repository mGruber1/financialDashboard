"use strict";
export const createKPIField = (category, avgData) => {
  const column = document.createElement("div");
  column.classList.add("col-sm-12", "col-md-3");
  const cardElement = document.createElement("div");
  cardElement.classList.add("card", "d-flex", "flex-column", "h-100");
  const cardElementHeader = document.createElement("div");
  cardElementHeader.classList.add("card-header", "bg-dark", "text-light");
  cardElementHeader.innerHTML = `<h5>${
    category.name[0].toUpperCase() + category.name.slice(1)
  }</h5>`;

  const cardElementBody = document.createElement("div");
  cardElementBody.classList.add("card-body");

  const cardElementBodyValuesContainer = document.createElement("div");
  cardElementBodyValuesContainer.classList.add(
    "d-flex",
    "justify-content-center",
    "align-items-center"
  );

  const cardElementAverageIcon = document.createElement("h3");
  cardElementAverageIcon.classList.add("me-1");
  cardElementAverageIcon.innerHTML = "&oslash";
  const cardElementAverageDataField = document.createElement("h2");
  cardElementAverageDataField.id = category.name;
  cardElementAverageDataField.innerHTML =
    avgData[0].averageValue !== null
      ? avgData[0].averageValue?.toFixed(2) + " €"
      : "no data";

  const cardElementBodyChartContainer = document.createElement("div");
  cardElementBodyChartContainer.innerHTML = "Chartcontainer";
  cardElementBodyChartContainer.classList.add(
    "d-flex",
    "justify-content-center"
  );
  cardElementBodyChartContainer.id = category.name + "Chart";

  cardElementBodyValuesContainer.appendChild(cardElementAverageIcon);
  cardElementBodyValuesContainer.appendChild(cardElementAverageDataField);
  cardElementBody.appendChild(cardElementBodyValuesContainer);
  cardElementBody.appendChild(cardElementBodyChartContainer);
  cardElement.appendChild(cardElementHeader);
  cardElement.appendChild(cardElementBody);
  column.appendChild(cardElement);

  kpiDisplayField.appendChild(column);
};
