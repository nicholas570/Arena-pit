import React from 'react';
import AllGladiator from '../components/AllGladiator';

import FavoriteGladiator from '../components/FavoriteGladiator';
import NextFight from '../components/NextFight';

import styles from '../css/Home.module.css';

function Home() {
  return (
    <div className={styles.container}>
      <NextFight />
      <div className={styles.top}>
        <h2 className={styles.wrapperProfileTitle}>Top Gladiators</h2>
      </div>
      <div className={styles.wrapperFighters}>
        <AllGladiator />
        <FavoriteGladiator />
      </div>
    </div>
  );
}

export default Home;
