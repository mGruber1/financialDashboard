"use strict"

export const echartOptions = (monthlyCosts) => {
  const data = monthlyCosts.map((item) => ({
    name: item.month, 
    value: item.total_spending
 }));

  var options = {
    tooltip: {},
    xAxis: {
      data: data.map(item => item.name),
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        show: false,
      }
    },
    series: [
      {
        name: 'sales',
        type: 'bar',
        data: data.map(item => item.value.toFixed(2) )
      }
    ],
    label: {
      show: true, // Set this to true to display data labels
   }
  };

  return options;
}