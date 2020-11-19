import React from 'react';

import spqr from '../assets/icons/spqr.png';

import styles from '../css/About.module.css';

function About() {
  return (
    <div className={styles.about}>
      <h1 className={styles.aboutTitle}>About</h1>
      <div className={styles.textContainer}>
        <p className={styles.description}>
          ArenaPit is betting on the fights between gladiators.
        </p>
        <p className={styles.description}>
          From Brittany to the end of the Mediterranean sea, find the best
          fighters of the Roman world and the barbarian countries. Add your
          favorite warriors and find them in the arena!
        </p>
        <p className={styles.description}>
          Spend all your hard-earned pennies to serve the Emperor without
          worrying about the next day. Soon, maybe it will be your turn to be a
          part of the circus games, so you have nothing to lose!
        </p>
      </div>
      <img className={styles.spqr} src={spqr} alt="spqr" />
    </div>
  );
}

export default About;
