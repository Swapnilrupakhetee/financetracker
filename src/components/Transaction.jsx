import React, { useContext } from 'react'
import './Transaction.css'
import TransactionTable from './TransactionTable'
import { SettingContext } from '../Context/SettingsContext';
const Transaction = () => {
  
  const { currency, setCurrency, language, setLanguage, darkMode, setDarkMode } = useContext(SettingContext);
  return (
    <div className="transaction-container">
        <div className="transaction-content">
            <div className={`transaction-title1 ${darkMode?'dark-mode':''}`}>
                Transactions
            </div>
            <div className="transaction-table-container">
                <TransactionTable/>
            </div>
        </div>
    </div>
  )
}

export default Transaction