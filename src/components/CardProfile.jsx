import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from '../css/CardProfile.module.css';
import iconNotFavorite from '../assets/icons/favorite_border.svg';
import iconFavorite from '../assets/icons/favorite.svg';

const CardsProfile = ({ name, picture }) => {
  const [isFavourite, setisFavourite] = useState(false);
  return (
    <div className={styles.wrapperProfile}>
      <img
        className={styles.favourite}
        onClick={() => setisFavourite(!isFavourite)}
        src={isFavourite ? iconFavorite : iconNotFavorite}
      />
      <img
        className={styles.picture}
        src={picture || 'https://via.placeholder.com/200'}
        alt={name}
      />
      <h3 className={styles.name}>{name}</h3>
    </div>
  );
};

export default CardsProfile;

CardsProfile.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};
