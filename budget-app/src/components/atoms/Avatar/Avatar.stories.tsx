import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Avatar from './Avatar';
import { IAvatarProps } from '../../../models/index';

export default {
  title: 'atoms/Avatar',
  component: Avatar,
} as Meta;

const Template: Story<IAvatarProps> = (args) => <Avatar {...args} />;

export const xlAvatar = Template.bind({});
xlAvatar.args = {
  src: 'https://www.itu.cet.ac.il/uploads/2017/08/default-avatar-1.jpg',
  size: 'xl',
};

export const lgAvatar = Template.bind({});
lgAvatar.args = {
  src: 'https://www.itu.cet.ac.il/uploads/2017/08/default-avatar-1.jpg',
  size: 'lg',
};

export const mdAvatar = Template.bind({});
mdAvatar.args = {
  src: 'https://www.itu.cet.ac.il/uploads/2017/08/default-avatar-1.jpg',
  size: 'md',
};

export const smAvatar = Template.bind({});
smAvatar.args = {
  src: 'https://www.itu.cet.ac.il/uploads/2017/08/default-avatar-1.jpg',
  size: 'sm',
};

export const xsAvatar = Template.bind({});
xsAvatar.args = {
  src: 'https://www.itu.cet.ac.il/uploads/2017/08/default-avatar-1.jpg',
  size: 'xs',
};
