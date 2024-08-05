import React, { useState } from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import profile from '../assets/profile.jpeg';
import { Select, MenuItem, FormControl, InputLabel, Switch, FormControlLabel } from '@mui/material';
import './Settings.css';

const Settings = () => {
  const [currency, setCurrency] = useState('USD');
  const [language, setLanguage] = useState('English');
  const [darkMode, setDarkMode] = useState(false);

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleDarkModeChange = (event) => {
    setDarkMode(event.target.checked);
  };

  return (
    <div className={`settings-container ${darkMode ? 'dark-mode' : ''}`}>
      <div className="transaction-title">
        Settings <IoSettingsOutline />
      </div>
      <div className="settings-content">
        <div className="settings-left">
          <div className="profile-picture">
            <img src={profile} alt="Profile" />
          </div>
          <div className="profile-name-settings">Swapnil Rupakhetee</div>
          <div className="profile-email">swapnilrupakhetee@gmail.com</div>
          <div className="spacing">
            <div className="profile-logout">Logout</div>
          </div>
        </div>
        <div className="settings-right">
          <div className="transaction-title">Account Settings</div>
          <div className="setting-items">
            <div className="setting-item">
              
              <div className="setting-item-value">
                <FormControl fullWidth variant="outlined" style={{border:'1px solid white',borderRadius:'4px'}}>
                  
                  <Select value={currency} onChange={handleCurrencyChange} label="Currency" style={{color:'white'}}>
                    <MenuItem value="USD">USD</MenuItem>
                    <MenuItem value="EUR">EUR</MenuItem>
                    <MenuItem value="GBP">GBP</MenuItem>
                    <MenuItem value="INR">INR</MenuItem>
                    <MenuItem value="NPR">NPR</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
            <div className="setting-item">
             
              <div className="setting-item-value">
                <FormControl fullWidth  style={{border:'1px solid white',borderRadius:'4px'}}>
                  
                  <Select value={language} onChange={handleLanguageChange} label="Language" style={{color:'white'}}>
                    <MenuItem value="English">English</MenuItem>
                    <MenuItem value="Spanish">Spanish</MenuItem>
                    <MenuItem value="French">French</MenuItem>
                    <MenuItem value="German">German</MenuItem>
                    <MenuItem value="Nepali">Nepali</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
            <div className="setting-item">
              <div className="setting-item-name">Dark Mode</div>
              <div className="setting-item-value">
                <FormControlLabel
                  control={
                    <Switch
                      checked={darkMode}
                      onChange={handleDarkModeChange}
                      color="primary"
                    />
                  }
                  label={darkMode ? 'On' : 'Off'}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
