import React, { FC, useContext } from 'react';
import styled from 'styled-components';
import UserDetails from '../../molecules/UserDetails/UserDetails';
import PaymentList from '../PaymentList/PaymentList';
import Typography from '../../atoms/Typography/Typography';
import { breakpoints, colors, FontSize } from '../../../style/theme/theme';
import { UserContext } from '../../../constexts/userContext';

const SPaymentBarContainer = styled.div`
  background-color: ${colors.pink.secondery};
  width: 200px;
  padding: 40px 10px;
  overflow-y: auto;
  @media (max-width: ${breakpoints.desktop}) {
    display: none;
  }
`;

const STitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
`;

const PaymentBar: FC = () => {
  const { user } = useContext(UserContext);
  const { firstName, lastName, email, avatar } = user;
  return (
    <SPaymentBarContainer>
      <UserDetails firstName={firstName} lastName={lastName} email={email} avatar={avatar} />
      <STitleWrapper>
        <Typography fontsize={FontSize.heading2} margin="5px 0" bold>
          Payment History
        </Typography>
      </STitleWrapper>
      <PaymentList />
    </SPaymentBarContainer>
  );
};

export default PaymentBar;
