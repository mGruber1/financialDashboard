"use strict"

import { isExpenditureDataEmpty, sendExpenditureDataToServer, getExpenditureData, isRevenueDataEmpty, sendRevenueDataToServer, getRevenueData, isCategoryDataEmpty, sendCategoryDataToServer, getCategoryData, isFixedCostsDataEmtpy,sendFixedCostsDataToServer, getFixedCostsData } from "./eventListenerFunctions.js";
import { expenditureSubmitDataButton, revenueSubmitDataButton, categorySubmitDataButton, fixedCostsSubmitDataButton } from "./getFields.js";

export const expenditureSubmitDataButtonEventListener = expenditureSubmitDataButton.addEventListener("click", () => {
    if (!isExpenditureDataEmpty()) {
        sendExpenditureDataToServer(getExpenditureData());
    } else {
        alert("No empty Data allowed");
    }
});

export const revenueSubmitDataButtonEventListener = revenueSubmitDataButton.addEventListener("click", () => {
    if (!isRevenueDataEmpty()) {
        sendRevenueDataToServer(getRevenueData());
    } else {
        alert("No empty Data allowed");
    }
});

export const CategoryDataButtonEventListener = categorySubmitDataButton.addEventListener("click", () => {
    if (!isCategoryDataEmpty()) {
        sendCategoryDataToServer(getCategoryData());
    } else {
        alert("No empty Data allowed");
    }
});

export const FixedCostsDataButtonEventListener = fixedCostsSubmitDataButton.addEventListener("click", () => {
    if (!isFixedCostsDataEmtpy()) {
        sendFixedCostsDataToServer(getFixedCostsData());
    } else {
        alert("No empty Data allowed");
    }
})

