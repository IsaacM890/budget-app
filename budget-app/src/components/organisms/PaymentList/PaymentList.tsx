import React, { FC } from 'react';
import styled from 'styled-components';
import { IPaymentListProps } from '../../../models/index';
import { payGroup } from '../../../constants/PayGroup';
import ListItem from '../../molecules/ListItem/ListItem';
import ListItemText from '../../molecules/ListItemText/ListItemText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

const PaymentList: FC<IPaymentListProps> = ({ paymentdate, amount, currency }) => {
  return (
    <PaymentListWrapper>
      {payGroup.map(({ backgroundcolor, icon, color, text, id, name }) => {
        return (
          <ListItem margin={'5px 3px'} padding={'5px 0'} key={id}>
            <SIconWrapper iconBackground={backgroundcolor}>
              <FontAwesomeIcon icon={icon} color={color} />
            </SIconWrapper>
            <ListItemText title={text} subtitle={paymentdate} />
            <ListItemText title={amount} subtitle={currency} />
          </ListItem>
        );
      })}
    </PaymentListWrapper>
  );
};

export default PaymentList;
