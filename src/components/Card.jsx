import React, { useContext } from 'react'
import './Card.css'
import { CiWallet } from "react-icons/ci";
import { FaArrowTrendUp } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import balance from '../assets/balance.jpg'
import { SettingContext } from '../Context/SettingsContext';
const Card = ({icon,title,amount,percentage}) => {
    const{darkMode}=useContext(SettingContext)
  return (
    <div className="card-container">
        <div className={`card-content ${darkMode?'dark-mode':''}`}>
            <div className={`card-top ${darkMode?'dark-mode':''}`}>
                <div className="card-icons">
                    {icon}
                    <BsThreeDotsVertical />
                </div>
                <div className="card-title">{title}</div>
            </div>
            <div className={`card-bottom ${darkMode?'dark-mode':''}`}>
                <div className={`card-amount ${darkMode?'dark-mode':''}`}>Rs.{amount}</div>
                <div className={`card-percentage ${darkMode?'dark-mode':''}`}>{percentage} <FaArrowTrendUp /></div>
            </div>
        </div>
    </div>
  )
}

export default Card