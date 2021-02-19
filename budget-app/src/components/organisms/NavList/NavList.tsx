import React, { FC } from 'react';
import styled from 'styled-components';
import { navGroup } from '../../../constants/NavGroup';
import ListItem from '../../molecules/ListItem/ListItem';
import Icon from '../../atoms/Icon/Icon';
import Typography from '../../atoms/Typography/Typography';
import { FontSize, IconSize } from '../../../enums/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavListWrapper = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding: 5px;
  margin: 0;
`;

const NavList: FC = () => {
  return (
    <NavListWrapper>
      {navGroup.map((item) => {
        return (
          <ListItem key={item.id}>
            <Icon size={IconSize.medium}>
              <FontAwesomeIcon icon={item.icon} color={item.color} />
            </Icon>
            <Typography fontsize={FontSize.caption} color={'white'} opacity={'0.5'}>
              {item.label}
            </Typography>
          </ListItem>
        );
      })}
    </NavListWrapper>
  );
};

export default NavList;
