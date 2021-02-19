import React, { FC } from 'react';
import styled from 'styled-components';
import { AvatarSize, FontSize, FontWeight } from '../../../enums';
import { IUserDetailsProps } from '../../../models/index';
import Avatar from '../../atoms/Avatar/Avatar';
import Typography from '../../atoms/Typography/Typography';

const SUserDetailsContainer = styled.div`
  height: 135px;
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 15px;
  padding: 10px;
  margin: 0 auto 40px;
`;

const SCaptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
`;

const UserDetails: FC<IUserDetailsProps> = ({ f_name, l_name, email, avatar }) => {
  return (
    <SUserDetailsContainer>
      <Avatar size={AvatarSize.xl} src={avatar} alt={'pro pic'}></Avatar>
      <SCaptionWrapper>
        <Typography fontsize={FontSize.heading3} fontweight={FontWeight.bold} color={'black'}>
          {f_name + ' ' + l_name}
        </Typography>
        <Typography fontsize={FontSize.subtitle} opacity={'0.5'} color={'black'}>
          {email}
        </Typography>
      </SCaptionWrapper>
    </SUserDetailsContainer>
  );
};

export default UserDetails;
