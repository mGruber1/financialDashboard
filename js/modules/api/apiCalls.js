"use strict";

const fetchApiData = async (apiEndpoint) => {
  try {
    const response = await fetch(`http://localhost:3000/api/${apiEndpoint}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const getFixedCosts = () => fetchApiData("getFixedCosts");
export const getSumFixedCosts = () => fetchApiData("getSumFixedCosts");
export const getIncomeRate = () => fetchApiData("getIncomeRate");
export const getMonthlyExpenditures = () => fetchApiData("getMonthlyExpenditures");
export const getMonthlyRevenues = () => fetchApiData("getMonthlyRevenues");
export const getAverageCarGasCosts = () => fetchApiData("getAverageCarGasCosts");
export const getAverageGroceryCosts = () => fetchApiData("getAverageGroceryCosts");
export const getMonthlyGroceryCosts = () => fetchApiData("getMonthlyGroceryCosts");
export const getAverageInvestmentCosts = () => fetchApiData("getAverageInvestmentCosts");
export const getMonthlyCarGasCosts = () => fetchApiData("getMonthlyCarGasCosts");
export const getMonthlyInvestmentPlanCosts = () => fetchApiData("getMonthlyInvestmentPlanCosts");

const backendURL = "http://localhost:3000/api/ConnectionTest";

export const checkBackendAvailability = async () => {
  try {
    const response = await fetch(backendURL);
    return response.ok;
  } catch (error) {
    return false;
  }
};
