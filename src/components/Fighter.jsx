import React, { useState } from 'react';
import PropTypes from 'prop-types';

import palme from '../assets/icons/palmeor.png';

import styles from '../css/Fighter.module.css';

function Fighter({ fighter, handleActive }) {
  const [isWinner, setIsWinner] = useState(true);

  const randomRating = Math.round((Math.random() * 4 + 1) * 100) / 100;

  return (
    <>
      <div
        className={`${
          isWinner ? styles.wrapperFighterWinner : styles.wrapperFighter
        }`}
      >
        <img
          className={`${isWinner ? styles.fighterWinner : styles.fighter}`}
          src={fighter.picture}
          alt="fighter"
        />
        <img
          className={`${isWinner ? styles.palme : styles.loser}`}
          src={palme}
          alt="alt"
        />
        <div>{`${fighter.name} ${randomRating}`}</div>
        <button type="button" className={styles.btn} onClick={handleActive}>
          BET
        </button>
      </div>
    </>
  );
}

Fighter.propTypes = {
  fighter: PropTypes.shape({
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
  handleActive: PropTypes.func.isRequired,
};
export default Fighter;
