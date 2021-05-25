import React, { useContext } from 'react';
import ApexCharts from 'react-apexcharts';
import { TransactionsContext } from '../../../constexts/transactionsContext';
import { colors } from '../../../style/theme/theme';
import { getTotalAmountPerMonthByType } from '../../../helpers/mathFuncs';

const IncomeChart = () => {
  const { transactions } = useContext(TransactionsContext);
  const incomesData = getTotalAmountPerMonthByType(transactions, 'Income');

  const chartObj = {
    series: [
      {
        name: 'Desktops',
        data: incomesData,
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
          colors: [colors.white.whiteSmoke, 'transparent'],
          opacity: 0.5,
        },
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
