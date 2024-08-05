// AuthContext.js
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [userInformation, setUserInformation] = useState('');
    const [authData, setAuthData] = useState({
        account: '',
        uid: '',
        email: '',
        name: '',
        isLoggedIn: false
    });


    return (
        <AuthContext.Provider value={{ authData, setAuthData, userInformation, setUserInformation }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);