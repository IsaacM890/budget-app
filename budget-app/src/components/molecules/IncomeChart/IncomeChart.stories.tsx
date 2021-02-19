import React from 'react';
import IncomeChart from './IncomeChart';
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
  title: 'molecules/IncomeChart',
  component: IncomeChart,
} as Meta;

const Template: Story = (args) => <IncomeChart {...args} />;

export const Example = Template.bind({});
Example.args = {};
