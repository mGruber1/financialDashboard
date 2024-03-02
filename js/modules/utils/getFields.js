"use strict"

const getElement = (id) => document.getElementById(id);

export const generalInfoField = getElement("generalInfoField");
export const averageCarGasDisplayField = getElement("averageCarGasDisplayField");
export const averageInvestmentCostsField = getElement("averageInvestmentCostsField");
export const averageGroceryCostsField = getElement("averageGroceryCostsField");
export const insertNewRowSubmitButton = getElement("insertNewRowSubmitButton");

// Fields For newData.html
export const expenditureTypeField = getElement("expenditure_type");
export const expenditureMonthField = getElement("expenditure_month");
export const expenditureYearField = getElement("expenditure_year");
export const expenditureAmountField = getElement("expenditure_amount");
export const expenditureSubmitDataButton = getElement("expenditure_submitDataButton");

export const revenueMonthField = getElement("revenue_month");
export const revenueYearField = getElement("revenue_year");
export const revenueAmountField = getElement("revenue_amount");
export const revenueSubmitDataButton = getElement("revenue_submitDataButton");