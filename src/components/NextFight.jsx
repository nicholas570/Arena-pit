import React from 'react';

import styles from '../css/NextFight.module.css';

function NextFight() {
  return (
    <div className={styles.container}>
      <h2 className={styles.bannerNextFight}>Next fight</h2>
      <div className={styles.fighter}>fighter 1</div>
      <div className={styles.versus}>VS</div>
      <div className={styles.fighter}>fighter 2</div>
    </div>
  );
}

export default NextFight;
