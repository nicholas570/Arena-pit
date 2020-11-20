import React, { useState, useContext, useEffect } from 'react';

import { ListGladiateur } from '../context/GladiatorPovider';

import Fight from '../components/Fight';
import PopUp from '../components/PopUp';

import styles from '../css/WeekFight.module.css';
<<<<<<< HEAD

const averageSkill = (gladiator) => {
  const {
    combat,
    durability,
    intelligence,
    power,
    speed,
    strength,
  } = gladiator;
  return (combat + durability + intelligence + power + speed + strength) / 6;
};
=======
>>>>>>> bac90d3691fd8303a69042c3e0244c09671220c3

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

<<<<<<< HEAD
  const fetchBet = (idGladiator, idGladiator2) => {
    setdisplay(true);
    setgladiatorCouple({ gladiator1: idGladiator, gladiator2: idGladiator2 });
  };

  const startFight = (token) => {
    const { gladiator1, gladiator2 } = gladiatorCouple;

    const averageGladiator1 = averageSkill(gladiator1);
    const averageGladiator2 = averageSkill(gladiator2);

    const wallet = parseInt(localStorage.getItem('Token'), 10);

    localStorage.setItem('Token', wallet - token);

    setdisplay(false);
    setGladiatorWinner(
      averageGladiator1 > averageGladiator2 ? gladiator1 : gladiator2
    );
  };

=======
>>>>>>> bac90d3691fd8303a69042c3e0244c09671220c3
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
<<<<<<< HEAD
      {display && (
        <PopUp
          gladiator={gladiatorCouple.gladiator1}
          setdisplay={() => setdisplay(false)}
          startFight={(token) => startFight(token)}
        />
      )}
=======
>>>>>>> bac90d3691fd8303a69042c3e0244c09671220c3
    </div>
  );
}

export default WeekFights;
