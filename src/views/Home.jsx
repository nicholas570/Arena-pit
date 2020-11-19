import React, { useState, useEffect } from 'react';
import axios from 'axios';

import AllGladiator from '../components/AllGladiator';

import FavoriteGladiator from '../components/FavoriteGladiator';
import NextFight from '../components/NextFight';

import styles from '../css/Home.module.css';

function Home() {
  const [gladiators, setGladiators] = useState();

  useEffect(() => {
    axios
      .get('https://randomuser.me/api/?results=13')
      .then(({ data: { results } }) => {
        const result = results.map((profil, i) => {
          return { ...listGladiator[i], image: profil.picture.large };
        });
        setGladiators(result);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

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
