import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Layout } from './Layout';

export default {
  title: 'Templates/Layout',
  component: Layout,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Layout>;

export const Default: ComponentStory<typeof Layout> = () => (
  <Layout>
    <div
      style={{
        height: '400px',
        width: '100%',
        backgroundColor: 'aliceblue',
      }}
    />
  </Layout>
);
