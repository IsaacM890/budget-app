import React from 'react';
import styled from 'styled-components';
import { ITypographyProps } from '../../../models';
import { fontSize } from '../../../style/theme/theme';

const setfontSize = (size?: fontSize) => {
  switch (size) {
    case fontSize.heading1:
      return `
        font-size:2.125rem;
        `;

    case fontSize.heading2:
      return `
      font-size:1.5rem;
      `;

    case fontSize.heading3:
      return `
      font-size:1.25rem;
      `;

    case fontSize.caption:
      return `
      font-size:1rem;`;

    case fontSize.subtitle:
      return `
      font-size:0.875rem;`;

    case fontSize.subtitle2:
      return `
      font-size:11px;`;

    default:
      return fontSize.caption;
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
