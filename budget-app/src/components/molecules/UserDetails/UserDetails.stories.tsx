import React from 'react';
import UserDetails from './UserDetails';
import { IUserDetailsProps } from '../../../models/index';
import { Story, Meta } from '@storybook/react/types-6-0';

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
  avatar: 'https://www.itu.cet.ac.il/uploads/2017/08/default-avatar-1.jpg',
};
