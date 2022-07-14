import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UserSummary } from './UserSummary';

export default {
  title: 'Molecules/UserSummary',
  component: UserSummary,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof UserSummary>;

export const Default: ComponentStory<typeof UserSummary> = () => (
  <UserSummary user={{}} />
);
