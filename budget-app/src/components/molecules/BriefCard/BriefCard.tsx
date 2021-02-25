import React, { FC } from 'react';
import styled from 'styled-components';
import { FontSize } from '../../../enums';
import { IBriefCardProps } from '../../../models/index';
import Typography from '../../atoms/Typography/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import theme from '../../../style/theme/theme';

const SBriefCardContainer = styled.div`
  border-radius: 10px;
  width: 344px;
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
  ({ iconbackgroundcolor }) => `
  background-color:${iconbackgroundcolor};
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

const BriefCard: FC<IBriefCardProps> = ({ title, profit, revenue, iconbackgroundcolor, icon, iconcolor }) => {
  return (
    <SBriefCardContainer>
      <Typography fontsize={FontSize.heading2} margin={'5px 0'} fontweight={'bold'}>
        {title}
      </Typography>
      <SRevenueWrapper>
        <Typography fontsize={FontSize.caption} color={theme.colors.grey.primary}>
          Revenue
        </Typography>
        <Typography fontsize={FontSize.heading2} color={theme.colors.blue.lightblue}>
          {revenue}
        </Typography>
      </SRevenueWrapper>
      <SProfitBox>
        <Typography fontsize={FontSize.subtitle}>{profit}</Typography>
        <SProfitCaptionWrapper>
          <Typography fontsize={FontSize.subtitle} color={theme.colors.grey.primary}>
            Since last month
          </Typography>
        </SProfitCaptionWrapper>
      </SProfitBox>
      <SMenuIconWrapper>
        <FontAwesomeIcon icon={faEllipsisH} color={theme.colors.grey.primary} />
      </SMenuIconWrapper>
      <SCardIconWrapper iconbackgroundcolor={iconbackgroundcolor}>
        <FontAwesomeIcon icon={icon} color={iconcolor} />
      </SCardIconWrapper>
    </SBriefCardContainer>
  );
};

export default BriefCard;