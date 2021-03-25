import React from 'react';
import PaymentList from './PaymentList';
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
  title: 'organism/PaymentList',
  component: PaymentList,
} as Meta;

const Template: Story = (args) => <PaymentList {...args} />;

export const paymentList = Template.bind({});
paymentList.args = {
  payment: 'Deposit from atl',
  paymentdate: '5 march,18:33',
  amount: '-1,470',
  currency: 'USD',
};
