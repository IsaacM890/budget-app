import React, { FC, useState } from 'react';
import styled from 'styled-components';
import NavList from '../NavList/NavList';
import CurrentBalance from '../../molecules/CurrentBalance/CurrentBalance';
import theme from '../../../style/theme/theme';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IIsshowProps {
  isShow?: boolean;
}
const SNavBarWrapper = styled.div<IIsshowProps>(
  ({ isShow }) => `
  background-color: #4333a0;
  width: 200px;
  padding: 40px 10px;
  @media (max-width: ${theme.breakpoints.tablet}) {
    /* display: none; */
    position: absolute;
    left: ${isShow ? 0 : `-220px`} ;
    transition: 0.3s left;
    height:100%;
    z-index:1000;
  }
`
);

// const SNavBarWrapper = styled.div`
//   background-color: #4333a0;
//   width: 200px;
//   padding: 40px 10px;
//   @media (max-width: ${theme.breakpoints.tablet}) {
//     /* display: none; */
//     position: absolute;
//     left: -220px;
//     transition: 0.3s left;
//   }
// `;

const SmenuIconWrapper = styled.div`
  display: none;
  @media (max-width: ${theme.breakpoints.tablet}) {
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
        <FontAwesomeIcon icon={faBars} color={'grey'} />
      </SmenuIconWrapper>
      <SNavBarWrapper isShow={isShow}>
        <CurrentBalance currentBalance={'15654'} />
        <NavList />
      </SNavBarWrapper>
    </>
  );
};

export default NavBar;
