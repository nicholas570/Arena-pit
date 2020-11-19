import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from '../css/Fight.module.css';

function Fight({ fighter1, fighter2, fetchBet }) {
  const [active, setActive] = useState(true);
  const randomRating1 = Math.round((Math.random() * 4 + 1) * 100) / 100;
  const randomRating2 = Math.round((Math.random() * 4 + 1) * 100) / 100;

  return (
    <div
      className={`${styles.container} ${
        active ? styles.containerActive : styles.containerDisable
      }`}
      onClick={() => setActive(!active)}
    >
      <div>{`${fighter1.name} ${randomRating1}`}</div>
      <button onClick={() => fetchBet(fighter1.id)} type="button">
        BET
      </button>
      <div>VS</div>

      <div>{`${fighter2.name} ${randomRating2}`}</div>
      <button onClick={() => fetchBet(fighter2.id)} type="button">
        BET
      </button>
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
