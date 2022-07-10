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

export const Default: ComponentStory<typeof Navbar> = () => (
  <Navbar
    children={[
      <Button key={'button-1'} label='Button 1' />,
      <Button key={'button-2'} label='Button 2' />,
      <Button key={'button-3'} label='Button 3' />,
    ]}
  />
);
