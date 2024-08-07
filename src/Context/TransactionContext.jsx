import React, { createContext, useState } from 'react';

const TransactionContext = createContext();

const TransactionProvider = ({ children }) => {
    const [transactions, setTransactions] = useState([]);
    const [balance, setBalance] = useState({ income: 0, expense: 0, savings: 0 });

    const updateBalance = (transaction, isDelete) => {
        setTransactions(prevTransactions => {
            const updatedTransactions = isDelete
                ? prevTransactions.filter(t => t.id !== transaction.id)
                : [...prevTransactions, transaction];
            calculateBalance(updatedTransactions);
            return updatedTransactions;
        });
    };

    const calculateBalance = (transactions) => {
        let newBalance = { income: 0, expense: 0, savings: 0 };
        transactions.forEach(tx => {
            if (tx.category === 'Income') newBalance.income += tx.amount;
            else if (tx.category === 'Expense') newBalance.expense += tx.amount;
            else if (tx.category === 'Savings') newBalance.savings += tx.amount;
        });
        setBalance(newBalance);
    };

    return (
        <TransactionContext.Provider value={{ transactions, balance, updateBalance }}>
            {children}
        </TransactionContext.Provider>
    );
};

export { TransactionContext, TransactionProvider };
