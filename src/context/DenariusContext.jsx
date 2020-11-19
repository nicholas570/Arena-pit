import React from 'react';

const DenariusContext = React.createContext({
  denarius: 1000,
  setDenarius: () => {},
});

export default DenariusContext;
