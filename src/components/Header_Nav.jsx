import React from 'react';
import { Link } from 'react-router-dom';
import denariusIcon from '../assets/icons/coins.svg';

import styles from '../css/HeaderNav.module.css';

function HeaderNav() {
  const token = parseInt(localStorage.getItem('Token'), 10);
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
      <li className={styles.denarius}>
        <img
          className={styles.iconDenarius}
          src={denariusIcon}
          alt="denarius icon"
        />
        <p>{`${token} denarius`}</p>
      </li>
    </ul>
  );
}

export default HeaderNav;
