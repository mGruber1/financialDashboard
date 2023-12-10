"use strict"

export const createNewDataRow = (dataField, cellDescription, value, unit) => {
    const newRow = document.createElement("tr");
    const descriptionCell = document.createElement("td");
    descriptionCell.innerHTML = cellDescription;
  
    const valueCell = document.createElement("td");
    valueCell.innerHTML = value.toFixed(2) + " "+unit;
  
    newRow.appendChild(descriptionCell);
    newRow.appendChild(valueCell);
  
    dataField.appendChild(newRow);
}