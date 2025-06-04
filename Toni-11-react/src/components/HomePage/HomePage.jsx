import React from 'react';
import styles from './HomePage.module.css';

const HomePage = () => (
  <div className={styles.homePage}>
    <h1 className={styles.title}>Swedish Automotive Legacy</h1>
    <p className={styles.description}>
      Dive into the rich history and innovative future of Sweden's iconic automotive brands. From robust sedans to mind-bending hypercars, explore the engineering marvels that put Sweden on the global automotive map.
    </p>
  </div>
);

export default HomePage;