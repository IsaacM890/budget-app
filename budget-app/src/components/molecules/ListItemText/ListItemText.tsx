import React, { FC } from 'react';
import styled from 'styled-components';
import Typography from '../../atoms/Typography/Typography';
import { IListItemTextProps } from '../../../models/index';
import { FontSize } from '../../../enums';

const SListItemTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
`;

const ListItemText: FC<IListItemTextProps> = ({ primary, secondery }) => {
  return (
    <SListItemTextWrapper>
      <Typography fontsize={FontSize.subtitle2} color={'black'}>
        {primary}
      </Typography>
      <Typography fontsize={FontSize.subtitle2} color={'black'} opacity={'0.3'}>
        {secondery}
      </Typography>
    </SListItemTextWrapper>
  );
};

export default ListItemText;
