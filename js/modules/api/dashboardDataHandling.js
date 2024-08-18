"use strict";

import { handleDashboardData } from "./dashboardDataHandlingFunctions.js";
import { getYears, getAllExpenditures, getAllRevenues } from "./fetchData.js";
import { dashboardDataField } from "../utils/getFields.js";
let years = [];
let allExpenditures = [];
let allRevenues = [];

export const loadDashboardData = async () => {
  try {
    var data = await Promise.all([
      getYears(),
      getAllExpenditures(),
      getAllRevenues(),
    ]);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  years = data[0];
  allExpenditures = data[1];
  allRevenues = data[2];

  handleDashboardData(years, allExpenditures, allRevenues, dashboardDataField);
};
