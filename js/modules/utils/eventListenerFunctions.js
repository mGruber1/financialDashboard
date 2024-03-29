"use strict"
import { BACKEND_HOST } from "../../../client-env.js"
import { expenditureTypeField, expenditureMonthField, expenditureYearField, expenditureAmountField, revenueYearField, revenueMonthField, revenueAmountField, categoryNameField, categoryDescriptionField} from "./getFields.js"

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

export const isCategoryDataEmpty = () => {
    if (categoryNameField.value != "" && categoryDescriptionField.value != "") {
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

export const getCategoryData = () => {
    const dataSet = [categoryNameField.value, categoryDescriptionField.value];
    return dataSet
}

export const sendExpenditureDataToServer = async (data) => {
    try {
        const response = await fetch("http://"+BACKEND_HOST+":3000/api/insertMonthlyExpenditures", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ data }),
        });

        if (response.ok) {
            const result = await response.json();
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
        const response = await fetch("http://"+BACKEND_HOST+":3000/api/insertMonthlyRevenues", {
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

export const sendCategoryDataToServer = async (data) => {
    try {
        const response = await fetch("http://"+BACKEND_HOST+":3000/api/insertNewCategory", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ data }),
        });

        if (response.ok) {
            const result = await response.json();
            categoryNameField.value = "";
            categoryDescriptionField.value = "";
            alert("Success!")
        } else {
            console.error("Failed to insert data:", response.statusText);
            alert(response.statusText);
        }
    } catch (error) {
        console.error("Error:", error);
    }
}
