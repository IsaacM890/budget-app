import React from 'react';
import Main from './Main';
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
  title: 'organism/Main',
  component: Main,
} as Meta;

const Template: Story = (args) => <Main {...args}></Main>;

export const Example = Template.bind({});
Example.args = {};
