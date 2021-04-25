import React, { FC, useContext, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import NavList from '../NavList/NavList';
import CurrentBalance from '../../molecules/CurrentBalance/CurrentBalance';
import { colors, breakPoints } from '../../../style/theme/theme';
import { UserContext } from '../../../constexts/userContext';

interface IIsshowProps {
  isShow?: boolean;
}
const SNavBarWrapper = styled.div<IIsshowProps>(
  ({ isShow }) => `
  background-color: ${colors.blue.dark};
  width: 200px;
  padding: 40px 10px;
  @media (max-width: ${breakPoints.laptop}) {
    position: absolute;
    left: ${isShow ? 0 : `-220px`} ;
    transition: 0.3s left;
    height:100%;
    z-index:1000;
  }
`
);

const SmenuIconWrapper = styled.div`
  display: none;
  @media (max-width: ${breakPoints.laptop}) {
    position: absolute;
    left: 35px;
    top: 20px;
    display: block;
    &:hover {
      cursor: pointer;
    }
  }
`;

const NavBar: FC = () => {
  const { user } = useContext(UserContext);

  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <SmenuIconWrapper onClick={() => setIsShow(true)}>
        <FontAwesomeIcon icon={faBars} color={colors.grey.primary} />
      </SmenuIconWrapper>
      <SNavBarWrapper isShow={isShow}>
        <CurrentBalance currentBalance={user.currentBalance} />
        <NavList />
      </SNavBarWrapper>
    </>
  );
};

export default NavBar;
