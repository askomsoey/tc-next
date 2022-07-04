import React from 'react';

import './header.scss';

interface HeaderProps {  }

export const Header = ({}: HeaderProps) => (
  <header>
    <slot name='start' />
    <slot name='center'/>
    <slot name='end' />
  </header>
);
