"use strict";

import {
  getCategories
} from "./apiCalls.js";


import {
  populateDropdownField
} from "./adminDataHandlingFunctions.js";


import {
  expenditureTypeField, fixedCostsField
} from "../utils/getFields.js"

let categories =[];

export const loadData = async () => {
  try {
    var data = await Promise.all([
        getCategories()
    ]);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  categories= data[0];

  populateDropdownField(categories, expenditureTypeField, "select-option");
  populateDropdownField(categories, fixedCostsField, "select-option");
};


