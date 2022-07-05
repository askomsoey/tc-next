import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header } from './Header';

export default {
  title: 'Example/Header',
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Header>;

export const LoggedIn: ComponentStory<typeof Header> = () => (
  <Header
    start={<h1 slot='start'>Company Name</h1>}
    center={<h2 slot='center'>Welcome Message</h2>}
    end={
      <div slot='end' className='header-menu'>
        <p>Home</p>
        <p>About</p>
        <p>Login</p>
      </div>
    }
  />
);
