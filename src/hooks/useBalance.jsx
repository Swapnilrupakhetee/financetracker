import { useMemo } from 'react';
import { useContext } from 'react';
import { TransactionContext } from '../Context/TransactionContext';

const useBalance = () => {
  const { transactions } = useContext(TransactionContext);

  const { totalIncome, totalExpense, totalBalance } = useMemo(() => {
    const income = transactions
      .filter(t => t.category === 'Income')
      .reduce((acc, t) => acc + t.amount, 0);

    const expense = transactions
      .filter(t => t.category === 'Expense')
      .reduce((acc, t) => acc + t.amount, 0);

    const balance = income - expense;

    return {
      totalIncome: income,
      totalExpense: expense,
      totalBalance: balance,
    };
  }, [transactions]);

  return { totalIncome, totalExpense, totalBalance };
};

export default useBalance;
