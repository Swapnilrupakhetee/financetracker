import React, { useContext } from 'react'
import './Transaction.css'
import TransactionTable from './TransactionTable'
import { SettingContext } from '../Context/SettingsContext';
import { LanguagesContext } from '../Context/LanguageContext';
const Transaction = () => {
  const { language, translations } = useContext(LanguagesContext);
  const currentTranslations = translations[language] || {};
  const { currency, setCurrency, setLanguage, darkMode, setDarkMode } = useContext(SettingContext);

  
  return (
    <div className="transaction-container">
        <div className="transaction-content">
            <div className={`transaction-title1 ${darkMode?'dark-mode':''}`}>
                {translations[language].transactions}
            </div>
            <div className="transaction-table-container">
                <TransactionTable/>
            </div>
        </div>
    </div>
  )
}

export default Transaction