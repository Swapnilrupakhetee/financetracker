import React from 'react'
import './Transaction.css'
import TransactionTable from './TransactionTable'
const Transaction = () => {
  return (
    <div className="transaction-container">
        <div className="transaction-content">
            <div className="transaction-title">
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