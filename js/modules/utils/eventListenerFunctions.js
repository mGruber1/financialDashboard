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
    return dataSet
}

export const sendDataSetToServer = async (data) => {
    try {
        const response = await fetch("http://localhost:3000/api/insertMonthlyExpenditures", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ data }),
        });

        if (response.ok) {
            const result = await response.json();
            console.log(result);
        } else {
            console.error("Failed to insert data:", response.statusText);
        }
    } catch (error) {
        console.error("Error:", error);
    }
};
