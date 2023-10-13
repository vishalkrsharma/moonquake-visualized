import React from 'react';
import Link from 'next/link';

import styles from '@/scss/components/Hero.module.scss';

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.title}>
        <div className={styles.title__primary}>MOONQUAKE VISUALIZED</div>
        <div className={styles.title__secondary}>VISUALIZING THE MOON SINCE 1969</div>
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
