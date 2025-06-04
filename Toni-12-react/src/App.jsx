import React, { useState } from 'react';
import ValueDisplay from '@components/ValueDisplay/ValueDisplay';
import styles from 'App.module.css';

const App = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className={styles.appContainer}>
      <h1 className={styles.appTitle}>Data Flow Interface</h1>
      <div className={styles.inputSection}>
        <input
          type="text"
          className={styles.inputField}
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter data here..."
        />
      </div>
      <ValueDisplay currentValue={inputValue} />
    </div>
  );
};

export default App;
