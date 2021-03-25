import React from 'react';
import Loader from './Loader';
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
  title: 'atoms/Loader',
  component: Loader,
} as Meta;

const Template: Story = (args) => <Loader {...args}></Loader>;

export const Example = Template.bind({});
Example.args = {};
