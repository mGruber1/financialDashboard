"use strict";

import { getYears } from "./fetchData.js";

let years = [];
export const loadDashboardData = async () => {
  try {
    var data = await Promise.all([getYears()]);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  years = data[0];
};
