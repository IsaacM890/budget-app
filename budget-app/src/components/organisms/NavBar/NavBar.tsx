import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import NavList from '../NavList/NavList';
import CurrentBalance from '../../molecules/CurrentBalance/CurrentBalance';
import theme from '../../../style/theme/theme';

interface IIsshowProps {
  isShow?: boolean;
}
const SNavBarWrapper = styled.div<IIsshowProps>(
  ({ isShow }) => `
  background-color: ${theme.colors.blue.dark};
  width: 200px;
  padding: 40px 10px;
  @media (max-width: ${theme.breakpoints.laptop}) {
    /* display: none; */
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
  @media (max-width: ${theme.breakpoints.laptop}) {
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
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <SmenuIconWrapper onClick={() => setIsShow(true)}>
        <FontAwesomeIcon icon={faBars} color="grey" />
      </SmenuIconWrapper>
      <SNavBarWrapper isShow={isShow}>
        <CurrentBalance currentBalance="15654" />
        <NavList />
      </SNavBarWrapper>
    </>
  );
};

export default NavBar;
