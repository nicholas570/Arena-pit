import React, { useState, useEffect, useContext } from 'react';

import Pagination from 'rc-pagination';
import langLocal from 'rc-pagination/es/locale/en_US';
import 'rc-pagination/assets/index.css';

import { ListGladiateur } from '../context/GladiatorPovider';
import CardsProfile from './CardProfile';

import styles from '../css/AllGladiator.module.css';

const AllGladiator = () => {
  const [totale, settotale] = useState(0);
  const [cursor, setcursor] = useState({ currentPage: 1, start: 0, end: 6 });
  const listGladiator = useContext(ListGladiateur);

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
      <Pagination
        className={styles.pagination}
        onChange={handlePagination}
        current={currentPage}
        pageSize={6}
        total={totale}
        locale={langLocal}
        style={{ alignSelf: 'flex-end' }}
      />
      <div className={styles.wrapperProfile}>
        {listGladiator.slice(start, end).map((gladiator) => (
          <CardsProfile
            key={gladiator.id}
            name={gladiator.name}
            id={gladiator.id}
            image={gladiator.picture}
          />
        ))}
      </div>
    </section>
  );
};

export default AllGladiator;
