import React, { FC, useContext } from 'react';
import styled from 'styled-components';
import { faArchive, faChartLine } from '@fortawesome/free-solid-svg-icons';
import { TransactionsContext } from '../../../constexts/transactionsContext';
import BriefCard from '../../../components/molecules/BriefCard/BriefCard';
import CreditCard from '../../../components/molecules/CreditCard/CreditCard';
import IncomeChart from '../../../components/molecules/IncomeChart/IncomeChart';
import ActivityChart from '../../../components/molecules/ActivityChart/ActivityChart';
import { colors, breakPoints } from '../../../style/theme/theme';
import getAverage from '../../../helpers/mathFuncs';
import { UserContext } from '../../../constexts/userContext';

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
  @media (max-width: ${breakPoints.desktop}) {
    width: 50%;
  }
  @media (max-width: ${breakPoints.laptop}) {
    width: 50%;
  }
  @media (max-width: ${breakPoints.tablet}) {
    width: 50%;
  }
`;

const Dashboard: FC = () => {
  const { user } = useContext(UserContext);
  const { creditCard, firstName, lastName } = user;
  const { transactions } = useContext(TransactionsContext);
  const { last4Digits, expMonth, expYear } = creditCard[0];

  const incomes = transactions.filter((t) => t.paymentType === 'Income');
  const expenses = transactions.filter((t) => t.paymentType === 'Expenses');
  return (
    <SMainContainer>
      <SFlexWrapper>
        <CreditCard
          firstName={firstName}
          lastName={lastName}
          last4Digits={last4Digits}
          expMonth={expMonth}
          expYear={expYear}
        />
      </SFlexWrapper>
      <SFlexWrapper>
        <IncomeChart />
      </SFlexWrapper>
      <SFlexWrapper>
        <BriefCard
          title="Income"
          revenue={getAverage(incomes)}
          profit="+5.08%"
          backgroundColor={colors.blue.medium}
          color={colors.default}
          icon={faArchive}
        />
      </SFlexWrapper>
      <SFlexWrapper>
        <BriefCard
          title="Expenses"
          revenue={getAverage(expenses)}
          profit="+5.08%"
          backgroundColor={colors.blue.medium}
          color={colors.default}
          icon={faChartLine}
        />
      </SFlexWrapper>
      <ActivityChart />
    </SMainContainer>
  );
};

export default Dashboard;
