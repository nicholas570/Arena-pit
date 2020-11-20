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
