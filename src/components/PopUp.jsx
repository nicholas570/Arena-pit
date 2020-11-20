import React, { useState, useContext, useEffect, createRef } from 'react';
import PropTypes from 'prop-types';

import { ListGladiateur } from '../context/GladiatorPovider';

import iconClose from '../assets/icons/close.svg';
import iconRemove from '../assets/icons/remove.svg';
import iconAdd from '../assets/icons/add.svg';
import styles from '../css/PopUp.module.css';
import { Wallet } from '../context/WalletProvider';

const PopUp = ({ setdisplay, gladiator, startFight, handleClick }) => {
  const overlayRef = createRef(null);
  const listGladiateur = useContext(ListGladiateur);
  const [bet, setbet] = useState(10);
  const [token, setToken] = useState(window.localStorage.getItem('Token') - 10);
  const { walletToken } = useContext(Wallet);

  const glad = listGladiateur.find(
    (gladiateur) => gladiateur.id === gladiator.id
  );

  useEffect(() => {
    overlayRef.current.style.top = `${window.scrollY}px`;
    document.body.style.overflowY = 'hidden';

    return () => {
      document.body.style.overflowY = 'initial';
    };
  }, []);

  const handleIncrement = () => {
    setToken(Math.max(token, 1) - 1);

    if (token > 0) {
      setbet(bet + 1);
    }
  };

  const handleDecrement = () => {
    setbet(Math.max(bet, 1) - 1);
    if (bet > 0) {
      setToken(parseInt(token, 10) + 1);
    }
  };

  return (
    <div ref={overlayRef} className={styles.overlay}>
      <div className={styles.popup}>
        <button
          onClick={() => setdisplay()}
          className={styles.close}
          type="button"
        >
          <img src={iconClose} alt="icon close" />
        </button>
        {walletToken ? (
          <>
            <div className={styles.nameFighter}>{glad.name}</div>
            <p>
              Denarius available:
              {token}
            </p>
            <div>
              <button
                className={styles.iconButton}
                onClick={() => handleDecrement()}
                type="button"
              >
                <img src={iconRemove} alt="" />
              </button>
              <span className={styles.bet}>{bet}</span>
              <button
                className={styles.iconButton}
                onClick={() => handleIncrement()}
                type="button"
              >
                <img src={iconAdd} alt="icon add" />
              </button>
            </div>
            <button
              onClick={() => {
                startFight(bet);
                handleClick(true);
              }}
              className={styles.betButton}
              type="button"
            >
              Bet!
            </button>
          </>
        ) : (
          <div className={styles.messageNotAvailable}>
            No more denarius avalaible
          </div>
        )}
      </div>
    </div>
  );
};

export default PopUp;

PopUp.propTypes = {
  setdisplay: PropTypes.func.isRequired,
  gladiator: PropTypes.arrayOf(PropTypes.object).isRequired,
  startFight: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};
