import React, { useContext } from 'react';
import { LocaleHub } from 'context/LanguageContext';
import styles from './LanguageSwitcher.module.css';

const LanguageSwitcher = () => {
  const [currentLocale, setLang] = useContext(LocaleHub);

  const activateLang = (code) => setLang(code);

  return (
    <div className={styles.toggleUnit}>
      <button
        className={`${styles.langBtn} ${currentLocale === 'en' ? styles['langBtn--active'] : ''}`}
        onClick={() => activateLang('en')}
      >
        <span role="img" aria-label="English Flag" style={{ fontSize: '1.5rem' }}>🇬🇧</span>
      </button>
      <button
        className={`${styles.langBtn} ${currentLocale === 'de' ? styles['langBtn--active'] : ''}`}
        onClick={() => activateLang('de')}
      >
        <span role="img" aria-label="German Flag" style={{ fontSize: '1.5rem' }}>🇩🇪</span>
      </button>
    </div>
  );
};

export default LanguageSwitcher;