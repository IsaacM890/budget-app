import React from 'react';
import PaymentBar from './PaymentBar';
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
  title: 'organism/PaymentBar',
  component: PaymentBar,
} as Meta;

const Template: Story = (args) => <PaymentBar {...args}></PaymentBar>;

export const Example = Template.bind({});
Example.args = {};
