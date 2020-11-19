import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import denariusIcon from '../assets/icons/coins.svg';

import DenariusContext from '../context/DenariusContext';

import styles from '../css/HeaderNav.module.css';

function HeaderNav() {
  const { denarius } = useContext(DenariusContext);
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
      <div className={styles.denarius}>
        <img
          className={styles.iconDenarius}
          src={denariusIcon}
          alt="denarius icon"
        />
        <p>{`${denarius} denarius`}</p>
      </div>
    </ul>
  );
}

export default HeaderNav;
