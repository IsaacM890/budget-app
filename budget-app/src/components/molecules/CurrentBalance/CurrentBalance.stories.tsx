import React from 'react';
import CurrentBalance from './CurrentBalance';
import { ICurrentBalanceProps } from '../../../models/index';
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
  title: 'molecules/CurrentBalance',
  component: CurrentBalance,
} as Meta;

const Template: Story<ICurrentBalanceProps> = (args) => <CurrentBalance {...args} />;

export const Example = Template.bind({});
Example.args = {
  currentBalance: '25890',
};
