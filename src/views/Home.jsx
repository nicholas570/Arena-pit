import React from 'react';

import CardsProfile from '../components/CardProfile';

import listGladiator from '../Gladiators';

function Home() {
  return (
    <div>
      {listGladiator.map((gladiator) => (
        <CardsProfile key={gladiator.id} name={gladiator.name} />
      ))}
    </div>
  );
}

export default Home;
