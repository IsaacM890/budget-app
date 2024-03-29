import React, { FC } from 'react';
import styled from 'styled-components';
import Typography from '../../atoms/Typography/Typography';
import { IListItemTextProps } from '../../../models/index';
import { colors, fontSize } from '../../../style/theme/theme';

const SListItemTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2px;
  margin: 5px 2px;
`;

const ListItemText: FC<IListItemTextProps> = ({ title, subtitle, color }) => (
  <SListItemTextWrapper>
    <Typography bold color={color} fontsize={fontSize.subtitle2}>
      {title}
    </Typography>
    <Typography fontsize={fontSize.subtitle2} color={colors.grey.primary}>
      {subtitle}
    </Typography>
  </SListItemTextWrapper>
);

export default ListItemText;
