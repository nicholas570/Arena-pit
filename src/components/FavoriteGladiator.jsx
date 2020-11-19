import React from 'react';
import styles from '../css/FavoriteGladiator.module.css';

function FavoriteGladiator() {
  return (
    <div className={styles.favCard}>
      <div className={styles.favTitleBloc}>
        <h2 className={styles.favTitle}>EMPEROR&apos;S FAVORITE</h2>
      </div>
      <img className={styles.gladiatorPicture} src="" alt="Maximus" />
      <h3 className={styles.gladiatorName}>MAXIMUS</h3>
      <p className={styles.gladiatorRating}>4.8/5</p>
    </div>
  );
}

export default FavoriteGladiator;
