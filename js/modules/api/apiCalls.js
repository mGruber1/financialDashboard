"use strict";
import { BACKEND_HOST } from "../../../client-env.js";

const apiUrl = (endpoint) => `http://${BACKEND_HOST}:3000/api/${endpoint}`;

const fetchData = async (endpoint) => {
  try {
    const response = await fetch(apiUrl(endpoint));
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const checkBackendAvailability = async () => {
  try {
    const response = await fetch(apiUrl("ConnectionTest"));
    return response.ok;
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
};

export const getFixedCosts = () => fetchData("getFixedCosts");
export const getSumFixedCosts = () => fetchData("getSumFixedCosts");
export const getIncomeRate = () => fetchData("getIncomeRate");
export const getMonthlyExpenditures = () => fetchData("getMonthlyExpenditures");
export const getMonthlyRevenues = () => fetchData("getMonthlyRevenues");
export const getAverageCarGasCosts = () => fetchData("getAverageCarGasCosts");
export const getAverageGroceryCosts = () => fetchData("getAverageGroceryCosts");
export const getMonthlyGroceryCosts = () => fetchData("getMonthlyGroceryCosts");
export const getAverageInvestmentCosts = () => fetchData("getAverageInvestmentCosts");
export const getMonthlyCarGasCosts = () => fetchData("getMonthlyCarGasCosts");
export const getMonthlyInvestmentPlanCosts = () => fetchData("getMonthlyInvestmentPlanCosts");
