import React, { FC, useContext } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TransactionsContext } from '../../../constexts/transactionsContext';
import { IPaymentListProps } from '../../../models/index';
import { getAmountColor, getAmountSymbol, getDateFormat } from '../../../helpers/designFuncs';
import getStyleByPaymentMethod from '../../../constants/PayGroup';
import ListItem from '../../molecules/ListItem/ListItem';
import ListItemText from '../../molecules/ListItemText/ListItemText';
import { CurrencyContext } from '../../../constexts/currencyContext';

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

const PaymentList: FC = () => {
  const { transactions } = useContext(TransactionsContext);
  const { currencyRates, selectedCurrency } = useContext(CurrencyContext);
  return (
    <PaymentListWrapper>
      {transactions?.map(({ paymentMethod, date, time, amount, currency }) => {
        const { backgroundColor, color, text, icon } = getStyleByPaymentMethod(paymentMethod);
        return (
          <ListItem>
            <SIconWrapper iconBackground={backgroundColor}>
              <FontAwesomeIcon icon={icon} color={color} />
            </SIconWrapper>
            <ListItemText title={text} subtitle={getDateFormat(date, time)} />
            <ListItemText
              fontweight="bold"
              color={getAmountColor(amount)}
              title={getAmountSymbol(amount / currencyRates[currency])}
              subtitle={selectedCurrency}
            />
          </ListItem>
        );
      })}
    </PaymentListWrapper>
  );
};

export default PaymentList;
