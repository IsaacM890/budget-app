import React, { FC } from 'react';
import styled from 'styled-components';
import { ICreditCardProps } from '../../../models/index';
import Typography from '../../atoms/Typography/Typography';
import CreditCardBackground from '../../../assets/images/CreditCardBackground.png';
import { FontSize } from '../../../enums';
import theme from '../../../style/theme/theme';

const SCreditCardContainer = styled.div`
  background-image: url(${CreditCardBackground});
  background-size: cover;
  border-radius: 10px;
  width: 100%;
  height: 206px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 12px 12px;
  box-sizing: border-box;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const SDigitsWrapper = styled.div`
  margin-top: 20px;
  word-spacing: 5px;
  letter-spacing: 2px;
`;

const SCardHolderWrapper = styled.div``;

const SCardExpDateWrapper = styled.div``;

const SCardDataBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 2px;
  & > div {
    display: flex;
    flex-direction: column;
  }
`;

const CreditCard: FC<ICreditCardProps> = ({ FirstName, LastName, last4Digits, expMonth, expYear }) => (
  <SCreditCardContainer>
    <Typography fontsize={FontSize.heading2} color={theme.colors.white.primary} margin="5px 0" fontweight="bold">
      Card
    </Typography>
    <SDigitsWrapper>
      <Typography fontsize={FontSize.heading3} color={theme.colors.white.primary} margin="5px 0">
        {`**** **** **** ${last4Digits}`}
      </Typography>
    </SDigitsWrapper>
    <SCardDataBox>
      <SCardHolderWrapper>
        <Typography fontsize={FontSize.subtitle} color={theme.colors.white.primary} opacity="0.5">
          CARD HOLDER
        </Typography>
        <Typography fontsize={FontSize.caption} color={theme.colors.white.primary}>
          {`${FirstName}  ${LastName}`}
        </Typography>
      </SCardHolderWrapper>
      <SCardExpDateWrapper>
        <Typography fontsize={FontSize.subtitle} color={theme.colors.white.primary} opacity="0.5">
          VALID THRU
        </Typography>
        <Typography fontsize={FontSize.caption} color={theme.colors.white.primary}>
          {`${expMonth} / ${expYear}`}
        </Typography>
      </SCardExpDateWrapper>
    </SCardDataBox>
  </SCreditCardContainer>
);

export default CreditCard;
