import { createContext, useState } from 'react';

export const LocaleHub = createContext(['en', () => {}]);

export const LanguageContext = ({ children }) => {
  const linguisticState = useState('de');
  return (
    <LocaleHub.Provider value={linguisticState}>
      {children}
    </LocaleHub.Provider>
  );
};