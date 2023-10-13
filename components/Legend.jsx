import React from 'react';

import styles from '@/scss/components/Legend.module.scss';
import Image from 'next/image';

const Legend = () => {
  return (
    <div className={styles.legendContainer}>
      <div className={styles.top}>+1000m</div>
      <div className={styles.bottom}>-1000m</div>
      <Image
        width='40'
        height='250'
        className={styles.image}
        src='/assets/legend.png'
        alt='Legend Image'
      />
    </div>
  );
};

export default Legend;
