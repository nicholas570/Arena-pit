import React from 'react';

import styles from '../css/Header.module.css';
import HeaderLogo from './Header_Logo';
import HeaderNav from './Header_Nav';

function Header() {
  return (
    <header className={styles.container}>
      <HeaderLogo />
      <HeaderNav />
    </header>
  );
}

export default Header;
