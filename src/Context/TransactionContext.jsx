import React, { createContext, useState, useContext } from 'react';

// Create context
const TransactionContext = createContext();

// Provider component
const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState({ income: 0, expense: 0, savings: 0 });

  // Function to update balance and transactions
  const updateBalance = (transaction, isDelete) => {
    setTransactions((prevTransactions) => {
      let updatedTransactions;
      if (isDelete) {
        updatedTransactions = prevTransactions.filter((t) => t.id !== transaction.id);
      } else {
        updatedTransactions = prevTransactions.filter((t) => t.id !== transaction.id).concat(transaction);
      }

      calculateBalance(updatedTransactions);
      return updatedTransactions;
    });
  };

  // Function to calculate balance
  const calculateBalance = (transactions) => {
    let newBalance = { income: 0, expense: 0, savings: 0 };

    transactions.forEach((tx) => {
      if (tx.category === 'Income') {
        newBalance.income += tx.amount;
      } else if (tx.category === 'Expense') {
        newBalance.expense += tx.amount; // Sum expenses
      } else if (tx.category === 'Savings') {
        newBalance.savings += tx.amount;
      }
    });

    // Calculate total balance as income - expenses + savings
    const totalBalance = newBalance.income - newBalance.expense + newBalance.savings;
    
    setBalance({ ...newBalance, total: totalBalance });
  };

  return (
    <TransactionContext.Provider value={{ transactions, balance, updateBalance }}>
      {children}
    </TransactionContext.Provider>
  );
};

export { TransactionContext, TransactionProvider };
