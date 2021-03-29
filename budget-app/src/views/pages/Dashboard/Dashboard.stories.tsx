import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Dashboard from './Dashboard';

export default {
  title: 'pages/Dashboard',
  component: Dashboard,
} as Meta;

const Template: Story = (args) => <Dashboard {...args} />;

export const Example = Template.bind({});
Example.args = {};
