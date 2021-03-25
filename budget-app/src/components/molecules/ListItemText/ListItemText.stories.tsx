import React from 'react';
import ListItemText from './ListItemText';
import { IListItemTextProps } from '../../../models/index';
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
  title: 'molecules/ListItemText',
  component: ListItemText,
} as Meta;

const Template: Story<IListItemTextProps> = (args) => <ListItemText {...args}></ListItemText>;

export const Example = Template.bind({});
Example.args = {
  primary: 'primary',
  secondery: 'secondery',
};
