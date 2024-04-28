"use strict";

export const echartOptionsMonthlyRevenues = (monthlyRevenues) => {
  const data = monthlyRevenues.map((item) => ({
    name: item.month,
    value: item.monthly_revenues,
  }));

  var options = {
    title: {
      text: "Revenues",
    },
    grid: {
      top: "20%",
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
      axisLabel: {
        formatter: "{value} €",
      },
      show: false,
    },
    series: {
      type: "bar",
      data: data.map((item) => item.value.toFixed(2)),
      label: {
        show: true,
        position: "top",
        formatter: "{c} €",
      },
      itemStyle: {
        color: "grey",
      },
    },
  };

  return options;
};

export const echartOptionsMonthlyExpenditures = (monthlyExpenditures) => {
  const data = monthlyExpenditures.map((item) => ({
    name: item.month,
    value: item.monthly_expenditures,
  }));

  var options = {
    title: {
      text: "Expenditures",
      textStyle: {
        padding: [0, 0, 50, 0],
      },
    },
    grid: {
      top: "20%",
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
      axisLabel: {
        formatter: "{value} €",
      },
      show: false,
    },
    series: {
      type: "bar",
      data: data.map((item) => item.value.toFixed(2)),
      label: {
        show: true,
        position: "top",
        formatter: "{c} €",
      },
      itemStyle: {
        color: "grey",
      },
    },
  };

  return options;
};

export const echartOptionsMonthlyProfits = (
  monthlyRevenues,
  monthlyExpenditures
) => {
  if (monthlyRevenues.length === monthlyExpenditures.length) {
    var differenceArray = monthlyRevenues.map((item, index) => {
      if (item.month === monthlyExpenditures[index].month) {
        return {
          month: item.month,
          difference: (
            item.monthly_revenues -
            monthlyExpenditures[index].monthly_expenditures
          ).toFixed(2),
        };
      } else {
        return null;
      }
    });
  } else {
    console.log(
      "Arrays must have the same length for element-wise subtraction."
    );
  }
  const data = differenceArray.map((item) => ({
    name: item.month,
    value: item.difference,
    itemStyle: {
      color: item.difference >= 0 ? "green" : "red",
    },
  }));

  var options = {
    title: {
      text: "Profits",
    },
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
      axisLabel: {
        formatter: "{value} €",
      },
      show: false,
    },
    series: {
      type: "bar",
      data: data,
      label: {
        show: true,
        position: "top",
        formatter: "{c} €",
      },
    },
  };

  return options;
};

export const echartOptionsFixedCostsDistribution = (fixedCosts) => {
  const categories = Object.keys(fixedCosts);
  const data = categories.map((category) => ({
    name: category,
    value: fixedCosts[category],
  }));

  const options = {
    title: {
      text: "Fixed Cost Distribution",
      left: "center",
    },
    tooltip: {
      trigger: "item",
      formatter: "{b}: {c} € ({d}%)",
    },
    series: [
      {
        type: "pie",
        center: ["50%", "50%"],
        data: data,
        label: {
          show: true,
          position: "outside",
          formatter: "{b}: {d}%",
        },
      },
    ],
  };

  return options;
};
