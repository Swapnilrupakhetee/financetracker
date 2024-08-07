import React, { useContext } from 'react';
import './Overview.css';
import Card from './Card';
import { CiWallet } from 'react-icons/ci';
import { HiOutlineArrowTopRightOnSquare } from 'react-icons/hi2';
import { BsBoxArrowInDownLeft } from 'react-icons/bs';
import { SettingContext } from '../Context/SettingsContext';
import { LanguagesContext } from '../Context/LanguageContext';
import { TransactionContext } from '../Context/TransactionContext';

const Overview = () => {
  const { darkMode } = useContext(SettingContext);
  const { language, translations } = useContext(LanguagesContext);
  const { transactions } = useContext(TransactionContext);

  const currentTranslations = translations[language] || {};

  // Calculate total income and total expense
  const totalIncome = transactions
    .filter(t => t.category === 'Income')
    .reduce((acc, t) => acc + t.amount, 0);
    
  const totalExpense = transactions
    .filter(t => t.category === 'Expense')
    .reduce((acc, t) => acc + t.amount, 0);

  // Calculate total balance as income - expenses
  const totalBalance = totalIncome - totalExpense;

  // Log calculated values for debugging
  console.log('Total Balance:', totalBalance);
  console.log('Total Income:', totalIncome);
  console.log('Total Expense:', totalExpense);

  // Define card values with placeholder percentages
  const cardValues = [
    {
      icon: <CiWallet size={30} />,
      title: 'balance',
      amount: totalBalance,
      percentage: '12%',
    },
    {
      icon: <BsBoxArrowInDownLeft size={30} />,
      title: 'income',
      amount: totalIncome,
      percentage: '9%',
    },
    {
      icon: <HiOutlineArrowTopRightOnSquare size={30} />,
      title: 'expense',
      amount: totalExpense,
      percentage: '9%',
    },
  ];

  return (
    <div className="overview-container">
      <div className="overview-content">
        <div className="overview-title">
          <div className={`overview-main-text${darkMode ? ' dark-mode' : ''}`}>
            {currentTranslations.overview}
          </div>
          <div className={`overview-sub-text${darkMode ? ' dark-mode' : ''}`}>
            {currentTranslations.transactionAmount}
          </div>
        </div>
        <div className="overview-stats">
          {cardValues.map((value, index) => (
            <div key={index}>
              <Card
                icon={value.icon}
                title={value.title}
                amount={value.amount}
                percentage={value.percentage}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Overview;
