import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';

import { ListGladiateur } from '../context/GladiatorPovider';

import iconNotFavorite from '../assets/icons/favorite_border.svg';
import iconFavorite from '../assets/icons/favorite.svg';
import palme from '../assets/icons/palmeor.png';
import combat from '../assets/icons/Combat.webp';
import durability from '../assets/icons/Durability.webp';
import intelligence from '../assets/icons/Intelligence.webp';
import power from '../assets/icons/Power.webp';
import speed from '../assets/icons/Speed.webp';
import strength from '../assets/icons/Strength.webp';

import styles from '../css/FighterDetails.module.css';

function FighterDetails() {
  const listGladiator = useContext(ListGladiateur);
  const [gladiator, setgladiator] = useState({});
  const [isFavourite, setisFavourite] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const currentGladiator = listGladiator.find(
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
          <h2 className={styles.statsTitle}>Stats</h2>
          <ul className={styles.statsList}>
            <li className={styles.stats}>
              <img className={styles.abilities} src={combat} alt="combat" />
              {`Combat :
              ${gladiator.combat}`}
            </li>
            <li className={styles.stats}>
              <img
                className={styles.abilities}
                src={durability}
                alt="durability"
              />
              {`Durability :
              ${gladiator.durability}`}
            </li>
            <li className={styles.stats}>
              <img
                className={styles.abilities}
                src={intelligence}
                alt="intelligence"
              />
              {`Intelligence : ${gladiator.intelligence}`}
            </li>
            <li className={styles.stats}>
              <img className={styles.abilities} src={power} alt="power" />
              {`Power :
              ${gladiator.power}`}
            </li>
            <li className={styles.stats}>
              <img className={styles.abilities} src={speed} alt="speed" />
              {`Speed:
              ${gladiator.speed}`}
            </li>
            <li className={styles.stats}>
              <img className={styles.abilities} src={strength} alt="strength" />
              {`Strength :
              ${gladiator.strength}`}
            </li>
          </ul>
          <p className={styles.rating}>{`Rating : ${gladiator.rating}/5`}</p>
        </div>
      </div>
    </div>
  );
}

export default FighterDetails;
