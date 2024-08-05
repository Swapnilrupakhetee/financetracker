import React from 'react'
import Dashboardtop from '../components/Dashboardtop'
import Overview from '../components/Overview'

const Home = () => {
  return (
    <div className='home-container'>
        <Dashboardtop/>
        <Overview/>
    </div>
  )
}

export default Home