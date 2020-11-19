import React from 'react';

import styles from '../css/FighterDetails.module.css';

function FighterDetails() {
  return (
    <div>
      <h2>Infos sur le fighter</h2>
      <div className={styles.fighterCard}>
        <div className={styles.profil}>Image + nom</div>
        <div className={styles.infos}>infos</div>
      </div>
    </div>
  );
}

export default FighterDetails;
