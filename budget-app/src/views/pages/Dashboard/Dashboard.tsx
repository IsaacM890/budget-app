import React, { FC } from 'react';
import styled from 'styled-components';

import { faArchive, faChartLine } from '@fortawesome/free-solid-svg-icons';
import BriefCard from '../../../components/molecules/BriefCard/BriefCard';
import CreditCard from '../../../components/molecules/CreditCard/CreditCard';
import IncomeChart from '../../../components/molecules/IncomeChart/IncomeChart';
import ActivityChart from '../../../components/molecules/ActivityChart/ActivityChart';
import theme from '../../../style/theme/theme';

const SMainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  padding: 20px;
`;

const SFlexWrapper = styled.div`
  display: flex;
  width: 50%;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  @media (max-width: ${theme.breakpoints.desktop}) {
    width: 50%;
  }
  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 50%;
  }
  @media (max-width: ${theme.breakpoints.middlesize}) {
    width: 50%;
  }
`;

const Dashboard: FC<any> = () => (
  <SMainContainer>
    <SFlexWrapper>
      <CreditCard FirstName="itzhak" LastName="Maharat" last4Digits={1589} expMonth={11} expYear={25} />
    </SFlexWrapper>
    <SFlexWrapper>
      <IncomeChart />
    </SFlexWrapper>
    <SFlexWrapper>
      <BriefCard
        title="Revenue "
        revenue="20952"
        profit="+5.08%"
        iconbackgroundcolor={theme.colors.blue.medium}
        iconcolor={theme.colors.white.primary}
        icon={faArchive}
      />
    </SFlexWrapper>
    <SFlexWrapper>
      <BriefCard
        title="Averages"
        revenue="15236"
        profit="+5.08%"
        iconbackgroundcolor={theme.colors.blue.medium}
        iconcolor={theme.colors.white.primary}
        icon={faChartLine}
      />
    </SFlexWrapper>
    <ActivityChart />
  </SMainContainer>
);

export default Dashboard;
