import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from '../css/Fight.module.css';
import Fighter from './Fighter';

function Fight({ fighter1, fighter2, fetchBet }) {
  const [active, setActive] = useState(true);

  const handleActive = (idGladiator) => {
    setActive(false);
    fetchBet(idGladiator);
  };
  console.log(fighter1);
  console.log(fighter2);
  /*
  const fighter1state = (fighter1.combat + fighter1.durability + fighter1.intelligence + fighter1.power + fighter1.speed +fighter1.strength)/6 

  const fighter2state = (fighter2.combat + fighter2.durability + fighter2.intelligence + fighter2.power + fighter2.speed +fighter2.strength)/6  

  if(fighter1state > fighter2state) {
    return setIsWinner === true
  } else if (fighter1state < fighter2state)
  */
  return (
    <div
      className={`${styles.container} ${
        active ? styles.containerActive : styles.containerDisable
      }`}
    >
      <Fighter
        fighter={fighter1}
        handleActive={(idGladiator) => handleActive(idGladiator)}
      />
      <div className={styles.versus}>VS</div>
      <Fighter
        fighter={fighter2}
        handleActive={(idGladiator) => handleActive(idGladiator)}
      />
    </div>
  );
}

Fight.propTypes = {
  fighter1: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    combat: PropTypes.string,
    durability: PropTypes.string,
    intelligence: PropTypes.string,
    power: PropTypes.string,
    speed: PropTypes.string,
    strength: PropTypes.string,
    picture: PropTypes.string,
  }).isRequired,
  fighter2: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    combat: PropTypes.string,
    durability: PropTypes.string,
    intelligence: PropTypes.string,
    power: PropTypes.string,
    speed: PropTypes.string,
    strength: PropTypes.string,
    picture: PropTypes.string,
  }).isRequired,
  fetchBet: PropTypes.func.isRequired,
};
export default Fight;
