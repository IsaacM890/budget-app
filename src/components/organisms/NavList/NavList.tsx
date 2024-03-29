import React, { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import navGroup from '../../../constants/NavGroup';
import ListItem from '../../molecules/ListItem/ListItem';
import Icon from '../../atoms/Icon/Icon';
import Typography from '../../atoms/Typography/Typography';
import { IconSize } from '../../../enums/index';
import { colors, fontSize } from '../../../style/theme/theme';

const NavListWrapper = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding: 5px;
`;

const NavList: FC = () => (
  <NavListWrapper>
    {navGroup.map(({ id, icon, color, label, route }) => (
      <Link key={id} to={route}>
        <ListItem>
          <Icon size={IconSize.medium}>
            <FontAwesomeIcon icon={icon} color={color} />
          </Icon>
          <Typography fontsize={fontSize.caption} color={colors.default}>
            {label}
          </Typography>
        </ListItem>
      </Link>
    ))}
  </NavListWrapper>
);

export default NavList;
