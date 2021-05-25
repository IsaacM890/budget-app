import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import HomePage from './HomePage';

export default {
  title: 'pages/HomePage',
  component: HomePage,
} as Meta;

const Template: Story = (args) => <HomePage {...args} />;

export const Example = Template.bind({});
Example.args = {};
