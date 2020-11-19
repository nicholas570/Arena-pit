import React from 'react';
import styles from '../css/FavoriteGladiator.module.css';
import palme from '../assets/icons/palmeor.png';

import listGladiator from '../Gladiators';

function FavoriteGladiator() {
  const randomId = Math.floor(Math.random() * 13) + 1;
  const randomRating = Math.round((Math.random() * 4 + 1) * 100) / 100;

  return (
    <div>
      {listGladiator.map((gladiator) =>
        gladiator.id === randomId ? (
          <div key={gladiator.id} className={styles.favCard}>
            <div className={styles.favTitleBloc}>
              <h2 className={styles.favTitle}>EMPEROR&apos;S FAVORITE</h2>
            </div>
            <img
              className={styles.gladiatorPicture}
              src={gladiator.picture}
              alt={gladiator.name}
            />
            <img className={styles.palme} src={palme} alt="alt" />

            <h3 className={styles.gladiatorName}>{gladiator.name}</h3>
            <p className={styles.gladiatorRating}>{`${randomRating} /5`}</p>
          </div>
        ) : (
          ''
        )
      )}
    </div>
  );
}

export default FavoriteGladiator;
