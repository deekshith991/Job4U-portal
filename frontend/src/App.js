import './App.css';
import LoginPage from './components/Pages/LoginPage';
import RegisterPage from './components/Pages/RegisterPage';
import Userdata from './components/Pages/UserData';
import Companydata from './components/Pages/CompanyData';
import { useAuth } from './components/services/AuthContext';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './components/Pages/HomePage';




function App() {

  const { authData } = useAuth();

  return (
    <div className="App">
      <Router>

        {!authData.isLoggedIn ? (
          // Not Logged In case No
          <Routes>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/' element={<Navigate to="/login" />} />
            <Route path='/*' element={<Navigate to="/login" />} />
          </Routes>)
          :
          //Logged In case Yes
          (<Routes>
            <Route path='/companyProfile' element={<Companydata />} />
            <Route path='/userProfile' element={<Userdata />} />
            <Route path='/*' element={<HomePage />} />
          </Routes>)

        }

      </Router>
    </div>
  );
}

export default App;
