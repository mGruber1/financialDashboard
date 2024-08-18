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
export const getIncomeRate = () => fetchData("getIncomeRate");
export const getMonthlyExpenditures = () => fetchData("getMonthlyExpenditures");
export const getLastMonthExpenditures = () =>
  fetchData("getLastMonthExpenditures");
export const getMonthlyRevenues = () => fetchData("getMonthlyRevenues");

// ADMIN

export const getCategories = () => fetchData("getCategories");
export const getFixedCostsCategories = () =>
  fetchData("getFixedCostsCategories");

// DASHBOARD

export const getYears = () => fetchData("getYears");
export const getAllExpenditures = () => fetchData("getAllExpenditures");
export const getAllRevenues = () => fetchData("getAllRevenues");
