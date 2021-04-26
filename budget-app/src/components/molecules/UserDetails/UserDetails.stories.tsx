import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import UserDetails from './UserDetails';
import { IUserDetailsProps } from '../../../models/index';

export default {
  title: 'molecules/UserDetails',
  component: UserDetails,
} as Meta;

const Template: Story<IUserDetailsProps> = (args) => <UserDetails {...args} />;

export const Example = Template.bind({});
Example.args = {
  f_name: 'Ian',
  l_name: 'Kelley',
  email: 'Itzhakm890@gmai.com',
  avatar: 'https://png.pngtree.com/png-vector/20190909/ourmid/pngtree-outline-user-icon-png-image_1727916.jpg',
};
