import React, { useContext } from 'react';
import ApexCharts from 'react-apexcharts';
import { TransactionsContext } from '../../../constexts/transactionsContext';
import { ITransactionProps } from '../../../models';
import theme from '../../../style/theme/theme';
import { CHARTS_NAMES } from '../../../enums/index';

const ActivityChart = () => {
  const { transactions } = useContext(TransactionsContext);

  const incomeTransactions = transactions.filter((item) => item.paymentType === 'Income');

  const expensesTransactions = transactions.filter((item) => item.paymentType === 'Expenses');

  const getAmountByType = (filteredTransactions: ITransactionProps[]) => {
    filteredTransactions.map(({ amount }) => amount);
  };

  const chartObj = {
    series: [
      {
        name: CHARTS_NAMES.Income,
        data: getAmountByType(incomeTransactions),
      },
      {
        name: CHARTS_NAMES.Expenses,
        data: getAmountByType(expensesTransactions),
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
