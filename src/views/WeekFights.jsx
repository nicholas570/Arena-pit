import React, { useState, useContext, useEffect } from 'react';

import { ListGladiateur } from '../context/GladiatorPovider';

import Fight from '../components/Fight';

import styles from '../css/WeekFight.module.css';

function WeekFights() {
  const Gladiators = useContext(ListGladiateur);
  const [gladiator, setgladiator] = useState({
    firstGlad: [],
  });
  const [hasTriggered, setHasTriggered] = useState(false);

  const shuffle = (array) => [...array].sort(() => Math.random() - 0.5);

  useEffect(() => {
    const shuffledArray = shuffle(Gladiators);

    const half = Math.ceil(Gladiators.length / 2);

    setgladiator({
      firstGlad: shuffledArray.splice(0, half),
      secondGlad: shuffledArray.splice(-half),
    });
  }, []);

  return (
    <div className={styles.container}>
      {gladiator.firstGlad.map((glad, i) => (
        <Fight
          key={glad.id}
          fighter1={glad}
          fighter2={gladiator.secondGlad[i]}
          hasTriggered={hasTriggered}
        />
      ))}
    </div>
  );
}

export default WeekFights;
