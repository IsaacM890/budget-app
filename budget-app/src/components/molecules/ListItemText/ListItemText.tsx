import React, { FC } from 'react';
import styled from 'styled-components';
import Typography from '../../atoms/Typography/Typography';
import { IListItemTextProps } from '../../../models/index';
import { FontSize } from '../../../enums';

const SListItemTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2px;
  margin: 5px 2px;
`;

const ListItemText: FC<IListItemTextProps> = ({ fontweight, title, subtitle, color }) => (
  <SListItemTextWrapper>
    <Typography fontweight={fontweight} color={color} fontsize={FontSize.subtitle2}>
      {title}
    </Typography>
    <Typography fontsize={FontSize.subtitle2} opacity="0.5">
      {subtitle}
    </Typography>
  </SListItemTextWrapper>
);

export default ListItemText;
