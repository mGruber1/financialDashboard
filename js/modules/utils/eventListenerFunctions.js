"use strict"

import { expenditureTypeField, expenditureMonthField, expenditureYearField, expenditureAmountField, revenueYearField, revenueMonthField, revenueAmountField } from "./getFields.js"

export const isExpenditureDataEmpty = () => {
    if (expenditureTypeField.value != "" && expenditureMonthField.value != "" && expenditureYearField.value != "" && expenditureAmountField.value != "") {
        return false
    } else {
        return true
    }
}
export const isRevenueDataEmpty = () => {
    if (revenueYearField.value != "" && revenueMonthField.value != "" && revenueAmountField.value != "") {
        return false
    } else {
        return true
    }
}

export const getExpenditureData = () => {
    const dataSet = [expenditureTypeField.value, expenditureMonthField.value, expenditureYearField.value, expenditureAmountField.value];
    return dataSet
}

export const getRevenueData = () => {
    const dataSet = [revenueYearField.value, revenueMonthField.value, revenueAmountField.value];
    return dataSet
}

export const sendExpenditureDataToServer = async (data) => {
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
            expenditureTypeField.value = "";
            expenditureMonthField.value = "";
            expenditureYearField.value = "";
            expenditureAmountField.value = "";
            alert("Success!")
        } else {
            console.error("Failed to insert data:", response.statusText);
            alert(response.statusText);
        }
    } catch (error) {
        console.error("Error:", error);
    }
};

export const sendRevenueDataToServer = async (data) => {
    try {
        const response = await fetch("http://localhost:3000/api/insertMonthlyRevenues", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ data }),
        });

        if (response.ok) {
            const result = await response.json();
            revenueYearField.value = "";
            revenueMonthField.value = "";
            revenueAmountField.value = "";
            alert("Success!")
        } else {
            console.error("Failed to insert data:", response.statusText);
            alert(response.statusText);
        }
    } catch (error) {
        console.error("Error:", error);
    }
};
