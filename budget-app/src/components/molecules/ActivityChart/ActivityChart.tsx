import React, { FC } from 'react';
import styled from 'styled-components';
import Activitychart from '../../../constants/charts/ActivityChart/ActivityChart';

const SActivityChartWrapper = styled.div`
  width: 100%;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  box-sizing: border-box;
`;

const ActivityChart: FC = () => {
  return (
    <SActivityChartWrapper>
      <Activitychart />
    </SActivityChartWrapper>
  );
};

export default ActivityChart;
