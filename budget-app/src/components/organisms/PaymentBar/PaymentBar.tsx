import React, { FC } from 'react';
import styled from 'styled-components';
import UserDetails from '../../molecules/UserDetails/UserDetails';
import PaymentList from '../PaymentList/PaymentList';
import { FontSize } from '../../../enums/index';
import Typography from '../../atoms/Typography/Typography';
import theme from '../../../style/theme/theme';

const SPaymentBarContainer = styled.div`
  background-color: #fcedd8;
  width: 200px;
  padding: 40px 10px;
  @media (max-width: ${theme.breakpoints.desktop}) {
    display: none;
  }
  overflow-y: auto;
`;

const STitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
`;

const PaymentBar: FC = () => (
  <SPaymentBarContainer>
    <UserDetails
      FirstName="yaron"
      LastName="avraham"
      email="yaron2324@gmail.com"
      avatar="https://png.pngtree.com/png-vector/20190909/ourmid/pngtree-outline-user-icon-png-image_1727916.jpg"
    />
    <STitleWrapper>
      <Typography fontsize={FontSize.heading2} margin="5px 0" fontweight="bold">
        Payment History
      </Typography>
    </STitleWrapper>
    <PaymentList />
  </SPaymentBarContainer>
);

export default PaymentBar;
