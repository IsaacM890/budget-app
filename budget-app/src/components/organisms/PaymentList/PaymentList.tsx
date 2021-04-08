import React, { FC } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IPaymentListProps } from '../../../models/index';
import { getStyledData } from '../../../constants/PayGroup';
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

const PaymentList: FC<IPaymentListProps> = ({ currency, transactions }) => (
  <PaymentListWrapper>
    {/* {transactions?.length && transactions?.map((d) => console.log(getStyledData(d)?.icon))} */}
    {transactions?.map((d, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <ListItem margin="5px 3px" padding="5px 0" key={index}>
        <SIconWrapper iconBackground={getStyledData(d)?.backgroundcolor}>
          <FontAwesomeIcon icon="check" color={getStyledData(d)?.color} />
        </SIconWrapper>
        <ListItemText title={getStyledData(d)?.text} subtitle={getStyledData(d)?.date} />
        <ListItemText
          fontweight="bold"
          color={getAmountColor(getStyledData(d)?.amount)}
          title={`${getSymbol(getStyledData(d)?.amount)}  ${getStyledData(d)?.amount}`}
          subtitle={currency}
        />
      </ListItem>
    ))}
  </PaymentListWrapper>
);

export default PaymentList;

//  {/* {transactions?.length && transactions?.map((d) => console.log(getIcon(d)))}
//     {payGroup.map(({ amount, backgroundcolor, text, id, color }) => (
//       <ListItem margin="5px 3px" padding="5px 0" key={id}>
//         <SIconWrapper iconBackground={backgroundcolor}>
//           <FontAwesomeIcon icon="check" color={color} />
//         </SIconWrapper>
//         <ListItemText title={text} subtitle={paymentdate} />
//         <ListItemText
//           fontweight="bold"
//           color={getAmountColor(amount)}
//           title={`${getSymbol(amount)}  ${amount}`}
//           subtitle={currency}
//         />
//       </ListItem>
//     ))} */}
