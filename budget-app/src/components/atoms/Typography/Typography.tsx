import React from 'react';
import { FontWeight, FontSize } from '../../../enums';
import { ITypographyProps } from '../../../models';
import styled from 'styled-components';

const setfontSize = (size?: FontSize) => {
  switch (size) {
    case FontSize.heading1:
      return `
        font-size:2.125rem;
        font-weight:bold;
        margin: 5px 0;
        `;

    case FontSize.heading2:
      return `
      font-size:1.5rem;
      font-weight:bold;
      margin: 5px 0;
      `;

    case FontSize.heading3:
      return `
      font-size:1.25rem;
      font-weight:bold;
      margin: 5px 0;
      `;

    case FontSize.caption:
      return `
      font-size:1rem;`;

    case FontSize.subtitle:
      return `
      font-size:0.875rem;`;

    case FontSize.subtitle2:
      return `
      font-size:11px;`;

    default:
      return FontSize.caption;
  }
};

const setfontWeight = (weight?: FontWeight) => {
  switch (weight) {
    case FontWeight.bold:
      return `
            font-weight:bold;`;
    default:
      return `font-weight:normal`;
  }
};

const STypography = styled.label<ITypographyProps>`
  ${(props) => setfontSize(props.fontsize)};
  ${(props) => setfontWeight(props.fontweight)};
  ${(props) => `color:${props.color};`}
  ${(props) => `opacity:${props.opacity};`}
`;

const Typography: React.FC<ITypographyProps> = ({ opacity, fontweight, fontsize, children, color }) => {
  return (
    <STypography opacity={opacity} fontsize={fontsize} fontweight={fontweight} color={color}>
      {children}
    </STypography>
  );
};

export default Typography;
