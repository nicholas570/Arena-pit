import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from '../css/Fight.module.css';
import Fighter from './Fighter';

function Fight({ fighter1, fighter2, fetchBet, gladiatorWinner }) {
  const [active, setActive] = useState(true);

  const handleActive = () => {
    // setActive(false);
  };

  return (
    <div
      className={`${styles.container} ${
        active ? styles.containerActive : styles.containerDisable
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
  fetchBet: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  gladiatorWinner: PropTypes.object.isRequired,
};
export default Fight;
