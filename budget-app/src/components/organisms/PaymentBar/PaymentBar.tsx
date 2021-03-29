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
      avatar="https://www.itu.cet.ac.il/uploads/2017/08/default-avatar-1.jpg"
    />
    <STitleWrapper>
      <Typography fontsize={FontSize.heading2} margin="5px 0" fontweight="bold">
        Payment History
      </Typography>
    </STitleWrapper>
    <PaymentList paymentdate="4 march,18:33" currency="USD" />
  </SPaymentBarContainer>
);

export default PaymentBar;
