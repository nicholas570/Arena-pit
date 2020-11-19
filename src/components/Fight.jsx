import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from '../css/Fight.module.css';

function Fight({ fighter1, fighter2 }) {
  const [active, setActive] = useState(true);
  const randomRating1 = Math.round((Math.random() * 4 + 1) * 100) / 100;
  const randomRating2 = Math.round((Math.random() * 4 + 1) * 100) / 100;

  return (
    <div
      className={`${styles.container} ${
        active ? styles.containerActive : styles.containerDisable
      }`}
    >
      <div className={styles.wrapperFighter}>
        <img className={styles.fighter} src={fighter1.picture} alt="fighter" />
        <div>{`${fighter1.name} ${randomRating1}`}</div>
        <button
          type="button"
          className={styles.btn}
          onClick={() => setActive(false)}
        >
          BET
        </button>
      </div>
      <div>VS</div>
      <div className={styles.wrapperFighter}>
        <img className={styles.fighter} src={fighter2.picture} alt="fighter" />
        <div>{`${fighter2.name} ${randomRating2}`}</div>
        <button
          type="button"
          className={styles.btn}
          onClick={() => setActive(false)}
        >
          BET
        </button>
      </div>
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
};
export default Fight;
