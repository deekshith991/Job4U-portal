import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import { useAuth } from './components/services.js/AuthContext';
import LoginPage from './components/Pages/LoginPage';
import RegisterPage from './components/Pages/RegisterPage';

function App() {

  const { authData } = useAuth();

  return (
    <div className="App">
      <Router>

        {authData.isLoggedIn ?
          //Logged In case Yes
          <h1>logged In</h1>
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
