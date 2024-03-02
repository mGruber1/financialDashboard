"use strict"

import { isDataSetEmpty, getDataSet, sendDataSetToServer } from "./eventListenerFunctions.js";
import { submitDataButton } from "./getFields.js";

// newData.html Event Listeners

export const submitDataButtonEventListener = submitDataButton.addEventListener("click", () => {
    if (!isDataSetEmpty()) {
        sendDataSetToServer(getDataSet());
    } else {
        console.log("it is empty");
    }
});

