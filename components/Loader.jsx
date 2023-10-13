import React from 'react';
import styles from '@/scss/components/Loader.module.scss';

const Loader = () => {
  return (
    <div class={styles['lds-ellipsis']}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;
