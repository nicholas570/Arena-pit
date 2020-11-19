import React from 'react';

import Gladiators from '../Gladiators';

import Fight from '../components/Fight';

function WeekFights() {
  const shuffle = (array) => array.sort(() => Math.random() - 0.5);
  const shuffledArray = shuffle(Gladiators);
  const half = Math.ceil(Gladiators.length / 2);

  const firstHalf = Gladiators.splice(0, half);
  const secondHalf = Gladiators.splice(-half);
  console.log(firstHalf);

  return (
    <div>
      <Fight />
    </div>
  );
}

export default WeekFights;
