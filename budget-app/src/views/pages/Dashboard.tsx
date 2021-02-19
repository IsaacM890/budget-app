import React, { FC } from 'react';
import styled from 'styled-components';
import NavBar from '../../components/organisms/NavBar/NavBar';
import Main from '../../components/organisms/Main/Main';
import PaymentBar from '../../components/organisms/PaymentBar/PaymentBar';

const SDashboardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  width: 80%;
  height: 95vh;
  max-height: 95vh;
  margin: 10px auto;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const Dashboard: FC = () => {
  return (
    <SDashboardContainer>
      <NavBar />
      <Main />
      <PaymentBar />
    </SDashboardContainer>
  );
};

export default Dashboard;
