import React, { FC } from 'react';
import styled from 'styled-components';
import Typography from '../../atoms/Typography/Typography';
import { ICurrentBalanceProps } from '../../../models/index';
import { colors, fontSize } from '../../../style/theme/theme';

export const SCurrentBalanceWrapper = styled.div`
  height: 120px;
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 10px;
  margin: 0 auto 40px;
`;

const SCaptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5px 0;
`;

const CurrentBalance: FC<ICurrentBalanceProps> = ({ currentBalance }) => (
  <SCurrentBalanceWrapper>
    <SCaptionWrapper>
      <Typography fontsize={fontSize.heading1} color={colors.default} bold>
        {currentBalance}
      </Typography>
    </SCaptionWrapper>
    <SCaptionWrapper>
      <Typography fontsize={fontSize.caption} color={colors.default}>
        Current balance
      </Typography>
    </SCaptionWrapper>
  </SCurrentBalanceWrapper>
);

export default CurrentBalance;
