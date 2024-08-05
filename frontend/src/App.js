import './App.css';
import LoginPage from './components/Pages/LoginPage';
import RegisterPage from './components/Pages/RegisterPage';
import Userdata from './components/Pages/UserData';
import Companydata from './components/Pages/CompanyData';
import { useAuth } from './components/services/AuthContext';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/Pages/HomePage';




function App() {

  const { authData } = useAuth();

  return (
    <div className="App">
      <Router>

        {authData.isLoggedIn ?
          //Logged In case Yes
          <Routes>
            <Route path='/home' element={<HomePage />} />
          </Routes>
          :

          // Not Logged In case No
          <Routes>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/' element={<LoginPage />} />
          </Routes>
        }

      </Router>
    </div>
  );
}

export default App;
