import React, { useContext } from 'react';

import { ListGladiateur } from '../context/GladiatorPovider';

import styles from '../css/NextFight.module.css';

function NextFight() {
  const Gladiators = useContext(ListGladiateur);

  const firstGladiatorId = Math.floor(Math.random() * 13) + 1;
  let secondGladiatorId = Math.floor(Math.random() * 13) + 1;

  if (secondGladiatorId === firstGladiatorId) {
    secondGladiatorId = Math.floor(Math.random() * 13) + 1;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.bannerNextFight}>Next fight</h2>
      {Gladiators.map((gladiator) =>
        firstGladiatorId === gladiator.id ? (
          <div key={gladiator.id} className={styles.fighter}>
            {gladiator.name}
          </div>
        ) : (
          ''
        )
      )}

      <div className={styles.versus}>VS</div>
      {Gladiators.map((gladiator) =>
        secondGladiatorId === gladiator.id ? (
          <div key={gladiator.id} className={styles.fighter}>
            {gladiator.name}
          </div>
        ) : (
          ''
        )
      )}
    </div>
  );
}

export default NextFight;
