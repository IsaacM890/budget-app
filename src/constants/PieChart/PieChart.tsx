import React, { useContext } from 'react';
import ApexCharts from 'react-apexcharts';
import { TransactionsContext } from '../../constexts/transactionsContext';
import { ITransaction } from '../../models';

const PieChart = () => {
  const { transactions } = useContext(TransactionsContext);
  const chartData = transactions.reduce((preValue: any, currentValue) => {
    const previous = preValue;
    const index = previous.findIndex((item: any) => item.paymentMethod === currentValue.paymentMethod);
    if (index === -1) {
      previous.push(currentValue);
    } else {
      previous[index].amount += currentValue.amount;
    }
    return previous;
  }, []);

  console.log('chart Data:', chartData);
  const PieChartObj = {
    options: {
      series: chartData.map((item: ITransaction) => item.amount),
      labels: chartData.map((item: ITransaction) => item.paymentMethod),

      chart: {
        type: 'donut',
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
      <ApexCharts options={PieChartObj.options} series={PieChartObj.options.series} type="donut" />
    </div>
  );
};

export default PieChart;
