// Card.jsx
import React, { useContext } from 'react';
import './Card.css';
import { FaArrowTrendUp } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import { SettingContext } from '../Context/SettingsContext';
import { LanguagesContext } from '../Context/LanguageContext';
import { CurrenciesContext } from '../Context/CurrencyContext';

const Card = ({ icon, title, amount, percentage }) => {
  const { currencies, currency } = useContext(CurrenciesContext);
  const { darkMode } = useContext(SettingContext);
  const { language, translations } = useContext(LanguagesContext);

  // Safe access to translations and currencies
  const translatedTitle = translations[language]?.[title] || title;
  const currencySymbol = currencies[currency]?.symbol || '$';

  return (
    <div className={`card-container ${darkMode ? 'dark-mode' : ''}`}>
      <div className={`card-content ${darkMode ? 'dark-mode' : ''}`}>
        <div className={`card-top ${darkMode ? 'dark-mode' : ''}`}>
          <div className="card-icons">
            {icon}
            <BsThreeDotsVertical />
          </div>
          <div className="card-title">{translatedTitle}</div>
        </div>
        <div className={`card-bottom ${darkMode ? 'dark-mode' : ''}`}>
          <div className={`card-amount ${darkMode ? 'dark-mode' : ''}`}>
            {currencySymbol} {amount.toFixed(2)}
          </div>
          <div className={`card-percentage ${darkMode ? 'dark-mode' : ''}`}>
            <FaArrowTrendUp />
            <span>{percentage}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
