import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Pagination from 'rc-pagination';
import langLocal from 'rc-pagination/es/locale/en_US';
import 'rc-pagination/assets/index.css';

import listGladiator from '../Gladiators';

import CardsProfile from './CardProfile';

import styles from '../css/AllGladiator.module.css';

const AllGladiator = ({ gladiators }) => {
  const [totale, settotale] = useState(0);
  const [cursor, setcursor] = useState({ currentPage: 1, start: 0, end: 6 });

  useEffect(() => {
    settotale(listGladiator.length);
  }, []);

  const handlePagination = (current, pageSize) => {
    setcursor({
      currentPage: current,
      start: (current - 1) * pageSize,
      end: current * pageSize,
    });
  };

  const { currentPage, start, end } = cursor;
  return (
    <section className={styles.allGladiator}>
      <div className={styles.wrapperProfile}>
        {gladiators ? (
          gladiators
            .slice(start, end)
            .map((gladiator) => (
              <CardsProfile
                key={gladiator.id}
                name={gladiator.name}
                id={gladiator.id}
                image={gladiator.image}
              />
            ))
        ) : (
          <p>Loading</p>
        )}
      </div>
      <Pagination
        onChange={handlePagination}
        current={currentPage}
        pageSize={6}
        total={totale}
        locale={langLocal}
        style={{ alignSelf: 'flex-end' }}
      />
    </section>
  );
};

AllGladiator.propTypes = {
  gladiators: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default AllGladiator;
