import React, { FC } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { IBriefCardProps } from '../../../models/index';
import Typography from '../../atoms/Typography/Typography';
import { colors, fontSize } from '../../../style/theme/theme';

const SBriefCardContainer = styled.div`
  border-radius: 10px;
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  box-sizing: border-box;
  position: relative;
`;

const SRevenueWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const SProfitBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const SProfitCaptionWrapper = styled.div`
  margin-left: 15px;
`;

const SMenuIconWrapper = styled.div`
  position: absolute;
  right: 20px;
  top: 10px;
`;

const SCardIconWrapper = styled.div<IBriefCardProps>(
  ({ backgroundColor }) => `
  background-color:${backgroundColor};
  width: 45px;
  height: 45px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 10px;
  bottom: 10px;
`
);

const BriefCard: FC<IBriefCardProps> = ({ title, profit, revenue, backgroundColor, icon, color }) => (
  <SBriefCardContainer>
    <Typography fontsize={fontSize.heading2} bold>
      {title}
    </Typography>
    <SRevenueWrapper>
      <Typography fontsize={fontSize.caption} color={colors.grey.primary}>
        Revenue
      </Typography>
      <Typography fontsize={fontSize.heading2} color={colors.blue.lightblue}>
        {revenue}
      </Typography>
    </SRevenueWrapper>
    <SProfitBox>
      <Typography fontsize={fontSize.subtitle}>{profit}</Typography>
      <SProfitCaptionWrapper>
        <Typography fontsize={fontSize.subtitle} color={colors.grey.primary}>
          Since last month
        </Typography>
      </SProfitCaptionWrapper>
    </SProfitBox>
    <SMenuIconWrapper>
      <FontAwesomeIcon icon={faEllipsisH} color={colors.grey.primary} />
    </SMenuIconWrapper>
    <SCardIconWrapper backgroundColor={backgroundColor}>
      <FontAwesomeIcon icon={icon} color={color} />
    </SCardIconWrapper>
  </SBriefCardContainer>
);

export default BriefCard;
