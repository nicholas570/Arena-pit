import React from 'react';

import styles from '../css/HeaderLogo.module.css';
import logo from '../assets/icons/logo_header.png';

function HeaderLogo() {
  return (
    <div className={styles.container}>
      <img className={styles.imgLogo} src={logo} alt="logo" />
      ARENA PIT
    </div>
  );
}

export default HeaderLogo;
