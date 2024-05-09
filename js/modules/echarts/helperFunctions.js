"use strict";
import { echartDataHistoryLength } from "../utils/configuration.js";

export const calculateDataHistory = (data) => {
  const amountEntries = echartDataHistoryLength;
  const reversedMonthlyRevenues = [...data].reverse();

  if (reversedMonthlyRevenues.length > amountEntries) {
    reversedMonthlyRevenues.splice(amountEntries);
  }

  return reversedMonthlyRevenues.reverse();
};
