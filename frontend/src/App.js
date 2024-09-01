import './App.css';
import { useAuth } from './component/service/AuthContext';
import LoginPage from './component/Pages/LoginPage';
import HomePage from './component/Pages/HomePage';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import RegisterPage from './component/Pages/RegisterPage';



function App() {

    const { authData } = useAuth() || {};

    return (
        <div className="App">
            <Router>

                {!authData.isLoggedIn ? (
                    // Not Logged In case No
                    <Routes>
                        <Route path="/home" element={<HomePage />} />
                        <Route path='/register' element={<RegisterPage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path='/*' element={<Navigate to="/login" />} />

                    </Routes>)
                    :
                    //Logged In case Yes
                    (<Routes>
                        <Route path="/home" element={<HomePage />} />
                    </Routes>)
                }

            </Router>
        </div>
    )
}

export default App;