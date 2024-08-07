import React, { useContext } from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import profile from '../assets/profile.jpeg';
import { Select, MenuItem, FormControl, FormControlLabel, Switch } from '@mui/material';
import './Settings.css';
import { SettingContext } from '../Context/SettingsContext';
import { LanguagesContext } from '../Context/LanguageContext';

const Settings = () => {
  const { currency, setCurrency, darkMode, setDarkMode } = useContext(SettingContext);
  const { language, setLanguage, translations } = useContext(LanguagesContext);

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
        {translations[language].settings} <IoSettingsOutline />
      </div>
      <div className="settings-content">
        <div className="settings-left">
          <div className="profile-picture">
            <img src={profile} alt="Profile" />
          </div>
          <div className={`profile-name-settings ${darkMode ? 'dark-mode' : ''}`}>Swapnil Rupakhetee</div>
          <div className="profile-email">swapnilrupakhetee@gmail.com</div>
          <div className="spacing">
            <div className="profile-logout">{translations[language].logout}</div>
          </div>
        </div>
        <div className="settings-right">
          <div className="transaction-title">{translations[language].accountSettings}</div>
          <div className="setting-items">
            <div className="setting-item">
              <div className="setting-item-name">{translations[language].currency}</div>
              <div className="setting-item-value">
                <FormControl fullWidth variant="outlined" style={{ border: darkMode ? '1px solid white' : '1px solid black', borderRadius: '4px' }}>
                  <Select value={currency} onChange={handleCurrencyChange} label="Currency" style={{ color: darkMode ? 'white' : 'black' }}>
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
              <div className="setting-item-name">{translations[language].language}</div>
              <div className="setting-item-value">
                <FormControl fullWidth style={{ border: darkMode ? '1px solid white' : '1px solid black', borderRadius: '4px' }}>
                  <Select value={language} onChange={handleLanguageChange} label="Language" style={{ color: darkMode ? 'white' : 'black' }}>
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
              <div className="setting-item-name">{translations[language].darkMode}</div>
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
