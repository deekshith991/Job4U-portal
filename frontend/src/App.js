import './App.css';
import LoginPage from './components/Pages/LoginPage';
import RegisterPage from './components/Pages/RegisterPage';
import Userdata from './components/Pages/UserData';
import Companydata from './components/Pages/CompanyData';
import { useAuth } from './components/services/AuthContext';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './components/Pages/HomePage';
import ErrorPage from './components/Pages/ErrorPage';
import CompanyPage from './components/Pages/companyPanelPage';
import JobGallery from './components/Pages/JobGallery';


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
            <Route path='/gallery' element={<JobGallery />} />
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
            <Route path='/gallery' element={<JobGallery />} />
            <Route path='/home' element={<HomePage />} />
            <Route path='/*' element={<HomePage />} />
          </Routes>)


        }

      </Router>
    </div>
  );
}

export default App;
