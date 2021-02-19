import React, { FC } from 'react';
import styled from 'styled-components';
import { ICreditCardProps } from '../../../models/index';
import Typography from '../../atoms/Typography/Typography';
import CreditCardBackground from '../../../assets/images/CreditCardBackground.png';
import { FontSize } from '../../../enums';

const SCreditCardContainer = styled.div`
  background-image: url(${CreditCardBackground});
  background-size: cover;
  border-radius: 10px;
  width: 344px;
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

const CreditCard: FC<ICreditCardProps> = ({ f_name, l_name, last4Digits, exp_month, exp_year }) => {
  return (
    <SCreditCardContainer>
      <Typography fontsize={FontSize.heading2} color={'white'}>
        Card
      </Typography>
      <SDigitsWrapper>
        <Typography fontsize={FontSize.heading3} color={'white'}>
          {'**** **** **** ' + last4Digits}
        </Typography>
      </SDigitsWrapper>
      <SCardDataBox>
        <SCardHolderWrapper>
          <Typography opacity={'0.5'} fontsize={FontSize.subtitle} color={'white'}>
            CARD HOLDER
          </Typography>
          <Typography fontsize={FontSize.caption} color={'white'}>
            {f_name + ' ' + l_name}
          </Typography>
        </SCardHolderWrapper>
        <SCardExpDateWrapper>
          <Typography opacity={'0.5'} fontsize={FontSize.subtitle} color={'white'}>
            VALID THRU
          </Typography>
          <Typography fontsize={FontSize.caption} color={'white'}>
            {exp_month + ' / ' + exp_year}
          </Typography>
        </SCardExpDateWrapper>
      </SCardDataBox>
    </SCreditCardContainer>
  );
};

export default CreditCard;
