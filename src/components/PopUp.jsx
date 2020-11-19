import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

import { ListGladiateur } from '../context/GladiatorPovider';

import iconClose from '../assets/icons/close.svg';
import iconRemove from '../assets/icons/remove.svg';
import iconAdd from '../assets/icons/add.svg';
import styles from '../css/PopUp.module.css';

const PopUp = ({ setdisplay, id }) => {
  const listGladiateur = useContext(ListGladiateur);
  const [bet, setbet] = useState(10);

  const gladiator = listGladiateur.find((gladiateur) => gladiateur.id === id);

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <button
          onClick={() => setdisplay()}
          className={styles.close}
          type="button"
        >
          <img src={iconClose} alt="icon close" />
        </button>
        <div className={styles.nameFighter}>{gladiator.name}</div>
        <p>Denarius available: 1000</p>
        <div>
          <button
            className={styles.iconButton}
            onClick={() => setbet(Math.max(bet, 1) - 1)}
            type="button"
          >
            <img src={iconRemove} alt="" />
          </button>
          <span className={styles.bet}>{bet}</span>
          <button
            className={styles.iconButton}
            onClick={() => setbet(bet + 1)}
            type="button"
          >
            <img src={iconAdd} alt="icon add" />
          </button>
        </div>
        <button className={styles.betButton} type="button">
          To bet!
        </button>
      </div>
    </div>
  );
};

export default PopUp;

PopUp.propTypes = {
  setdisplay: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};
