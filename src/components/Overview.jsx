import React from 'react'
import './Overview.css'
import Card from './Card'
import { CiWallet } from "react-icons/ci";
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";
import { BsBoxArrowInDownLeft } from "react-icons/bs";

const Overview = () => {
  const cardValues=[
    {icon:<CiWallet size={30} />,
    title:'Balance',
    amount:'1655',
    percentage:'12%'
    }
    ,
    {icon:<BsBoxArrowInDownLeft size={30} />,
    title:'Income',
    amount:'900',
    percentage:'9%'
    }
    ,
    {icon:<HiOutlineArrowTopRightOnSquare size={30} />,
    title:'Expense',
    amount:'450',
    percentage:'9%'
    }
  ]

  return (
    <div className="overview-container">
        <div className="overview-content">
            <div className="overview-title">
                <div className="overview-main-text">Overview</div>
                <div className="overview-sub-text">Your transaction amount</div>
            </div>
            <div className="overview-stats">
              {
                cardValues.map((value,index)=>{
                  return(
                    <div key={index}>
                      <Card icon={value.icon} title={value.title} amount={value.amount} percentage={value.percentage}/>
                    </div>
                  )
                })
              }
             

            </div>

        </div>
    </div>
  )
}

export default Overview