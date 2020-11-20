import React from 'react';
import PropTypes from 'prop-types';

import palme from '../assets/icons/palmeor.png';

import styles from '../css/Fighter.module.css';

function Fighter({ fighter, handleActive, winner }) {
  return (
    <>
      <div
        className={`${
          winner ? styles.wrapperFighterWinner : styles.wrapperFighter
        }`}
      >
        <img
          className={`${winner ? styles.fighterWinner : styles.fighter}`}
          src={fighter.picture}
          alt="fighter"
        />
        <img
          className={`${winner ? styles.palme : styles.loser}`}
          src={palme}
          alt="alt"
        />
        <div>{`${fighter.name} ${fighter.rating}`}</div>
        <button
          type="button"
          className={styles.btn}
          onClick={() => handleActive(fighter)}
        >
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
    rating: PropTypes.number,
    picture: PropTypes.string,
  }).isRequired,
  handleActive: PropTypes.func.isRequired,
  winner: PropTypes.bool.isRequired,
};
export default Fighter;
