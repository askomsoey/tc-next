import React from 'react';
import styles from './layout.module.scss';
import { Button } from '../../atoms/button/Button';
import { Header } from '../../molecules/header/Header';
import { Navbar } from '../../molecules/navbar/Navbar';
import { Footer } from '../../molecules/footer/Footer';

interface LayoutProps {
  isLoggedIn?: boolean;
  children?: JSX.Element | JSX.Element[];
}

export const Layout = ({ isLoggedIn = false, children = [] }: LayoutProps) => (
  <div className={styles.container}>
    <Header
      start={
        <p
          style={{
            height: '3rem',
            width: '4rem',
            backgroundColor: 'orange',
            borderRadius: '50%',
            margin: '.5rem 0',
            textAlign: 'center',
            verticalAlign: 'middle',
          }}
        >
          TODO LOGO
        </p>
      }
      center={<h3>Welcome to Ms. Tamang's Business Website</h3>}
      end={
        <Navbar>
          <Button label='Home' type='transparent' />
          <Button label='About' type='transparent' />
          {isLoggedIn ? (
            <Button label='Log Out' type='transparent' />
          ) : (
            <Button label='Login' type='transparent' />
          )}
        </Navbar>
      }
    />
    {children}
    <Footer>
      <p style={{ paddingLeft: '0.5rem' }}>
        © Tsering Choekey Tamang, {new Date().getFullYear()}
      </p>
    </Footer>
  </div>
);
