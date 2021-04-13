import React from 'react';
import ApexCharts from 'react-apexcharts';
import theme from '../../../style/theme/theme';

const IncomeChart = () => {
  const chartObj = {
    series: [
      {
        name: 'Desktops',
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
      },
    ],
    options: {
      chart: {
        height: 350,
        width: '100%',
        type: 'line',
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      title: {
        text: 'Income',
        align: 'left',
      },
      grid: {
        row: {
          colors: [theme.colors.white.whiteSmoke, 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      },
    },
  };

  return (
    <div id="chart">
      <ApexCharts options={chartObj.options} series={chartObj.series} type="line" height={190} />
    </div>
  );
};

export default IncomeChart;
