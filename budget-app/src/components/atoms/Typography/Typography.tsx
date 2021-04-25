import React from 'react';
import styled from 'styled-components';
import { ITypographyProps } from '../../../models';
import { FontSize } from '../../../style/theme/theme';

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
  ${({ bold }) => (bold ? `font-weight:bold` : `font-weight:normal`)}
`;

const Typography: React.FC<ITypographyProps> = ({ fontsize, children, color, bold }) => (
  <STypography fontsize={fontsize} color={color} bold={bold}>
    {children}
  </STypography>
);
export default Typography;
