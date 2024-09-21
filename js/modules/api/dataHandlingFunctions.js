"use strict";

import { createNewDataRow } from "../utils/createNewDataRow.js";
import { BACKEND_HOST } from "../../../client-env.js";
import {
  defaultGrid,
  defaultSeries,
  defaultTooltip,
  defaultXAxis,
  defaultYAxis,
} from "../echarts/echartConstants.js";
import { createKPIField } from "../utils/createKPIField.js";
import { calculateDataHistory } from "../echarts/helperFunctions.js";
import { echartOptionsKPIDisplay } from "../echarts/echartOptions.js";
var currentDate = new Date();
const currentYear = currentDate.getFullYear();
currentDate.setDate(0);

export const handleIncomeRate = (incomeRate, generalInfoField) => {
  createNewDataRow(generalInfoField, "Income Rate", incomeRate, "€");
};

export const handleFixedCosts = (fixedCosts, generalInfoField) => {
  createNewDataRow(generalInfoField, "Fixed Costs", fixedCosts, "€");
};

export const handleFixedCostsIncomeRateRatio = (
  fixedCostsIncomeRateRatio,
  generalInfoField
) => {
  createNewDataRow(
    generalInfoField,
    "IC/C-Ratio",
    fixedCostsIncomeRateRatio,
    "%"
  );
};

export const handleSurplusFunds = (surplusFunds, generalInfoField) => {
  createNewDataRow(generalInfoField, "Surplus-Funds", surplusFunds, "€");
};

export const handleMonthlyRevenues = (
  echartOptions,
  monthlyRevenuesBarChart
) => {
  monthlyRevenuesBarChart.setOption(echartOptions);
};

export const handleMonthlyExpenditures = (
  echartOptions,
  monthlyExpendituresBarChart
) => {
  monthlyExpendituresBarChart.setOption(echartOptions);
};

export const handleMonthlyProfits = (echartOptions, monthlyProfitsBarChart) => {
  monthlyProfitsBarChart.setOption(echartOptions);
};

export const handleFixedCostsDistribution = (
  echartOptions,
  fixedDistributionChart
) => {
  fixedDistributionChart.setOption(echartOptions);
};

export const showEmptyDataMessage = () => {
  const cardBodies = document.getElementsByClassName("card");

  for (let cardBody of cardBodies) {
    let emptyMessageContainer = document.createElement("div");
    emptyMessageContainer.classList.add("emptyDataDisplay");

    let emptyMessage = document.createElement("span");
    emptyMessage.innerHTML = "No Connection To Database";

    emptyMessageContainer.appendChild(emptyMessage);
    cardBody.appendChild(emptyMessageContainer);
  }
};

export const handleKPIDisplay = async (categories) => {
  let kpiToShow = categories.filter((item) => item.isKPI === 1);

  for (const category of kpiToShow) {
    try {
      const avgSQLQuery = `SELECT AVG(amount) as averageValue FROM expenditures WHERE year = ${currentYear} AND type= '${category.name}';`;

      const avgDataResponse = await fetch(
        "http://" + BACKEND_HOST + ":3000/api/getAverageCosts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ query: avgSQLQuery }),
        }
      );

      if (!avgDataResponse.ok) {
        throw new Error("Failed to fetch data");
      }

      const avgData = await avgDataResponse.json();

      const monthlyCostsQuery = `SELECT amount, month FROM expenditures where type='${category.name}' and year = ${currentYear} ORDER BY month;`;

      const monthlyCostsResponse = await fetch(
        "http://" + BACKEND_HOST + ":3000/api/getMonthlyCosts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ query: monthlyCostsQuery }),
        }
      );

      if (!monthlyCostsResponse.ok) {
        throw new Error("Failed to fetch data");
      }

      const monthlyCostsData = await monthlyCostsResponse.json();

      createKPIField(category, avgData);

      const chart = echarts.init(
        document.getElementById(category.name + "Chart"),
        null,
        {
          width: "100%",
          height: "100%",
        }
      );

      chart.setOption(
        echartOptionsKPIDisplay(
          monthlyCostsData,
          defaultGrid,
          defaultTooltip,
          defaultXAxis,
          defaultYAxis,
          defaultSeries
        )
      );
    } catch (error) {
      console.error("Error fetching data:", error);
      // TODO Error Handling
    }
  }
};

export const handleTop3Expenditures = (echartOptions, top3ExpenditureChart) => {
  top3ExpenditureChart.setOption(echartOptions);
};
