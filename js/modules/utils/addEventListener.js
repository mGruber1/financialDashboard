"use strict"

import { isExpenditureDataEmpty, sendExpenditureDataToServer, getExpenditureData, isRevenueDataEmpty, sendRevenueDataToServer, getRevenueData, isCategoryDataEmpty, sendCategoryDataToServer, getCategoryData } from "./eventListenerFunctions.js";
import { expenditureSubmitDataButton, revenueSubmitDataButton, categorySubmitDataButton } from "./getFields.js";

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

