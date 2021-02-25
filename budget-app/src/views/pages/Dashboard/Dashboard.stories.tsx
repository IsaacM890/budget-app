import React from 'react';
import Dashboard from './Dashboard';
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
  title: 'pages/Dashboard',
  component: Dashboard,
} as Meta;

const Template: Story = (args) => <Dashboard {...args} />;

export const Example = Template.bind({});
Example.args = {};
