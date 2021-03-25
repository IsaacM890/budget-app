import React from 'react';
import ListItem from './ListItem';
import { Story, Meta } from '@storybook/react/types-6-0';
import Icon from '../../atoms/Icon/Icon';
import Typography from '../../atoms/Typography/Typography';
import { FontSize, IconSize } from '../../../enums/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';

export default {
  title: 'molecules/ListItem',
  component: ListItem,
} as Meta;

const Template: Story = (args) => (
  <ListItem {...args}>
    <Icon margin={'5px 0'} padding={'5px 0'} size={IconSize.medium}>
      <FontAwesomeIcon icon={faChartLine} />
    </Icon>
    <Typography fontsize={FontSize.caption}>ListItem</Typography>
  </ListItem>
);

export const Example = Template.bind({});
Example.args = {};
