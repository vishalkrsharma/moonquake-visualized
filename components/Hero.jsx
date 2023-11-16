import React from 'react';
import Link from 'next/link';

import styles from '@/scss/components/Hero.module.scss';

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.title}>
        <h1 className={styles.title__primary}>MOONQUAKE VISUALIZED</h1>
        <h2 className={styles.title__secondary}>VISUALIZING THE MOON SINCE 1969</h2>
      </div>
      <div className={styles.links}>
        <Link
          href='/simulation'
          className={styles.links__link}
        >
          &lt; Visit Moon &gt;
        </Link>
      </div>
    </div>
  );
};

export default Hero;
