import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Gladiators from '../Gladiators';

import styles from '../css/FighterDetails.module.css';

function FighterDetails() {
  const [gladiator, setgladiator] = useState({});
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
        <div className={styles.profil}>
          <img
            className={styles.imageFighter}
            src="https://cdn-media.rtl.fr/cache/WhjOcNWyILbkM5QVwIBkhA/880v587-0/online/image/2018/1102/7795414354_gladiator-avait-ete-recompense-de-5-oscars-lors-de-sa-sortie.jpg"
            alt={gladiator.name}
          />
          <h2 className={styles.name}>{gladiator.name}</h2>
        </div>
        <div className={styles.infos}>
          <h2>Stats</h2>
          <ul className={styles.statsList}>
            <li>
              Combat:
              {gladiator.combat}
            </li>
            <li>
              Durability:
              {gladiator.durability}
            </li>
            <li>
              Intelligence:
              {gladiator.intelligence}
            </li>
            <li>
              Power:
              {gladiator.power}
            </li>
            <li>
              Speed:
              {gladiator.speed}
            </li>
            <li>
              Strength:
              {gladiator.strength}
            </li>
          </ul>
          <p className={styles.rating}>Rating: /5</p>
        </div>
      </div>
    </div>
  );
}

export default FighterDetails;
