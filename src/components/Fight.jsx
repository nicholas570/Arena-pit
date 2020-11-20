import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import styles from '../css/Fight.module.css';
import Fighter from './Fighter';
import PopUp from './PopUp';
import { Wallet } from '../context/WalletProvider';

const averageSkill = (gladiator) => {
  const {
    combat,
    durability,
    intelligence,
    power,
    speed,
    strength,
  } = gladiator;
  return (combat + durability + intelligence + power + speed + strength) / 6;
};

function Fight({ fighter1, fighter2 }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(true);

  const [display, setdisplay] = useState(false);
  const [gladiatorCouple, setgladiatorCouple] = useState({});
  const [gladiatorWinner, setGladiatorWinner] = useState({});
  const { seWallet } = useContext(Wallet);

  const fetchBet = (idGladiator, idGladiator2) => {
    setdisplay(true);

    setgladiatorCouple({ gladiator1: idGladiator, gladiator2: idGladiator2 });
  };

  const startFight = (token) => {
    const { gladiator1, gladiator2 } = gladiatorCouple;

    const averageGladiator1 = averageSkill(gladiator1);
    const averageGladiator2 = averageSkill(gladiator2);

    const wallet = parseInt(localStorage.getItem('Token'), 10);

    seWallet(wallet - token);
    setdisplay(false);
    setActive(false);
    setGladiatorWinner(
      averageGladiator1 > averageGladiator2 ? gladiator1 : gladiator2
    );
  };

  const handleClick = (status) => {
    setOpen(status);
  };

  function Alert(props) {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div
      className={`${styles.container} ${
        // eslint-disable-next-line no-nested-ternary
        active
          ? styles.containerActive
          : gladiatorWinner === gladiatorCouple.gladiator1
          ? styles.containerWin
          : styles.containerLost
      }`}
    >
      <Fighter
        fighter={fighter1}
        handleActive={(idGladiator, idGladiator2 = fighter2) => {
          fetchBet(idGladiator, idGladiator2);
        }}
        winner={gladiatorWinner.id === fighter1.id}
      />
      <div className={styles.versus}>VS</div>
      <Fighter
        fighter={fighter2}
        handleActive={(idGladiator, idGladiator2 = fighter1) => {
          fetchBet(idGladiator, idGladiator2);
        }}
        winner={gladiatorWinner.id === fighter2.id}
      />
      {display && (
        <PopUp
          gladiator={gladiatorCouple.gladiator1}
          setdisplay={() => setdisplay(false)}
          startFight={(token) => startFight(token)}
          handleClick={() => handleClick(true)}
        />
      )}
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={
            gladiatorWinner === gladiatorCouple.gladiator1 ? 'success' : 'error'
          }
        >
          {gladiatorWinner === gladiatorCouple.gladiator1
            ? 'Well done! You won this game and you double your stake !'
            : `Sorry, you lost this bet and your stake...`}
        </Alert>
      </Snackbar>
    </div>
  );
}

Fight.propTypes = {
  fighter1: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    combat: PropTypes.number,
    durability: PropTypes.number,
    intelligence: PropTypes.number,
    power: PropTypes.number,
    speed: PropTypes.number,
    strength: PropTypes.number,
    picture: PropTypes.string,
  }).isRequired,
  fighter2: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    combat: PropTypes.number,
    durability: PropTypes.number,
    intelligence: PropTypes.number,
    power: PropTypes.number,
    speed: PropTypes.number,
    strength: PropTypes.number,
    picture: PropTypes.string,
  }).isRequired,
};
export default Fight;
