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

    return (
        <AuthContext.Provider value={{ authData, setAuthData }}>
            {children}
        </AuthContext.Provider>
    );
};

//export const API_URL = "http://localhost:3333";
export const API_URL = "https://job4-u-portal.vercel.app"; // vercel live code ..

export const useAuth = () => useContext(AuthContext);