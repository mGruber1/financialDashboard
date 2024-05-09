"use strict";
import { echartDataHistory } from "../utils/configuration.js";

export const calculateDataHistory = (data) => {
  const amountEntries = echartDataHistory;
  const reversedMonthlyRevenues = data.toReversed();

  if (reversedMonthlyRevenues.length > amountEntries) {
    for (let revenue of reversedMonthlyRevenues) {
      if (reversedMonthlyRevenues.length === amountEntries) {
        break;
      }
      reversedMonthlyRevenues.pop();
    }
  }

  return reversedMonthlyRevenues.toReversed();
};
