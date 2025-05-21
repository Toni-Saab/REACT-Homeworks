import React from 'react';
import UserProfile from 'components/UserProfile/UserProfile';
import styles from './App.module.css';

const App = () => (
  <div className={styles.app}>
    <UserProfile />
  </div>
);

export default App;