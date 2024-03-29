"use strict";

import {
  getCategories
} from "./apiCalls.js";


import {
  populateCategoryDropDown
} from "./dataHandlingFunctions.js";


import {
  expenditureTypeField
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

  populateCategoryDropDown(categories, expenditureTypeField);
};


