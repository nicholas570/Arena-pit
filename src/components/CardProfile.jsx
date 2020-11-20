import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import styles from '../css/CardProfile.module.css';
import iconNotFavorite from '../assets/icons/favorite_border.svg';
import iconFavorite from '../assets/icons/favorite.svg';

const CardsProfile = ({ name, image, id }) => {
  const [isFavourite, setisFavourite] = useState(false);
  return (
    <div className={styles.wrapperProfile}>
      <img
        className={styles.favourite}
        onClick={() => setisFavourite(!isFavourite)}
        src={isFavourite ? iconFavorite : iconNotFavorite}
      />
      <Link to={`/fighterdetails/${id}`}>
        <img className={styles.picture} src={image} alt={name} />
      </Link>
      <h3 className={styles.name}>{name}</h3>
    </div>
  );
};

export default CardsProfile;

CardsProfile.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
