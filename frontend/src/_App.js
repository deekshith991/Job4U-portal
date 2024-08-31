import './App.css';
import LoginPage from './components/_Pages/LoginPage';
import RegisterPage from './components/_Pages/RegisterPage';
import Userdata from './components/_Pages/UserData';
import Companydata from './components/_Pages/CompanyData';
import { useAuth } from './components/services/AuthContext';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './components/_Pages/HomePage';
import ErrorPage from './components/_Pages/ErrorPage';
import CompanyPage from './components/_Pages/companyPanelPage';
import JOBgallery from './components/_Pages/JOBgallery';


function App() {

  const { authData } = useAuth();

  return (
    <div className="App">
      <Router>

        {!authData.isLoggedIn ? (
          // Not Logged In case No
          <Routes>
            <Route path='/Error' element={<ErrorPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/gallery' element={<JOBgallery />} />
            <Route path='/home' element={<HomePage />} />
            {/* <Route path='/test' element={<CompanyPage />} /> */}
            <Route path='/' element={<Navigate to="/login" />} />
            <Route path='/*' element={<Navigate to="/login" />} />
          </Routes>)
          :
          //Logged In case Yes
          (<Routes>
            <Route path='/companyProfile' element={<Companydata />} />
            <Route path='/companypanel' element={<CompanyPage />} />
            <Route path='/userProfile' element={<Userdata />} />
            <Route path='/gallery' element={<JOBgallery />} />
            <Route path='/home' element={<HomePage />} />
            <Route path='/*' element={<HomePage />} />
          </Routes>)


        }

      </Router>
    </div>
  );
}

export default App;
