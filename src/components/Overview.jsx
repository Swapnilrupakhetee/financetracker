// Overview.js
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

  const totalBalance = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);
  const totalIncome = transactions.filter(t => t.category === 'Income').reduce((acc, t) => acc + t.amount, 0);
  const totalExpense = transactions.filter(t => t.category === 'Expense').reduce((acc, t) => acc + t.amount, 0);

  // You can adjust these percentages based on your needs
  const balancePercentage = '12%';
  const incomePercentage = '9%';
  const expensePercentage = '9%';

  const cardValues = [
    {
      icon: <CiWallet size={30} />,
      title: 'balance',
      amount: totalBalance,
      percentage: balancePercentage,
    },
    {
      icon: <BsBoxArrowInDownLeft size={30} />,
      title: 'income',
      amount: totalIncome,
      percentage: incomePercentage,
    },
    {
      icon: <HiOutlineArrowTopRightOnSquare size={30} />,
      title: 'expense',
      amount: totalExpense,
      percentage: expensePercentage,
    },
  ];

  return (
    <div className="overview-container">
      <div className="overview-content">
        <div className="overview-title">
          <div className={`overview-main-text${darkMode ? 'dark-mode' : ''}`}>{currentTranslations.overview}</div>
          <div className={`overview-sub-text${darkMode ? 'dark-mode' : ''}`}>{currentTranslations.transactionAmount}</div>
        </div>
        <div className="overview-stats">
          {cardValues.map((value, index) => (
            <div key={index}>
              <Card icon={value.icon} title={value.title} amount={value.amount} percentage={value.percentage} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Overview;
