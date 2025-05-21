import React, { useContext } from 'react';
import { LocaleHub } from 'context/LanguageContext';
import styles from './TextComponent.module.css';

const TextComponent = () => {
  const [currentLocale] = useContext(LocaleHub);

  const linguisticMap = {
    en: 'Observe the displayed text!',
    de: 'Beobachte den angezeigten Text!',
  };

  return (
    <div className={styles.displayArea}>
      <p className={styles.textContent}>
        {linguisticMap[currentLocale] || 'No locale data'}
      </p>
    </div>
  );
};

export default TextComponent;