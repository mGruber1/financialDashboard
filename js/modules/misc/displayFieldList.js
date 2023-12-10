"use strict";

// Add new displayFields here!

const generalInfoField = document.getElementById("generalInfo");
const monthlyCostsBarChart = document.getElementById("monthlyCostsBarChart");
const fixedCostsDistributionField = document.getElementById(
  "fixedCostsDistributionChart"
);

let displayFieldList = [];
displayFieldList.push(
  generalInfoField,
  monthlyCostsBarChart,
  fixedCostsDistributionField
);

export default displayFieldList;
