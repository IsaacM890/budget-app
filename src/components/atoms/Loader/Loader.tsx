import React from 'react';
import styled from 'styled-components';
import gif from '../../../assets/images/loader.gif';

const SLoader = styled.img`
  left: 50%;
  top: 50%;
  position: absolute;
  z-index: 101;
  width: 10rem;
  height: 10rem;
  margin-left: -5rem;
  margin-top: -5rem;
`;

const Loader: React.FC = () => <SLoader src={gif} alt="Loading..." />;

export default Loader;
