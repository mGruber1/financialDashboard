"use strict";

// Add new displayFields here! Currently used to display No Data Available

const generalInfoField = document.getElementById("generalInfo");
const monthlyCostsBarChart = document.getElementById("monthlyCostsBarChart");
const fixedCostsDistributionField = document.getElementById(
  "fixedCostsDistributionChart"
);

let displayFieldList = [];
displayFieldList = [
  generalInfoField,
  monthlyCostsBarChart,
  fixedCostsDistributionField,
];
export default displayFieldList;
