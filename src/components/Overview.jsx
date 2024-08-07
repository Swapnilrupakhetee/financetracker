import React, { useContext } from 'react'
import './Overview.css'
import Card from './Card'
import { CiWallet } from "react-icons/ci";
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";
import { BsBoxArrowInDownLeft } from "react-icons/bs";
import { SettingContext } from '../Context/SettingsContext';
import { LanguagesContext } from '../Context/LanguageContext';

const Overview = () => {
  const{darkMode}=useContext(SettingContext);
  const { language, translations } = useContext(LanguagesContext);

    
  const currentTranslations = translations[language] || {};
  

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
                <div className={`overview-main-text${darkMode?'dark-mode':""}`}>{currentTranslations.overview}</div>
                <div className={`overview-sub-text${darkMode?'dark-mode':""}`}>{currentTranslations.transactionAmount}</div>
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