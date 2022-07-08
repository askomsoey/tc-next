import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header } from './Header';
import { Button } from '../../atoms/button/Button';

export default {
  title: 'Molucules/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Header>;

export const LoggedIn: ComponentStory<typeof Header> = () => (
  <Header
    start={<h1>Company Name</h1>}
    center={<h2>Welcome Message</h2>}
    end={
      <div className='header-menu'>
        <Button label='Home' type='transparent' />
        <Button label='About' type='transparent' />
        <Button label='Login' type='transparent' />
      </div>
    }
  />
);
