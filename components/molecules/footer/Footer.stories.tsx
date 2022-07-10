import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Footer } from './Footer';
import { Button } from '../../atoms/button/Button';
import { Navbar } from '../navbar/Navbar';

export default {
  title: 'Molucules/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Footer>;

export const Default: ComponentStory<typeof Footer> = () => (
  <Footer
    start={<p>footer start slot</p>}
    center={<p>footer center slot</p>}
    end={<p>footer end slot</p>}
    children={
      <div
        style={{ width: '100%', height: '1rem', backgroundColor: 'firebrick' }}
      />
    }
  />
);
