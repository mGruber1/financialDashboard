"use strict";

export const echartOptionsMonthlyCosts = (monthlyCosts) => {
  const data = monthlyCosts.map((item) => ({
    name: item.month,
    value: item.total_spending,
  }));

  var options = {
    grid: {
      top: "10%",
      bottom: "20%",
      left: "10%",
      right: "10%",
    },
    tooltip: {},
    xAxis: {
      data: data.map((item) => item.name),
      name: "Month",
      nameLocation: "middle",
      nameGap: 20,
    },
    yAxis: {
      type: "value",
      show: false,
    },
    series: {
      type: "bar",
      data: data.map((item) => item.value.toFixed(2)),
    },
    label: {
      show: true,
      position: "top",
    },
  };

  return options;
};

export const echartOptionsFixedCostsDistribution = (fixedCosts) => {
  const categories = Object.keys(fixedCosts[0]);
  const data = categories.map((category) => ({
    name: category,
    value: fixedCosts[0][category],
  }));

  const options = {
    grid: {
      top: "10%",
      bottom: "10%",
      left: "10%",
      right: "10%",
    },
    tooltip: {
      trigger: "item",
      formatter: "{b}: {c} ({d}%)",
    },
    series: [
      {
        type: "pie",
        radius: "55%",
        center: ["50%", "50%"],
        data: data,
      },
    ],
  };

  return options;
};

export const echartOptionsMonthlyCarGasCosts = (monthlyCarGasCosts) => {
  const months = monthlyCarGasCosts.map((entry) => entry.month);
  const amounts = monthlyCarGasCosts.map((entry) => entry.amount);

  const options = {
    grid: {
      top: "10%",
      bottom: "10%",
      left: "10%",
      right: "10%",
    },
    tooltip: {
      trigger: "item",
      formatter: "{b}: {c})",
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: months,
      show: false,
    },
    yAxis: {
      type: "value",
      show: false,
    },
    series: [
      {
        data: amounts,
        type: "line",
        areaStyle: {},
      },
    ],
  };
  return options;
};

export const echartOptionsMonthlyInvestmentCosts = (monthlyInvestmentCosts) => {
  const months = monthlyInvestmentCosts.map((entry) => entry.month);
  const amounts = monthlyInvestmentCosts.map((entry) => entry.amount);

  const options = {
    grid: {
      top: "10%",
      bottom: "10%",
      left: "10%",
      right: "10%",
    },
    tooltip: {
      trigger: "item",
      formatter: "{b}: {c})",
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: months,
      show: false,
    },
    yAxis: {
      type: "value",
      show: false,
    },
    series: [
      {
        data: amounts,
        type: "line",
        areaStyle: {},
      },
    ],
  };
  return options;
};

export const echartOptionsMonthlyGroceryCosts = (monthlyGroceryCosts) => {
  const months = monthlyGroceryCosts.map((entry) => entry.month);
  const amounts = monthlyGroceryCosts.map((entry) => entry.amount);

  const options = {
    grid: {
      top: "10%",
      bottom: "10%",
      left: "10%",
      right: "10%",
    },
    tooltip: {
      trigger: "item",
      formatter: "{b}: {c})",
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: months,
      show: false,
    },
    yAxis: {
      type: "value",
      show: false,
    },
    series: [
      {
        data: amounts,
        type: "line",
        areaStyle: {},
      },
    ],
  };
  return options;
};
