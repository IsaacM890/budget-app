import React from 'react';
import BriefCard from './BriefCard';
import { IBriefCardProps } from '../../../models/index';
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
  title: 'molecules/BriefCard',
  component: BriefCard,
} as Meta;

const Template: Story<IBriefCardProps> = (args) => <BriefCard {...args} />;

export const Example = Template.bind({});
Example.args = {
  title: 'Investments ',
  revenue: '$90,584',
  profit: '+5.08%',
};
