import React from 'react';
import styled from 'styled-components';
import { IIconProps } from '../../../models';
import { IconSize } from '../../../enums';

const setSize = (size?: IconSize) => {
  switch (size) {
    case IconSize.Xlarge:
      return `
      font-size: 40px;
      `;

    case IconSize.large:
      return `
      font-size: 30px;
      `;

    case IconSize.medium:
      return `
      font-size: 20px;
      `;

    case IconSize.small:
      return `
      font-size: 15px;
      `;

    default:
      return 'margin: 10px';
  }
};

const SIcon = styled.div<IIconProps>`
  margin: 0 5px;
  padding: 0 5px;
  ${({ size }) => setSize(size)};
  ${({ backgroundColor }) => `background-color:${backgroundColor};`};
  ${({ borderRadius }) => `border-radius:${borderRadius};`};
`;

const Icon: React.FC<IIconProps> = ({ size, children, backgroundColor, borderRadius }) => (
  <SIcon size={size} backgroundColor={backgroundColor} borderRadius={borderRadius}>
    {children}
  </SIcon>
);

export default Icon;
