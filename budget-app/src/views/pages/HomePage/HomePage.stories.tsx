import React from 'react';
import HomePage from './HomePage';
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
  title: 'pages/HomePage',
  component: HomePage,
} as Meta;

const Template: Story = (args) => <HomePage {...args} />;

export const Example = Template.bind({});
Example.args = {};
