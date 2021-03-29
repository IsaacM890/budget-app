import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Icon from './Icon';
import { IIconProps } from '../../../models/index';
import { IconSize } from '../../../enums/index';

export default {
  title: 'atoms/Icon',
  component: Icon,
} as Meta;

const Template: Story<IIconProps> = (args) => <Icon {...args} />;

export const Xlarge = Template.bind({});
Xlarge.args = {
  size: IconSize.Xlarge,
  margin: '5px',
  padding: '5px',
};

export const large = Template.bind({});
large.args = {
  size: IconSize.large,
  margin: '5px',
  padding: '5px',
};

export const medium = Template.bind({});
medium.args = {
  size: IconSize.medium,
  margin: '5px',
  padding: '5px',
};

export const small = Template.bind({});
small.args = {
  size: IconSize.small,
  margin: '5px',
  padding: '5px',
};
