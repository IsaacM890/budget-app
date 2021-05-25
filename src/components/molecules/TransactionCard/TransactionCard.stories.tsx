import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import TransactionCard from './TransactionCard';
import { ITransactionCardProps } from '../../../models/index';

export default {
  title: 'molecules/TransactionCard',
  component: TransactionCard,
} as Meta;

const Template: Story<ITransactionCardProps> = (args) => <TransactionCard {...args} />;

export const Example = Template.bind({});
Example.args = {
  paymentType: 'Expenses',
  paymentMethod: 'PayPal',
  cancelled: true,
  time: '08:12 pm',
  date: '4.21.21',
  currency: 'NIS',
  category: 'Grocery',
  company: 'Sunbit',
  amount: 1580,
  location: {
    country: 'Israel',
    city: 'Tel-Aviv',
    street: 'Rotchild',
    lat: 12.1568,
    lng: 482.5487,
  },
};
