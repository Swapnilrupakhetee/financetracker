import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
import './App.css';

import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Transactions from './pages/Transactions';
import Settings from './pages/Settings';

function App() {
  return (
    
    <>
      <Router>
        <Sidebar>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/transaction' element={<Transactions/>}/>
          <Route path='/settings' element={<Settings/>}/>
          

        </Routes>
        </Sidebar>
      </Router>
     
    </>
  );
}

export default App;