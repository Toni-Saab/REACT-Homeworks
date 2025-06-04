import React, { useState, useEffect, useRef } from 'react';
import styles from './ValueDisplay.module.css';

const ValueDisplay = ({ currentValue }) => {
  const [previousValue, setPreviousValue] = useState('');
  const pausedRef = useRef(false);
  const timerRef = useRef(null);
  const lastCompleteRef = useRef('');

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);

    if (currentValue !== lastCompleteRef.current) {
      if (pausedRef.current) {
        setPreviousValue(lastCompleteRef.current);
        pausedRef.current = false;
      }
      timerRef.current = setTimeout(() => {
        pausedRef.current = true;
        lastCompleteRef.current = currentValue;
      }, 1000);
    }

    return () => clearTimeout(timerRef.current);
  }, [currentValue]);

  const displayCurrent = currentValue === '' ? 'Awaiting input...' : currentValue;

  return (
    <div className={styles.displayContainer}>
      <div className={styles.valueCard}>
        <span className={styles.cardLabel}>Current:</span>
        <span className={styles.cardData}>{displayCurrent}</span>
      </div>
      <div className={styles.valueCard}>
        <span className={styles.cardLabel}>Previous:</span>
        <span className={styles.cardData}>{previousValue}</span>
      </div>
    </div>
  );
};

export default ValueDisplay;
