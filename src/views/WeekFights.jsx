import React, { useState, useContext, useEffect } from 'react';

import { ListGladiateur } from '../context/GladiatorPovider';

import Fight from '../components/Fight';
import PopUp from '../components/PopUp';

import styles from '../css/WeekFight.module.css';

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

function WeekFights() {
  const Gladiators = useContext(ListGladiateur);
  const [display, setdisplay] = useState(false);
  const [gladiatorWinner, setGladiatorWinner] = useState({});
  const [gladiator, setgladiator] = useState({
    firstGlad: [],
  });
  const [gladiatorCouple, setgladiatorCouple] = useState({});

  const shuffle = (array) => [...array].sort(() => Math.random() - 0.5);

  useEffect(() => {
    const shuffledArray = shuffle(Gladiators);

    const half = Math.ceil(Gladiators.length / 2);

    setgladiator({
      firstGlad: shuffledArray.splice(0, half),
      secondGlad: shuffledArray.splice(-half),
    });
  }, []);

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

  return (
    <div className={styles.container}>
      {gladiator.firstGlad.map((glad, i) => (
        <Fight
          fetchBet={(idGladiator, idGladiator2) => {
            fetchBet(idGladiator, idGladiator2);
          }}
          key={glad.id}
          fighter1={glad}
          fighter2={gladiator.secondGlad[i]}
          gladiatorWinner={gladiatorWinner}
        />
      ))}
      {display && (
        <PopUp
          gladiator={gladiatorCouple.gladiator1}
          setdisplay={() => setdisplay(false)}
          startFight={(token) => startFight(token)}
        />
      )}
    </div>
  );
}

export default WeekFights;
