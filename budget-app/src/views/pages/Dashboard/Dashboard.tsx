import React, { FC } from 'react';
import styled from 'styled-components';
import BriefCard from '../../../components/molecules/BriefCard/BriefCard';
import CreditCard from '../../../components/molecules/CreditCard/CreditCard';
import IncomeChart from '../../../constants/charts/IncomeChart/IncomeChart';
import ActivityChart from '../../../constants/charts/ActivityChart/ActivityChart';
import { faArchive } from '@fortawesome/free-solid-svg-icons';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
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
`;

const SIncomeChartWrapper = styled.div`
  width: 344px;
  height: 206px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  box-sizing: border-box;
  border-radius: 10px;
`;

const ActivityWrapper = styled.div`
  width: 100%;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  box-sizing: border-box;
`;

const Dashboard: FC = () => {
  return (
    <SMainContainer>
      <SFlexWrapper>
        <CreditCard first_name={'itzhak'} last_name={'Maharat'} last4Digits={1589} exp_month={11} exp_year={25} />
      </SFlexWrapper>
      <SFlexWrapper>
        <SIncomeChartWrapper>
          <IncomeChart />
        </SIncomeChartWrapper>
      </SFlexWrapper>
      <SFlexWrapper>
        <BriefCard
          title={'Investments'}
          revenue={'90,854'}
          profit={'+5.08%'}
          iconbackgroundcolor={theme.colors.blue.medium}
          iconcolor={theme.colors.white.primary}
          icon={faArchive}
        />
      </SFlexWrapper>
      <SFlexWrapper>
        <BriefCard
          title={'Sales'}
          revenue={'90,854'}
          profit={'+5.08%'}
          iconbackgroundcolor={theme.colors.blue.dark}
          iconcolor={theme.colors.white.primary}
          icon={faChartLine}
        />
      </SFlexWrapper>
      <ActivityWrapper>
        <ActivityChart />
      </ActivityWrapper>
    </SMainContainer>
  );
};

export default Dashboard;
