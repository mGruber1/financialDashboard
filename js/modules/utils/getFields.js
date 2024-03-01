"use strict"

const getElement = (id) => document.getElementById(id);

export const generalInfoField = getElement("generalInfoField");
export const averageCarGasDisplayField = getElement("averageCarGasDisplayField");
export const averageInvestmentCostsField = getElement("averageInvestmentCostsField");
export const averageGroceryCostsField = getElement("averageGroceryCostsField");
export const insertNewRowSubmitButton = getElement("insertNewRowSubmitButton");

// Fields For newData.html
export const typeField = getElement("type");
export const monthField = getElement("month");
export const yearField = getElement("year");
export const amountField = getElement("amount");
export const submitDataButton = getElement("submitDataButton");