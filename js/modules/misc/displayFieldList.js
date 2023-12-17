"use strict";

// Add new displayFields here! Currently used to display No Data Available

import {
  generalInfoField,
  monthlyCostsBarChart,
  fixedCostsDistributionField,
  monthlyCarGasChart,
} from "../utils/getElements.js";

let displayFieldList = [];
displayFieldList = [
  generalInfoField,
  monthlyCostsBarChart,
  fixedCostsDistributionField,
  monthlyCarGasChart,
];
export default displayFieldList;
