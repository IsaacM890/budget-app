import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import ActivityChart from './ActivityChart';

export default {
  title: 'molecules/ActivityChart',
  component: ActivityChart,
} as Meta;

const Template: Story = (args) => <ActivityChart {...args} />;

export const Example = Template.bind({});
Example.args = {};
