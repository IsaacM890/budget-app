import React, { FC } from 'react';
import styled from 'styled-components';
import { AvatarSize } from '../../../enums';
import { IUserDetailsProps } from '../../../models/index';
import { colors, FontSize } from '../../../style/theme/theme';
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

const UserDetails: FC<IUserDetailsProps> = ({ firstName, lastName, email, avatar }) => (
  <SUserDetailsContainer>
    <Avatar size={AvatarSize.xl} borderRadius="50px" src={avatar} />
    <SCaptionWrapper>
      <Typography fontsize={FontSize.heading3} margin="5px 0" bold>
        {`${firstName}  ${lastName}`}
      </Typography>
      <Typography fontsize={FontSize.subtitle} color={colors.grey.primary}>
        {email}
      </Typography>
    </SCaptionWrapper>
  </SUserDetailsContainer>
);

export default UserDetails;
