import React from 'react';
import NextFight from '../components/NextFight';

import styles from '../css/Home.module.css';

function Home() {
  return (
    <div className={styles.container}>
      <NextFight />
    </div>
  );
}

export default Home;
