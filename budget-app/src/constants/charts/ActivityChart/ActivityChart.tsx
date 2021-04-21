import React, { useContext } from 'react';
import ApexCharts from 'react-apexcharts';
import { TransactionsContext } from '../../../constexts/transactionsContext';
import { colors } from '../../../style/theme/theme';
import { CHARTS_NAMES } from '../../../enums/index';
import { getTotalAmountPerMonthByType } from '../../../helpers/mathFuncs';

const ActivityChart = () => {
  const { transactions } = useContext(TransactionsContext);
  const incomesData = getTotalAmountPerMonthByType(transactions, 'Income');
  const expensesData = getTotalAmountPerMonthByType(transactions, 'Expenses');

  const chartObj = {
    series: [
      {
        name: CHARTS_NAMES.Income,
        data: incomesData,
      },
      {
        name: CHARTS_NAMES.Expenses,
        data: expensesData,
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
      fill: {
        opacity: 1,
      },
      colors: [colors.blue.dark, colors.pink.primary],
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
