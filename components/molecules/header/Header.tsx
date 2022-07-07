import React from 'react';

import styles from './header.module.scss';

interface HeaderProps {
  start: JSX.Element,
  center: JSX.Element,
  end: JSX.Element,
}

export const Header = ({ start, center, end }: HeaderProps) => (
  <header className={styles.container}>
    <div className={styles.start}>{start}</div>
    <div className={styles.center}>{center}</div>
    <div className={styles.end}>{end}</div>
  </header>
);
