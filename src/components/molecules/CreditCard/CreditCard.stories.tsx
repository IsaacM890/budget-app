import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import CreditCard from './CreditCard';
import { ICreditCardProps } from '../../../models/index';

export default {
  title: 'molecules/CreditCard',
  component: CreditCard,
} as Meta;

const Template: Story<ICreditCardProps> = (args) => <CreditCard {...args} />;

export const Example = Template.bind({});
Example.args = {
  f_name: 'Ian ',
  l_name: 'Kelley',
  last4Digits: 8459,
  exp_month: 12,
  exp_year: 25,
};
