import React from 'react';
import styled from 'styled-components';
import { IIconProps } from '../../../models';
import { IconSize } from '../../../enums';

const setSize = (size?: IconSize) => {
  switch (size) {
    case IconSize.Xlarge:
      return `
      font-size: 40px;
      margin: 0 5px;
      padding:0 5px;

      `;

    case IconSize.large:
      return `
      font-size: 30px;
      margin: 0 5px;
      padding:0 5px;
      `;

    case IconSize.medium:
      return `
      font-size: 20px;
      margin: 0 5px;
      padding:0 5px;
      `;

    case IconSize.small:
      return `
      font-size: 15px;
      margin: 0 5px;
      padding:0 5px;

      `;

    default:
      return 'margin: 10px';
  }
};

const SIcon = styled.div<IIconProps>`
  ${({ size }) => setSize(size)};
  ${({ backgroundcolor }) => `background-color:${backgroundcolor};`};
  ${({ borderradius }) => `border-radius:${borderradius};`};
`;

const Icon: React.FC<IIconProps> = ({ size, children, backgroundcolor, borderradius }) => (
  <SIcon size={size} backgroundcolor={backgroundcolor} borderradius={borderradius}>
    {children}
  </SIcon>
);

export default Icon;
