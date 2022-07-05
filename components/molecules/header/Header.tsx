import React from 'react';

import './header.scss';

interface HeaderProps {
  start: JSX.Element,
  center: JSX.Element,
  end: JSX.Element,
}

export const Header = ({ start, center, end }: HeaderProps) => (
  <header>
    <div className='start'>{start}</div>
    <div className='center'>{center}</div>
    <div className='end'>{end}</div>
  </header>
);
