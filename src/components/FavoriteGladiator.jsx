import React from 'react';
import styles from '../css/FavoriteGladiator.module.css';

import listGladiator from '../Gladiators';

function FavoriteGladiator() {
  const randomId = Math.floor(Math.random() * 13) + 1;

  return (
    <div>
      {listGladiator.map((gladiator) =>
        gladiator.id === randomId ? (
          <div className={styles.favCard}>
            <div className={styles.favTitleBloc}>
              <h2 className={styles.favTitle}>EMPEROR&apos;S FAVORITE</h2>
            </div>
            <img
              className={styles.gladiatorPicture}
              src="https://via.placeholder.com/200"
              alt={gladiator.name}
            />
            <h3 className={styles.gladiatorName}>{gladiator.name}</h3>
            <p className={styles.gladiatorRating}>4.8/5</p>
          </div>
        ) : (
          ''
        )
      )}
    </div>
  );
}

export default FavoriteGladiator;
