import React, { FC } from 'react';
import styled from 'styled-components';
import PolarChart from '../../../constants/charts/PolarChart/PolarChart';
import PieChart from '../../../constants/PieChart/PieChart';

const SChartsPageContainer = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const SPieChartBox = styled.div`
  height: 50%;
  width: 50%;
`;
const SPolarChartBox = styled.div`
  height: 50%;
  width: 50%;
`;

const Charts: FC = () => (
  <SChartsPageContainer>
    <SPieChartBox>
      <PieChart />
    </SPieChartBox>
    <SPolarChartBox>
      <PolarChart />
    </SPolarChartBox>
  </SChartsPageContainer>
);

export default Charts;
