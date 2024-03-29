"use strict";

import {
  isExpenditureDataEmpty,
  sendExpenditureDataToServer,
  getExpenditureData,
  isRevenueDataEmpty,
  sendRevenueDataToServer,
  getRevenueData,
  isCategoryDataEmpty,
  sendCategoryDataToServer,
  getCategoryData,
  isFixedCostsDataEmtpy,
  sendFixedCostsDataToServer,
  getFixedCostsData,
} from "./formDataHandler.js";
import {
  expenditureSubmitDataButton,
  revenueSubmitDataButton,
  categorySubmitDataButton,
  fixedCostsSubmitDataButton,
} from "./getFields.js";

const createEventListener = (
  button,
  dataCheckFunction,
  sendDataFunction,
  getDataFunction
) => {
  return button.addEventListener("click", () => {
    if (!dataCheckFunction()) {
      sendDataFunction(getDataFunction());
    } else {
      alert("No empty Data allowed");
    }
  });
};

export const expenditureSubmitDataButtonEventListener = createEventListener(
  expenditureSubmitDataButton,
  isExpenditureDataEmpty,
  sendExpenditureDataToServer,
  getExpenditureData
);

export const revenueSubmitDataButtonEventListener = createEventListener(
  revenueSubmitDataButton,
  isRevenueDataEmpty,
  sendRevenueDataToServer,
  getRevenueData
);

export const categorySubmitDataButtonEventListener = createEventListener(
  categorySubmitDataButton,
  isCategoryDataEmpty,
  sendCategoryDataToServer,
  getCategoryData
);

export const fixedCostsSubmitDataButtonEventListener = createEventListener(
  fixedCostsSubmitDataButton,
  isFixedCostsDataEmtpy,
  sendFixedCostsDataToServer,
  getFixedCostsData
);
