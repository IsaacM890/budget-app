import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import NavList from './NavList';

export default {
  title: 'organism/NavList',
  component: NavList,
} as Meta;

const Template: Story = (args) => <NavList {...args} />;

export const navlist = Template.bind({});
navlist.args = {};
