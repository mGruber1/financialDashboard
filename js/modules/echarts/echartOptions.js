"use strict";

export const echartOptionsMonthlyRevenues = (monthlyRevenues) => {
  const data = monthlyRevenues.map((item) => ({
    name: item.month,
    value: item.monthly_revenues,
  }));

  var options = {
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
  if (typeof fixedCosts === "object") {
    // DIRTY FIX: Remove income from object-array
    if ("income" in fixedCosts) {
      delete fixedCosts["income"];
    }
    const categories = Object.keys(fixedCosts);
    var data = categories.map((category) => ({
      name: category,
      value: fixedCosts[category],
    }));
  }

  const options = {
    tooltip: {
      trigger: "item",
      formatter: "{c} € ({d}%)",
    },
    series: [
      {
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        data: data,
        label: {
          show: true,
          position: "inside",
          formatter: "{b}",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 20,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
      },
    ],
  };

  return options;
};
