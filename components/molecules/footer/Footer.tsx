import React from 'react';

import styles from './footer.module.scss';

interface FooterProps {
  start?: JSX.Element;
  center?: JSX.Element;
  end?: JSX.Element;
  children?: JSX.Element;
}

export const Footer = ({ start, center, end, children }: FooterProps) => (
  <footer className={styles.container}>
    <div className={styles.slotsContainer}>
      <div className={styles.start}>{start}</div>
      <div className={styles.center}>{center}</div>
      <div className={styles.end}>{end}</div>
    </div>
    {children}
  </footer>
);
