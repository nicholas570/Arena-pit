import React, { useState, useContext, useEffect } from 'react';

import { ListGladiateur } from '../context/GladiatorPovider';

import Fight from '../components/Fight';

import styles from '../css/WeekFight.module.css';
import PopUp from '../components/PopUp';

function WeekFights() {
  const Gladiators = useContext(ListGladiateur);
  const [display, setdisplay] = useState(false);
  const [gladiator, setgladiator] = useState({
    firstGlad: [],
  });
  const [id, setid] = useState(0);

  const shuffle = (array) => [...array].sort(() => Math.random() - 0.5);

  useEffect(() => {
    const shuffledArray = shuffle(Gladiators);

    const half = Math.ceil(Gladiators.length / 2);

    setgladiator({
      firstGlad: shuffledArray.splice(0, half),
      secondGlad: shuffledArray.splice(-half),
    });
  }, []);

  const fetchBet = (idGladiator) => {
    setdisplay(true);
    setid(idGladiator);
  };

  return (
    <div className={styles.container}>
      {gladiator.firstGlad.map((glad, i) => (
        <Fight
          fetchBet={(idGladiator) => fetchBet(idGladiator)}
          key={glad.id}
          fighter1={glad}
          fighter2={gladiator.secondGlad[i]}
        />
      ))}
      {display && <PopUp id={id} setdisplay={() => setdisplay(false)} />}
    </div>
  );
}

export default WeekFights;
