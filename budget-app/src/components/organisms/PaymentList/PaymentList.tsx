import React, { FC } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IPaymentListProps } from '../../../models/index';
import payGroup from '../../../constants/PayGroup';
import ListItem from '../../molecules/ListItem/ListItem';
import ListItemText from '../../molecules/ListItemText/ListItemText';

const PaymentListWrapper = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding: 5px;
  margin: 0;
`;

const SIconWrapper = styled.div<IPaymentListProps>(
  ({ iconBackground }) => `
  width: 35px;
  height: 35px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:${iconBackground};
  margin-right:5px;

`
);

const getAmountColor = (amount: number) => {
  if (amount > 0) {
    return `#8a7be5`;
  }
  if (amount < 0) {
    return `#62CCF7`;
  }
  return 'black';
};
const getSymbol = (amount: number) => (amount > 0 ? '+' : '');

const PaymentList: FC<IPaymentListProps> = ({ paymentdate, currency }) => (
  <PaymentListWrapper>
    {payGroup.map(({ amount, backgroundcolor, icon, color, text, id }) => (
      <ListItem margin="5px 3px" padding="5px 0" key={id}>
        <SIconWrapper iconBackground={backgroundcolor}>
          <FontAwesomeIcon icon={icon} color={color} />
        </SIconWrapper>
        <ListItemText title={text} subtitle={paymentdate} />
        <ListItemText
          fontweight="bold"
          color={getAmountColor(amount)}
          title={`${getSymbol(amount)}  ${amount}`}
          subtitle={currency}
        />
      </ListItem>
    ))}
  </PaymentListWrapper>
);

export default PaymentList;
