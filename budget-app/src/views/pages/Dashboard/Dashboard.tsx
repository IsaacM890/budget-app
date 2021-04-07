import React, { FC } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line spaced-comment
import { faArchive /*faChartLine */ } from '@fortawesome/free-solid-svg-icons';
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

const Dashboard: FC<any> = ({ transactions }) => (
  <SMainContainer>
    <SFlexWrapper>
      <CreditCard FirstName="itzhak" LastName="Maharat" last4Digits={1589} expMonth={11} expYear={25} />
    </SFlexWrapper>
    <SFlexWrapper>
      <IncomeChart />
    </SFlexWrapper>

    {transactions.length &&
      transactions.map((item: any) => (
        <SFlexWrapper key={item.id}>
          <BriefCard
            title={item.paymentType}
            revenue={item.amount.to}
            profit="+5.08%"
            iconbackgroundcolor={theme.colors.blue.medium}
            iconcolor={theme.colors.white.primary}
            icon={faArchive}
          />
        </SFlexWrapper>
      ))}
    <ActivityChart />
  </SMainContainer>
);

export default Dashboard;
