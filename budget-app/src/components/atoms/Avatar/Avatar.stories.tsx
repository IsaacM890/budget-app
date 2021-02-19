import React from 'react';
import Avatar from './Avatar';
import { IAvatarProps } from '../../../models/index';
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
  title: 'atoms/Avatar',
  component: Avatar,
} as Meta;

const Template: Story<IAvatarProps> = (args) => <Avatar {...args} />;

export const xlAvatar = Template.bind({});
xlAvatar.args = {
  src: 'https://www.itu.cet.ac.il/uploads/2017/08/default-avatar-1.jpg',
  size: 'xl',
  alt: 'dog',
};

export const lgAvatar = Template.bind({});
lgAvatar.args = {
  src: 'https://www.itu.cet.ac.il/uploads/2017/08/default-avatar-1.jpg',
  size: 'lg',
  alt: 'dog',
};

export const mdAvatar = Template.bind({});
mdAvatar.args = {
  src: 'https://www.itu.cet.ac.il/uploads/2017/08/default-avatar-1.jpg',
  size: 'md',
  alt: 'dog',
};

export const smAvatar = Template.bind({});
smAvatar.args = {
  src: 'https://www.itu.cet.ac.il/uploads/2017/08/default-avatar-1.jpg',
  size: 'sm',
  alt: 'dog',
};

export const xsAvatar = Template.bind({});
xsAvatar.args = {
  src: 'https://www.itu.cet.ac.il/uploads/2017/08/default-avatar-1.jpg',
  size: 'xs',
  alt: 'dog',
};
