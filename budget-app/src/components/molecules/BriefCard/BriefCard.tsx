import React, { FC } from 'react';
import styled from 'styled-components';
import { FontSize, FontWeight } from '../../../enums';
import { IBriefCardProps } from '../../../models/index';
import Typography from '../../atoms/Typography/Typography';
import Icon from '../../atoms/Icon/Icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
  right: 0;
  top: 0;
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
      <Typography fontweight={FontWeight.bold} fontsize={FontSize.heading2} color={'black'}>
        {title}
      </Typography>
      <SRevenueWrapper>
        <Typography fontsize={FontSize.subtitle} color={'grey'}>
          Revenue
        </Typography>
        <Typography fontsize={FontSize.heading2} color={'#62CCF7'}>
          {revenue}
        </Typography>
      </SRevenueWrapper>
      <SProfitBox>
        <Typography fontsize={FontSize.subtitle} color={'black'}>
          {profit}
        </Typography>
        <SProfitCaptionWrapper>
          <Typography fontsize={FontSize.subtitle} color={'grey'}>
            Since last month
          </Typography>
        </SProfitCaptionWrapper>
      </SProfitBox>
      <SMenuIconWrapper>
        <Icon></Icon>
      </SMenuIconWrapper>
      <SCardIconWrapper iconbackgroundcolor={iconbackgroundcolor}>
        <Icon>
          <FontAwesomeIcon icon={icon} color={iconcolor} />
        </Icon>
      </SCardIconWrapper>
    </SBriefCardContainer>
  );
};

export default BriefCard;
