import React from 'react';
import CatImage from './components/CatImage/CatImage';
import styles from './App.module.css';

export default function App() {
  return (
    <div className={styles.appContainer}>
      <CatImage />
    </div>
  );
};
