import React from 'react';

import listGladiator from '../Gladiators';
import AllGladiator from '../components/AllGladiator';
import FavoriteGladiator from '../components/FavoriteGladiator';
import NextFight from '../components/NextFight';

import styles from '../css/Home.module.css';

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.homeBanner}>
        <div className={styles.layerBanner} />
        <h1>Welcome to Arena Pit !</h1>
        <p>Who will make the best bet ?</p>
      </div>
      <NextFight />
      <div className={styles.wrapperFighters}>
        <div>
          <h2 className={styles.wrapperProfileTitle}>Top Gladiators</h2>
          <AllGladiator gladiators={listGladiator} />
        </div>
        <FavoriteGladiator />
      </div>
    </div>
  );
}

export default Home;
