import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
import './App.css';

import Sidebar from './components/Sidebar';
import Home from './pages/Home';

function App() {
  return (
    
    <>
      <Router>
        <Sidebar>
        <Routes>
          <Route path='/' element={<Home/>}/>
          

        </Routes>
        </Sidebar>
      </Router>
     
    </>
  );
}

export default App;