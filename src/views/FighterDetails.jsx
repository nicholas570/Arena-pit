import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Gladiators from '../Gladiators';

import iconNotFavorite from '../assets/icons/favorite_border.svg';
import iconFavorite from '../assets/icons/favorite.svg';
import palme from '../assets/icons/palmeor.png';

import styles from '../css/FighterDetails.module.css';

function FighterDetails() {
  const [gladiator, setgladiator] = useState({});
  const [isFavourite, setisFavourite] = useState(false);

  const randomRating = Math.round((Math.random() * 4 + 1) * 100) / 100;

  const { id } = useParams();

  useEffect(() => {
    const currentGladiator = Gladiators.find(
      (element) => element.id === parseInt(id, 10)
    );

    setgladiator(currentGladiator);
  }, []);
  return (
    <div className={styles.fighterDetails}>
      <div className={styles.fighterCard}>
        <img
          className={styles.favourite}
          onClick={() => setisFavourite(!isFavourite)}
          src={isFavourite ? iconFavorite : iconNotFavorite}
          alt="favourite"
        />
        <div className={styles.profil}>
          <img
            className={styles.imageFighter}
            src={gladiator.picture}
            alt={gladiator.name}
          />
          <img className={styles.palme} src={palme} alt="alt" />

          <h2 className={styles.name}>{gladiator.name}</h2>
        </div>
        <div className={styles.infos}>
          <h2>Stats</h2>
          <ul className={styles.statsList}>
            <li className={styles.stats}>
              Combat:
              {gladiator.combat}
            </li>
            <li className={styles.stats}>
              Durability:
              {gladiator.durability}
            </li>
            <li className={styles.stats}>
              Intelligence:
              {gladiator.intelligence}
            </li>
            <li className={styles.stats}>
              Power:
              {gladiator.power}
            </li>
            <li className={styles.stats}>
              Speed:
              {gladiator.speed}
            </li>
            <li className={styles.stats}>
              Strength:
              {gladiator.strength}
            </li>
          </ul>
          <p className={styles.rating}>Rating: {randomRating}/5</p>
        </div>
      </div>
    </div>
  );
}

export default FighterDetails;
