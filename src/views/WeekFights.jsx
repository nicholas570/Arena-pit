import React from 'react';

import Gladiators from '../Gladiators';

import Fight from '../components/Fight';

import styles from '../css/WeekFight.module.css';

function WeekFights() {
  const shuffle = (array) => array.sort(() => Math.random() - 0.5);

  const shuffledArray = shuffle(Gladiators);

  const half = Math.ceil(Gladiators.length / 2);

  const firstGlad = shuffledArray.splice(0, half);

  const secondGlad = shuffledArray.splice(-half);

  return (
    <div className={styles.container}>
      {firstGlad.map((glad, i) => (
        <Fight key={glad.id} fighter1={glad} fighter2={secondGlad[i]} />
      ))}
    </div>
  );
}

export default WeekFights;
