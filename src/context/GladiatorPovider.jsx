import React, { createContext } from 'react';
import PropTypes from 'prop-types';

import listGladiateur from '../Gladiators';

export const ListGladiateur = createContext(listGladiateur);

export const GladiatorProvider = ({ children }) => {
  return (
    <ListGladiateur.Provider value={listGladiateur}>
      {children}
    </ListGladiateur.Provider>
  );
};

GladiatorProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
