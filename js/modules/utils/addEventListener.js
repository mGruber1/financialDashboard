"use strict"

import { isExpenditureDataEmpty, sendExpenditureDataToServer, getExpenditureData, isRevenueDataEmpty, sendRevenueDataToServer, getRevenueData } from "./eventListenerFunctions.js";
import { expenditureSubmitDataButton, revenueSubmitDataButton } from "./getFields.js";

// newData.html Event Listeners

export const expenditureSubmitDataButtonEventListener = expenditureSubmitDataButton.addEventListener("click", () => {
    if (!isExpenditureDataEmpty()) {
        sendExpenditureDataToServer(getExpenditureData());
    } else {
        console.log("it is empty");
    }
});

export const revenueSubmitDataButtonEventListener = revenueSubmitDataButton.addEventListener("click", () => {
    if (!isRevenueDataEmpty()) {
        sendRevenueDataToServer(getRevenueData());
    } else {
        console.log("it is empty");
    }
});

