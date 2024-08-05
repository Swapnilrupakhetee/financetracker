import React from 'react'
import Dashboardtop from '../components/Dashboardtop'
import Overview from '../components/Overview'
import TransactionTable from '../components/TransactionTable'
import Transaction from '../components/Transaction'

const Home = () => {
  return (
    <div className='home-container'>
        <Dashboardtop/>
        <Overview/>
        <Transaction/>
    </div>
  )
}

export default Home