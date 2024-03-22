import React from 'react';
import Link from 'next/link';

import styles from '@/scss/components/Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.navbarContainer}>
      <Link
        className={styles.brand}
        href='/'
      >
        Home
      </Link>
      <Link
        className={styles.link}
        href='/about'
      >
        About
      </Link>
    </nav>
  );
};

export default Navbar;
