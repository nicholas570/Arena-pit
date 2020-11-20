import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from '../css/Fight.module.css';
import Fighter from './Fighter';
import PopUp from './PopUp';

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
  const [active, setActive] = useState(true);
  const [display, setdisplay] = useState(false);
  const [gladiatorCouple, setgladiatorCouple] = useState({});
  const [gladiatorWinner, setGladiatorWinner] = useState({});

  const fetchBet = (idGladiator, idGladiator2) => {
    setdisplay(true);
    setgladiatorCouple({ gladiator1: idGladiator, gladiator2: idGladiator2 });
  };

  const startFight = () => {
    const { gladiator1, gladiator2 } = gladiatorCouple;

    const averageGladiator1 = averageSkill(gladiator1);
    const averageGladiator2 = averageSkill(gladiator2);

    setdisplay(false);
    setActive(false);
    setGladiatorWinner(
      averageGladiator1 > averageGladiator2 ? gladiator1 : gladiator2
    );
  };

  return (
    <div
      className={`${styles.container} ${
        !active ? styles.containerActive : styles.containerDisable
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
          startFight={() => startFight()}
        />
      )}
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
