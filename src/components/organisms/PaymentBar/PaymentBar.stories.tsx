import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import PaymentBar from './PaymentBar';

export default {
  title: 'organism/PaymentBar',
  component: PaymentBar,
} as Meta;

const Template: Story = (args) => <PaymentBar {...args} />;

export const Example = Template.bind({});
Example.args = {};
