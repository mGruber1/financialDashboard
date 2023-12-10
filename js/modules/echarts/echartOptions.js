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
      name: 'Month',
      nameLocation: 'middle',
      nameGap: 20,
    },
    yAxis: {
      type: 'value',
    },
    series: 
      {
        type: 'bar',
        data: data.map(item => item.value.toFixed(2) ),
        itemStyle: {
          color: function (param) {
            const color =["#a9a9a9"]
            return color
          }
      }},
    label: {
      show: true, // Set this to true to display data labels
      position: 'top'
   }
  };

  return options;
}