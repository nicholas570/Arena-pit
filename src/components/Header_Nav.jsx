import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../css/HeaderNav.module.css';

function HeaderNav() {
  return (
    <ul className={styles.container}>
      <Link to="/" className={styles.item}>
        <li>HOME</li>
      </Link>
      <Link to="/fights" className={styles.item}>
        <li>FIGHTS OF THE WEEK</li>
      </Link>
      <Link to="/about" className={styles.item}>
        <li>ABOUT</li>
      </Link>
    </ul>
  );
}

export default HeaderNav;
