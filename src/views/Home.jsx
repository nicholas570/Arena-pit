import React from 'react';
import FavoriteGladiator from '../components/FavoriteGladiator';
import NextFight from '../components/NextFight';

import styles from '../css/Home.module.css';

function Home() {
  return (
    <div className={styles.container}>
      <NextFight />
      <FavoriteGladiator />
    </div>
  );
}

export default Home;
