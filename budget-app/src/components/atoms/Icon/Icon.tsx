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
  ${({ size }) => setSize(size)};
  ${({ padding }) => `padding:${padding};`};
  ${({ backgroundcolor }) => `background-color:${backgroundcolor};`};
  ${({ borderradius }) => `border-radius:${borderradius};`};
  ${({ margin }) => `margin:${margin};`};
`;

const Icon: React.FC<IIconProps> = ({ size, padding, children, backgroundcolor, borderradius, margin }) => (
  <SIcon margin={margin} size={size} padding={padding} backgroundcolor={backgroundcolor} borderradius={borderradius}>
    {children}
  </SIcon>
);

export default Icon;
