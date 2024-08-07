import React, { useState } from 'react';
import Overview from './Overview';
import Transactions from '../pages/Transactions';

const Dashboard = () => {
  const [balance, setBalance] = useState(1655);
  const [income, setIncome] = useState(900);
  const [expense, setExpense] = useState(450);
  const [saving, setSaving] = useState(300); // Example initial value

  const updateBalance = (transaction, isEdit) => {
    const amount = parseFloat(transaction.amount);

    if (isEdit) {
      // Handle edit logic, which would involve finding the difference and updating accordingly
    } else {
      if (transaction.category === 'Income') {
        setBalance(prevBalance => prevBalance + amount);
        setIncome(prevIncome => prevIncome + amount);
      } else if (transaction.category === 'Expense') {
        setBalance(prevBalance => prevBalance - amount);
        setExpense(prevExpense => prevExpense + amount);
      } else if (transaction.category === 'Savings') {
        setBalance(prevBalance => prevBalance + amount);
        setSaving(prevSaving => prevSaving + amount);
      }
    }
  };

  return (
    <div>
      <Overview balance={balance} income={income} expense={expense} saving={saving} />
      <Transactions updateBalance={updateBalance} />
    </div>
  );
};

export default Dashboard;
