import React, { useState, useContext, useEffect } from 'react';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import { ListGladiateur } from '../context/GladiatorPovider';

import Fight from '../components/Fight';

import styles from '../css/WeekFight.module.css';
import PopUp from '../components/PopUp';

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
  const [open, setOpen] = useState(false);
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

  const startFight = () => {
    const { gladiator1, gladiator2 } = gladiatorCouple;

    const averageGladiator1 = averageSkill(gladiator1);
    const averageGladiator2 = averageSkill(gladiator2);

    setdisplay(false);
    setGladiatorWinner(
      averageGladiator1 > averageGladiator2 ? gladiator1 : gladiator2
    );
  };

  const handleClick = (status) => {
    setOpen(status);
  };

  function Alert(props) {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
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
          startFight={() => startFight()}
          handleClick={() => handleClick(true)}
        />
      )}
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={
            gladiatorWinner === gladiatorCouple.gladiator1 ? 'success' : 'error'
          }
        >
          {gladiatorWinner === gladiatorCouple.gladiator1
            ? 'Well done! You won this game and you double your stake !'
            : `Sorry, you lost this bet and your stake...`}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default WeekFights;
