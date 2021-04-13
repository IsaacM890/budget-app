import React, { useContext } from 'react';
import ApexCharts from 'react-apexcharts';
import { TransactionsContext } from '../../../constexts/transactionsContext';
import theme from '../../../style/theme/theme';

const ActivityChart = () => {
  const { transactions } = useContext(TransactionsContext);

  const chartObj = {
    series: [
      {
        name: 'Income',
        data: transactions.filter((item) => item.paymentType === 'Income').map(({ amount }) => amount),
      },
      {
        name: 'Expenses',
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
      title: {
        text: 'Activities',
        align: 'left',
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
        categories: transactions.map(({ date }) => new Date(date).toLocaleString('default', { month: 'short' })),
      },
      fill: {
        opacity: 1,
      },
      colors: [theme.colors.blue.dark, theme.colors.pink.primary],
      tooltip: {
        y: {
          formatter: {
            function(val: any) {
              return `$ ${val}`;
            },
          },
        },
      },
    },
  };

  return (
    <div id="chart">
      <ApexCharts options={chartObj.options} series={chartObj.series} type="bar" height={350} />
    </div>
  );
};

export default ActivityChart;
