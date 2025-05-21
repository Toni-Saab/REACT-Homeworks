import React from 'react';
import LanguageSwitcher from 'components/LanguageSwitcher/LanguageSwitcher';
import TextComponent from 'components/TextComponent/TextComponent';
import { LanguageContext } from 'context/LanguageContext';
import styles from './App.module.css';

const App = () => (
  <div className={styles.app}>
    <LanguageContext>
      <LanguageSwitcher />
      <TextComponent />
    </LanguageContext>
  </div>
);

export default App;