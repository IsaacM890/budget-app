import React from 'react';
import styled from 'styled-components';
import { FontSize } from '../../../enums';
import { ITypographyProps } from '../../../models';

const setfontSize = (size?: FontSize) => {
  switch (size) {
    case FontSize.heading1:
      return `
        font-size:2.125rem;
        `;

    case FontSize.heading2:
      return `
      font-size:1.5rem;
      `;

    case FontSize.heading3:
      return `
      font-size:1.25rem;
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

const STypography = styled.label<ITypographyProps>`
  ${({ fontsize }) => setfontSize(fontsize)};
  ${({ color }) => `color:${color};`}
  ${({ fontweight }) => `font-weight:${fontweight};`}
  ${({ opacity }) => `opacity:${opacity};`}
`;

const Typography: React.FC<ITypographyProps> = ({ fontweight, fontsize, children, color, opacity }) => (
  <STypography fontsize={fontsize} fontweight={fontweight} color={color} opacity={opacity}>
    {children}
  </STypography>
);

export default Typography;
