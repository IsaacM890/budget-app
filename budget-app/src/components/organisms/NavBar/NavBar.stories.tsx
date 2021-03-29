import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import NavBar from './NavBar';

export default {
  title: 'organism/NavBar',
  component: NavBar,
} as Meta;

const Template: Story = (args) => <NavBar {...args} />;

export const Example = Template.bind({});
Example.args = {};
