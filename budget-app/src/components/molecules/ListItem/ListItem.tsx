import React, { FC } from 'react';
import styled from 'styled-components';
import { IListItemProps } from '../../../models/index';

const ListItemWrapper = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px 0;
  margin: 5px 3px;
`;
//margin={''} padding={''}
const ListItem: FC<IListItemProps> = ({ children }) => {
  return <ListItemWrapper>{children}</ListItemWrapper>;
};

export default ListItem;
