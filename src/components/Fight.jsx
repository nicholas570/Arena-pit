import React from 'react';
import PropTypes from 'prop-types';

import styles from '../css/Fight.module.css';

function Fight({ fighter1, fighter2 }) {
  const randomRating1 = Math.round((Math.random() * 4 + 1) * 100) / 100;
  const randomRating2 = Math.round((Math.random() * 4 + 1) * 100) / 100;

  return (
    <div className={styles.container}>
      <div>{`${fighter1.name} ${randomRating1}`}</div>
      <div>VS</div>
      <div>{`${fighter2.name} ${randomRating2}`}</div>
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
