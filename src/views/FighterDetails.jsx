import React from 'react';
import Gladiators from '../Gladiators';

import styles from '../css/FighterDetails.module.css';

function FighterDetails() {
  return (
    <div className={styles.fighterDetails}>
      <div className={styles.fighterCard}>
        <div className={styles.profil}>
          <img
            className={styles.imageFighter}
            src="https://cdn-media.rtl.fr/cache/WhjOcNWyILbkM5QVwIBkhA/880v587-0/online/image/2018/1102/7795414354_gladiator-avait-ete-recompense-de-5-oscars-lors-de-sa-sortie.jpg"
            alt={Gladiators[0].name}
          />
          <h2>{Gladiators[0].name}</h2>
          <p>Rating: /5</p>
        </div>
        <div className={styles.infos}>
          <h2>Stats</h2>
          <ul className={styles.statsList}>
            <li>Combat: {Gladiators[0].combat}</li>
            <li>Durability: {Gladiators[0].durability}</li>
            <li>Intelligence: {Gladiators[0].intelligence}</li>
            <li>Power: {Gladiators[0].power}</li>
            <li>Speed: {Gladiators[0].speed}</li>
            <li>Strength: {Gladiators[0].strength}</li>
          </ul>
          <p className={styles.rating}>Rating: /5</p>
        </div>
      </div>
    </div>
  );
}

export default FighterDetails;
