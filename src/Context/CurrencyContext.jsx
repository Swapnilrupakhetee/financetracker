import React, { createContext, useState, useEffect } from 'react';

export const CurrenciesContext = createContext();

const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState(localStorage.getItem('currency') || 'USD');

  useEffect(() => {
    localStorage.setItem('currency', currency);
  }, [currency]);

  const currencies = {
    USD: { code: 'USD', label: 'US Dollar', symbol: '$' },
    EUR: { code: 'EUR', label: 'Euro', symbol: '€' },
    GBP: { code: 'GBP', label: 'British Pound', symbol: '£' },
    INR: { code: 'INR', label: 'Indian Rupee', symbol: '₹' },
    NPR: { code: 'NPR', label: 'Nepalese Rupee', symbol: '₨' },
  };

  return (
    <CurrenciesContext.Provider value={{ currency, setCurrency, currencies }}>
      {children}
    </CurrenciesContext.Provider>
  );
};

export default CurrencyProvider;
