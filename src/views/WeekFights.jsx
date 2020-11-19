import React, { useState, useContext } from 'react';

import { ListGladiateur } from '../context/GladiatorPovider';

import Fight from '../components/Fight';

import styles from '../css/WeekFight.module.css';
import PopUp from '../components/PopUp';

function WeekFights() {
  const Gladiators = useContext(ListGladiateur);
  const [display, setdisplay] = useState(false);
  const [id, setid] = useState(0);

  const shuffle = (array) => [...array].sort(() => Math.random() - 0.5);

  const shuffledArray = shuffle(Gladiators);

  const half = Math.ceil(Gladiators.length / 2);

  const firstGlad = shuffledArray.splice(0, half);

  const secondGlad = shuffledArray.splice(-half);

  const fetchBet = (idGladiator) => {
    setdisplay(true);
    setid(idGladiator);
  };

  return (
    <div className={styles.container}>
      {firstGlad.map((glad, i) => (
        <Fight
          fetchBet={(idGladiator) => fetchBet(idGladiator)}
          key={glad.id}
          fighter1={glad}
          fighter2={secondGlad[i]}
        />
      ))}
      {display && <PopUp id={id} setdisplay={() => setdisplay(false)} />}
    </div>
  );
}

export default WeekFights;
