import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import ListItem from './ListItem';
import Icon from '../../atoms/Icon/Icon';
import Typography from '../../atoms/Typography/Typography';
import { IconSize } from '../../../enums/index';
import { fontSize } from '../../../style/theme/theme';

export default {
  title: 'molecules/ListItem',
  component: ListItem,
} as Meta;

const Template: Story = (args) => (
  <ListItem {...args}>
    <Icon size={IconSize.medium}>
      <FontAwesomeIcon icon={faChartLine} />
    </Icon>
    <Typography fontsize={fontSize.caption}>ListItem</Typography>
  </ListItem>
);

export const Example = Template.bind({});
Example.args = {};
