import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
import './App.css';

import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Transactions from './pages/Transactions';
import Settings from './pages/Settings';
import { SettingsContextProvider } from './Context/SettingsContext';
import LanguageProvider from './Context/LanguageContext';
import CurrencyProvider from './Context/CurrencyContext';
import { TransactionProvider } from './Context/TransactionContext';


function App() {
  return (
    
    <>
    <CurrencyProvider>
      <TransactionProvider>
    <LanguageProvider>
    <SettingsContextProvider>
      <Router>
        <Sidebar>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/transaction' element={<Transactions/>}/>
          <Route path='/settings' element={<Settings/>}/>
          

        </Routes>
        </Sidebar>
      </Router>
      </SettingsContextProvider>
      </LanguageProvider>
      </TransactionProvider>
      </CurrencyProvider>
      
     
    </>
  );
}

export default App;