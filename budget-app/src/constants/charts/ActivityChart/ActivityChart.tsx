import React from 'react';
import ApexCharts from 'react-apexcharts';

const ActivityChart = (props: any) => {
  const x = {
    series: [
      {
        name: 'Arrival',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      {
        name: 'Spending',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      },
    ],
    options: {
      chart: {
        type: 'bar',
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '30%',
          endingShape: 'rounded',
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
      },
      legend: {
        position: 'top',
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
      },
      fill: {
        opacity: 1,
      },
      colors: ['#4333A0', '#FF8788'],
      tooltip: {
        y: {
          formatter: function (val: any) {
            return '$ ' + val;
          },
        },
      },
    },
  };

  return (
    <div id="chart">
      <ApexCharts options={x.options} series={x.series} type="bar" height={350} />
    </div>
  );
};

export default ActivityChart;
