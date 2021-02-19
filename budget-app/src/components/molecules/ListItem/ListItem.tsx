import React, { FC } from 'react';
import styled from 'styled-components';
import { IListItemProps } from '../../../models/index';

const ListItemWrapper = styled.li<IListItemProps>(
  ({ padding, margin }) => `
  
  display: flex;
  flex-direction: row;
  align-items: center;
  padding:${padding};
  margin:${margin};

`
);

const ListItem: FC<IListItemProps> = ({ children, padding, margin }) => {
  return (
    <ListItemWrapper padding={padding} margin={margin}>
      {children}
    </ListItemWrapper>
  );
};

export default ListItem;
