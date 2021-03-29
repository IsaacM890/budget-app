import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Typography from './Typography';
import { ITypographyProps } from '../../../models/index';
import { FontSize } from '../../../enums/index';

export default {
  title: 'atoms/Typography',
  component: Typography,
  argTypes: {
    color: { control: 'color' },
  },
} as Meta;

const Template: Story<ITypographyProps> = (args) => <Typography {...args}>Typography</Typography>;

export const heading1 = Template.bind({});
heading1.args = {
  fontsize: FontSize.heading1,
  fontweight: 'bold',
};

export const heading2 = Template.bind({});
heading2.args = {
  fontsize: FontSize.heading2,
  fontweight: 'bold',
};

export const heading3 = Template.bind({});
heading3.args = {
  fontsize: FontSize.heading3,
  fontweight: 'bold',
};

export const caption = Template.bind({});
caption.args = {
  fontsize: FontSize.caption,
  fontweight: '',
};

export const subtitle = Template.bind({});
subtitle.args = {
  fontsize: FontSize.subtitle,
  fontweight: '',
};
