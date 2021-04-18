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
  src: 'https://png.pngtree.com/png-vector/20190909/ourmid/pngtree-outline-user-icon-png-image_1727916.jpg',
  size: 'xl',
};

export const lgAvatar = Template.bind({});
lgAvatar.args = {
  src: 'https://png.pngtree.com/png-vector/20190909/ourmid/pngtree-outline-user-icon-png-image_1727916.jpg',
  size: 'lg',
};

export const mdAvatar = Template.bind({});
mdAvatar.args = {
  src: 'https://png.pngtree.com/png-vector/20190909/ourmid/pngtree-outline-user-icon-png-image_1727916.jpg',
  size: 'md',
};

export const smAvatar = Template.bind({});
smAvatar.args = {
  src: 'https://png.pngtree.com/png-vector/20190909/ourmid/pngtree-outline-user-icon-png-image_1727916.jpg',
  size: 'sm',
};

export const xsAvatar = Template.bind({});
xsAvatar.args = {
  src: 'https://png.pngtree.com/png-vector/20190909/ourmid/pngtree-outline-user-icon-png-image_1727916.jpg',
  size: 'xs',
};
