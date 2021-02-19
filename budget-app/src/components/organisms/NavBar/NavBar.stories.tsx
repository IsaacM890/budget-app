import React from 'react';
import NavBar from './NavBar';
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
  title: 'organism/NavBar',
  component: NavBar,
} as Meta;

const Template: Story = (args) => <NavBar {...args}></NavBar>;

export const Example = Template.bind({});
Example.args = {};
