import React, { FC } from 'react';
import styled from 'styled-components';
import { navGroup } from '../../../constants/NavGroup';
import ListItem from '../../molecules/ListItem/ListItem';
import Icon from '../../atoms/Icon/Icon';
import Typography from '../../atoms/Typography/Typography';
import { FontSize, IconSize } from '../../../enums/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import theme from '../../../style/theme/theme';

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
      {navGroup.map(({ id, icon, color, label, route }) => {
        return (
          <ListItem key={id}>
            <Icon margin={'0 5px'} padding={'0 5px'} size={IconSize.medium}>
              <FontAwesomeIcon icon={icon} color={color} />
            </Icon>
            <Typography fontsize={FontSize.caption} color={theme.colors.white.primary}>
              {label}
            </Typography>
          </ListItem>
        );
      })}
    </NavListWrapper>
  );
};

export default NavList;
