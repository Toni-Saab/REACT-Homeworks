import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className={styles.navigation}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link
            to="/"
            className={`${styles.navLink} ${location.pathname === '/' ? styles.navLinkActive : ''}`}
          >
            Home
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link
            to="/articles"
            className={`${styles.navLink} ${location.pathname.startsWith('/articles') ? styles.navLinkActive : ''}`}
          >
            Articles
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;