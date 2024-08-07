import React, { useContext, useState } from 'react';
import './Dashboardtop.css';
import { IoMdNotificationsOutline } from "react-icons/io";
import profile from '../assets/profile.jpeg';
import { LanguagesContext } from '../Context/LanguageContext';
import { SettingContext } from '../Context/SettingsContext';

const Dashboardtop = () => {
    const { darkMode } = useContext(SettingContext);
    const { language, translations } = useContext(LanguagesContext);
    const [search, setSearch] = useState("");
    const user = "Swapnil";
    
  
    const currentTranslations = translations[language] || {};

    return (
        <div className="dashboardtop-container">
            <div className={`dashboardtop-content ${darkMode ? 'dark-mode' : ""}`}>
                <div className="dash-name">
                    <div className="top-name">{currentTranslations.greeting}, {user}</div>
                    <div className="dash-sub">{currentTranslations.subtitle}</div>
                </div>
                <div className="dash-top-right">
                    <div className="search">
                        <input
                            type='text'
                            className='dash-search'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder={currentTranslations.searchPlaceholder || 'Search'}
                        />
                    </div>
                    <div className="final-save">
                        <div className="dash-notification">
                            <div className="dash-icon-container">
                                <IoMdNotificationsOutline className='noti' />
                            </div>
                        </div>
                        <div className="dash-user-profile">
                            <div className="profile-name">{user}</div>
                            <div className="profile-pic">
                                <img src={profile} alt="profile-pic" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboardtop;
