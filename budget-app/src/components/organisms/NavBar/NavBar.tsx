import React, { FC } from 'react';
import styled from 'styled-components';
import NavList from '../NavList/NavList';
import CurrentBalance from '../../molecules/CurrentBalance/CurrentBalance';

const SNavBarWrapper = styled.div`
  background-color: #4333a0;
  width: 200px;
  padding: 40px 10px;
`;

const NavBar: FC = () => {
  return (
    <SNavBarWrapper>
      <CurrentBalance currentBalance={'15654'} />
      <NavList />
    </SNavBarWrapper>
  );
};

export default NavBar;
