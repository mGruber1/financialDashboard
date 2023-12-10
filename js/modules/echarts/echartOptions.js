"use strict";

export const echartOptionsMonthlyCosts = (monthlyCosts) => {
  const data = monthlyCosts.map((item) => ({
    name: item.month,
    value: item.total_spending,
  }));

  var options = {
    tooltip: {},
    xAxis: {
      data: data.map((item) => item.name),
      name: "Month",
      nameLocation: "middle",
      nameGap: 20,
    },
    yAxis: {
      type: "value",
    },
    series: {
      type: "bar",
      data: data.map((item) => item.value.toFixed(2)),
      itemStyle: {
        color: function (param) {
          const color = ["#000000"];
          return color;
        },
      },
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
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };

  return options;
};
