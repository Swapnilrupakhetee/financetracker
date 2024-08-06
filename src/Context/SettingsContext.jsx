import React, { createContext, useState, useEffect } from 'react';

// Create a context
const SettingContext = createContext();

const SettingsContextProvider = ({ children }) => {
  const [currency, setCurrency] = useState(localStorage.getItem('currency') || 'USD');
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'English');
  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('darkMode')) || false);

  useEffect(() => {
    localStorage.setItem('currency', currency);
  }, [currency]);

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language; // Update HTML lang attribute
  }, [language]);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <SettingContext.Provider value={{ currency, setCurrency, language, setLanguage, darkMode, setDarkMode }}>
      {children}
    </SettingContext.Provider>
  );
};

export { SettingContext, SettingsContextProvider };
