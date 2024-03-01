"use strict"

import { typeField, monthField, yearField, amountField } from "./getFields.js"

export const isDataSetEmpty = () => {
    if (typeField.value != "" && monthField.value != "" && yearField.value != "" && amountField.value != "") {
        return false
    } else {
        return true
    }
}

export const getDataSet = () => {
    const dataSet = [typeField.value, monthField.value, yearField.value, amountField.value];
    console.log(dataSet);
    return dataSet
}