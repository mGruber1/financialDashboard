"use strict";

// Add new displayFields here! Currently used to display No Data Available

import {
  generalInfoField,
  monthlyCostsField,
  fixedCostsDistributionField,
  monthlyCarGasChart,
} from "../utils/getElements.js";

let displayFieldList = [];
displayFieldList = [
  generalInfoField,
  monthlyCostsField,
  fixedCostsDistributionField,
  monthlyCarGasChart,
];
export default displayFieldList;
