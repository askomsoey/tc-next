import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Navbar } from './Navbar';
import { Button } from '../../atoms/button/Button';

export default {
  title: 'Molucules/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Navbar>;

export const Default: ComponentStory<typeof Navbar> = () => <Navbar />;
