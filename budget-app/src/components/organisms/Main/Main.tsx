import React, { FC } from 'react';
import styled from 'styled-components';
import BriefCard from '../../molecules/BriefCard/BriefCard';
import CreditCard from '../../molecules/CreditCard/CreditCard';
import IncomeChart from '../../molecules/IncomeChart/IncomeChart';
import ActivityChart from '../../molecules/ActivityChart/ActivityChart';
import { faArchive } from '@fortawesome/free-solid-svg-icons';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';

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

const Main: FC = () => {
  return (
    <SMainContainer>
      <SFlexWrapper>
        <CreditCard f_name={'itzhak'} l_name={'Maharat'} last4Digits={1589} exp_month={11} exp_year={25} />
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
          iconbackgroundcolor={'#1ba9e7'}
          iconcolor={'white'}
          icon={faArchive}
        />
      </SFlexWrapper>
      <SFlexWrapper>
        <BriefCard
          title={'Sales'}
          revenue={'90,854'}
          profit={'+5.08%'}
          iconbackgroundcolor={'#4333A0'}
          iconcolor={'white'}
          icon={faChartLine}
        />
      </SFlexWrapper>
      <ActivityWrapper>
        <ActivityChart />
      </ActivityWrapper>
    </SMainContainer>
  );
};

export default Main;
