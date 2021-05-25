import React, { FC } from 'react';
import styled from 'styled-components';
import { ITransactionCardProps } from '../../../models/index';
import Typography from '../../atoms/Typography/Typography';
import { colors, fontSize } from '../../../style/theme/theme';

const STransactionCardContainer = styled.div`
  border-radius: 10px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  box-shadow: rgba(99, 99, 99, 0.4) 0px 2px 8px 0px;
  position: relative;
`;

const SDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
`;

const STitleWrapper = styled.div`
  margin-block: auto;
`;

const TransactionCard: FC<ITransactionCardProps> = ({
  paymentType,
  paymentMethod,
  cancelled,
  time,
  date,
  currency,
  category,
  company,
  amount,
  location,
}) => (
  <STransactionCardContainer>
    <STitleWrapper>
      <Typography fontsize={fontSize.heading3} bold>
        {paymentType}
      </Typography>
    </STitleWrapper>
    <SDetailsWrapper>
      <Typography fontsize={fontSize.caption} color={colors.grey.primary}>
        Payment Method : {paymentMethod}
      </Typography>
      <Typography fontsize={fontSize.caption} color={colors.grey.primary}>
        Cancelled : {cancelled}
      </Typography>
      <Typography fontsize={fontSize.caption} color={colors.grey.primary}>
        Amount : {amount}
      </Typography>
      <Typography fontsize={fontSize.caption} color={colors.grey.primary}>
        Time : {time}
      </Typography>
      <Typography fontsize={fontSize.caption} color={colors.grey.primary}>
        Date: {date}
      </Typography>
      <Typography fontsize={fontSize.caption} color={colors.grey.primary}>
        Currency: {currency}
      </Typography>
      <Typography fontsize={fontSize.caption} color={colors.grey.primary}>
        Category : {category}
      </Typography>
      <Typography fontsize={fontSize.caption} color={colors.grey.primary}>
        Company : {company}
      </Typography>
      <Typography fontsize={fontSize.caption} color={colors.grey.primary}>
        Country: {location.country}
      </Typography>
    </SDetailsWrapper>
  </STransactionCardContainer>
);

export default TransactionCard;
