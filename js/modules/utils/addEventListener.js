"use strict"

import { isDataSetEmpty, getDataSet } from "./eventListenerFunctions.js";
import { submitDataButton } from "./getFields.js";

// newData.html Event Listeners

export const submitDataButtonEventListener = submitDataButton.addEventListener("click", () => {

    if (!isDataSetEmpty()) {
        getDataSet();
    } else {
        console.log("it is empty");
    }
});

