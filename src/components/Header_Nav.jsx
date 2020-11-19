import React from 'react';
import { Link } from 'react-router-dom';

import money from '../assets/icons/money.svg';

import styles from '../css/HeaderNav.module.css';

function HeaderNav() {
  const token = JSON.parse(window.localStorage.getItem('Token'));

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
      <li>
        <img src={money} alt="money" className={styles.money} />
        {token}
      </li>
    </ul>
  );
}

export default HeaderNav;
