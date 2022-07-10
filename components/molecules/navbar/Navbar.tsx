import React from 'react';

import styles from './navbar.module.scss';

interface NavbarProps {
  children?: JSX.Element[];
}

export const Navbar = ({ children }: NavbarProps) => (
  <div className={styles.container}>{children}</div>
);
