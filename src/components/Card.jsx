import React from 'react'
import './Card.css'
import { CiWallet } from "react-icons/ci";
import { FaArrowTrendUp } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import balance from '../assets/balance.jpg'
const Card = ({icon,title,amount,percentage}) => {
  return (
    <div className="card-container">
        <div className="card-content">
            <div className="card-top">
                <div className="card-icons">
                    {icon}
                    <BsThreeDotsVertical />
                </div>
                <div className="card-title">{title}</div>
            </div>
            <div className="card-bottom">
                <div className="card-amount">Rs.{amount}</div>
                <div className="card-percentage">{percentage} <FaArrowTrendUp /></div>
            </div>
        </div>
    </div>
  )
}

export default Card