// AuthContext.js
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [authData, setAuthData] = useState({
        account: '',
        uid: '',
        email: '',
        name: '',
        isLoggedIn: false
    });

    //const API_URL = "http://localhost:3333";
    const API_URL = "https://job4-u-portal.vercel.app"; // vercel live code ..



    return (
        <AuthContext.Provider value={{ authData, setAuthData, API_URL }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);