"use strict";
import { BACKEND_HOST } from "../../../client-env.js";
import {
  expenditureTypeField,
  expenditureMonthField,
  expenditureYearField,
  expenditureAmountField,
  revenueYearField,
  revenueMonthField,
  revenueAmountField,
  categoryNameField,
  categoryDescriptionField,
  fixedCostsField,
  fixedCostsAmountField,
  showAsKPIField,
} from "./getFields.js";

const isFieldDataEmpty = (...fields) =>
  fields.some((field) => field.value === "");

export const isExpenditureDataEmpty = () =>
  isFieldDataEmpty(
    expenditureTypeField,
    expenditureMonthField,
    expenditureYearField,
    expenditureAmountField
  );

export const isRevenueDataEmpty = () =>
  isFieldDataEmpty(revenueYearField, revenueMonthField, revenueAmountField);

export const isCategoryDataEmpty = () =>
  isFieldDataEmpty(categoryNameField, categoryDescriptionField);

export const isFixedCostsDataEmtpy = () =>
  isFieldDataEmpty(fixedCostsField, fixedCostsAmountField);

const getFieldData = (...fields) =>
  fields.map((field) => {
    if (field.type === "checkbox") {
      const fieldState = field.checked ? 1 : 0;
      return fieldState;
    } else {
      return field.value;
    }
  });

export const getExpenditureData = () =>
  getFieldData(
    expenditureTypeField,
    expenditureMonthField,
    expenditureYearField,
    expenditureAmountField
  );

export const getRevenueData = () =>
  getFieldData(revenueYearField, revenueMonthField, revenueAmountField);

export const getCategoryData = () =>
  getFieldData(categoryNameField, categoryDescriptionField, showAsKPIField);

export const getFixedCostsData = () =>
  getFieldData(fixedCostsField, fixedCostsAmountField);

const clearInputFields = () => {
  expenditureTypeField.value = "";
  expenditureMonthField.value = "";
  expenditureYearField.value = "";
  expenditureAmountField.value = "";
  revenueYearField.value = "";
  revenueMonthField.value = "";
  revenueAmountField.value = "";
  categoryNameField.value = "";
  categoryDescriptionField.value = "";
  fixedCostsField.value = "";
  fixedCostsAmountField.value = "";
};

const sendFormDataToServer = async (url, data, successMessage) => {
  try {
    const response = await fetch(`http://${BACKEND_HOST}:3000/api/${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data }),
    });

    if (response.ok) {
      const result = await response.json();
      successMessage && alert(successMessage);
      clearInputFields();
    } else {
      console.error("Failed to insert data:", response.statusText);
      alert(response.statusText);
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

export const sendExpenditureDataToServer = async (data) => {
  await sendFormDataToServer("insertMonthlyExpenditures", data, "Success!");
};

export const sendRevenueDataToServer = async (data) => {
  await sendFormDataToServer("insertMonthlyRevenues", data, "Success!");
};

export const sendCategoryDataToServer = async (data) => {
  await sendFormDataToServer("insertNewCategory", data, "Success!");
};

export const sendFixedCostsDataToServer = async (data) => {
  await sendFormDataToServer("updateFixedCosts", data, "Success!");
};
