import React, { FC, useContext } from 'react';
import styled from 'styled-components';
import { faArchive, faChartLine } from '@fortawesome/free-solid-svg-icons';
import { TransactionsContext } from '../../../constexts/transactionsContext';
import BriefCard from '../../../components/molecules/BriefCard/BriefCard';
import CreditCard from '../../../components/molecules/CreditCard/CreditCard';
import IncomeChart from '../../../components/molecules/IncomeChart/IncomeChart';
import ActivityChart from '../../../components/molecules/ActivityChart/ActivityChart';
import { colors, breakpoints } from '../../../style/theme/theme';
import getAverage from '../../../helpers/mathFuncs';

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
  @media (max-width: ${breakpoints.desktop}) {
    width: 50%;
  }
  @media (max-width: ${breakpoints.laptop}) {
    width: 50%;
  }
  @media (max-width: ${breakpoints.tablet}) {
    width: 50%;
  }
`;

const Dashboard: FC = () => {
  const { transactions } = useContext(TransactionsContext);
  const incomes = transactions.filter((t) => t.paymentType === 'Income');
  const expenses = transactions.filter((t) => t.paymentType === 'Expenses');
  return (
    <SMainContainer>
      <SFlexWrapper>
        <CreditCard FirstName="itzhak" LastName="Maharat" last4Digits={1589} expMonth={11} expYear={25} />
      </SFlexWrapper>
      <SFlexWrapper>
        <IncomeChart />
      </SFlexWrapper>
      <SFlexWrapper>
        <BriefCard
          title="Income"
          revenue={getAverage(incomes)}
          profit="+5.08%"
          backgroundcolor={colors.blue.medium}
          color={colors.white.primary}
          icon={faArchive}
        />
      </SFlexWrapper>
      <SFlexWrapper>
        <BriefCard
          title="Expenses"
          revenue={getAverage(expenses)}
          profit="+5.08%"
          backgroundcolor={colors.blue.medium}
          color={colors.white.primary}
          icon={faChartLine}
        />
      </SFlexWrapper>
      <ActivityChart />
    </SMainContainer>
  );
};

export default Dashboard;
