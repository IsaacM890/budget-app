import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Loader from './Loader';

export default {
  title: 'atoms/Loader',
  component: Loader,
} as Meta;

const Template: Story = (args) => <Loader {...args} />;

export const Example = Template.bind({});
Example.args = {};
