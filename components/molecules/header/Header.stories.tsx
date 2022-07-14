import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header } from './Header';
import { Button } from '../../atoms/button/Button';
import { Navbar } from '../navbar/Navbar';

export default {
  title: 'Molecules/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Header>;

export const Default: ComponentStory<typeof Header> = () => (
  <Header
    start={<h1>Company Name</h1>}
    center={<h2>Welcome Message</h2>}
    end={
      <Navbar>
        <Button label='Home' type='transparent' />
        <Button label='About' type='transparent' />
        <Button label='Login' type='transparent' />
      </Navbar>
    }
  />
);
