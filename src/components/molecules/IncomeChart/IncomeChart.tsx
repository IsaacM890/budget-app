import React, { FC } from 'react';
import styled from 'styled-components';
import Incomechart from '../../../constants/charts/IncomeChart/IncomeChart';

const SIncomeChartWrapper = styled.div`
  width: 344px;
  height: 206px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  box-sizing: border-box;
  border-radius: 10px;
`;

const IncomeChart: FC = () => (
  <SIncomeChartWrapper>
    <Incomechart />
  </SIncomeChartWrapper>
);

export default IncomeChart;
