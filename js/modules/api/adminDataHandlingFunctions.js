"use strict";

export const populateDropdownField = (categories, dropDownField, option) => {
  dropDownField.innerHTML = "";
  if (option === "select-option") {
    categories.forEach((category) => {
      const optionElement = document.createElement("option");
      optionElement.value = category.name;
      optionElement.textContent = category.name;
      dropDownField.appendChild(optionElement);
    });
  }
};
