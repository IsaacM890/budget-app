import React, { FC } from 'react';
import styled from 'styled-components';
import { IListItemProps } from '../../../models/index';

const ListItemWrapper = styled.li`
  &:hover {
    cursor: pointer;
  }
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px 0;
  margin: 5px 3px;
  & :nth-child(3) {
    margin-left: auto;
    text-align: right;
  }
`;
const ListItem: FC<IListItemProps> = ({ children }) => <ListItemWrapper>{children}</ListItemWrapper>;

export default ListItem;
