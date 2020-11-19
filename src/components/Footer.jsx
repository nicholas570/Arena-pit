import React from 'react';

import styles from '../css/Footer.module.css';

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.development}>
        <h3 className={styles.titleFooter}>Development team</h3>
        <ul className={styles.footerLists}>
          <li>
            <a className={styles.github} href="https://github.com/anais-ctnt">
              Anaïs Cotinet
            </a>
          </li>
          <li>
            <a
              className={styles.github}
              href="https://github.com/FlorianMilcendeau"
            >
              Florian Milcendeau
            </a>
          </li>
          <li>
            <a className={styles.github} href="https://github.com/nicholas570">
              Nicolas Mercier
            </a>
          </li>
          <li>
            <a
              className={styles.github}
              href="https://github.com/Florian-Pesset"
            >
              Florian Pesset
            </a>
          </li>
        </ul>
      </div>

      <div className={styles.contacUs}>
        <h3 className={styles.titleFooter}>Contact Us</h3>
        <ul>
          <li>Adress: Piazza del Colosseo, 1, 00184 Roma RM, Roma Empire</li>
          <li>Tel: 0666-666-666</li>
          <li>Mail: coliseum@contactbrutus.rom</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
