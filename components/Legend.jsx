import React from 'react';

import styles from '@/scss/components/Legend.module.scss';
import legend from '@/assets/legend.png';
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
        src={legend.src}
        alt='Legend Image'
      />
    </div>
  );
};

export default Legend;
