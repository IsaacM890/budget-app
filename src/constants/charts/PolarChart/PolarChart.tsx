import React from 'react';
import ApexCharts from 'react-apexcharts';

const PolarChart = () => {
  const PolarChartObj = {
    series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
    options: {
      chart: {
        type: 'polarArea',
      },
      stroke: {
        colors: ['#fff'],
      },
      fill: {
        opacity: 0.8,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    },
  };
  return (
    <div id="chart">
      <ApexCharts options={PolarChartObj.options} series={PolarChartObj.series} type="polarArea" />
    </div>
  );
};

export default PolarChart;
