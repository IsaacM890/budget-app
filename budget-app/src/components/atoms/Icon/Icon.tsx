import React from 'react';
import styled from 'styled-components';
import { IIconProps } from '../../../models';
import { IconSize } from '../../../enums';

const setSize = (size?: IconSize) => {
  switch (size) {
    case IconSize.Xlarge:
      return `
      font-size: 40px;
      margin: 10px;
      `;

    case IconSize.large:
      return `
      font-size: 30px;
      margin: 10px;

      `;

    case IconSize.medium:
      return `
      font-size: 20px;
      margin: 10px;
      `;

    case IconSize.small:
      return `
      font-size: 15px;
      margin: 10px;
      `;

    default:
      return 'margin: 10px';
  }
};

const SIcon = styled.div<IIconProps>`
  ${(props) => setSize(props.size)};
  ${(props) => `padding:${props.padding};`};
  ${(props) => `background-color:${props.backgroundcolor};`};
  ${(props) => `border-radius:${props.borderradius};`};
`;

const Icon: React.FC<IIconProps> = ({ size, padding, children, backgroundcolor, borderradius }) => {
  return (
    <SIcon size={size} padding={padding} backgroundcolor={backgroundcolor} borderradius={borderradius}>
      {children}
    </SIcon>
  );
};

export default Icon;
