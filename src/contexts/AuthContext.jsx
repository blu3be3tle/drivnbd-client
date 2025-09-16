import React, { createContext, useState, useEffect } from 'react';
import api from '../services/api.js';
import { jwtDecode } from 'jwt-decode';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
            try {
                const decodedUser = jwtDecode(accessToken);
                if (decodedUser.exp * 1000 > Date.now()) {
                    setUser(decodedUser);
                } else {
                    localStorage.removeItem('accessToken');
                }
            } catch {
                localStorage.removeItem('accessToken');
            }
        }
        setLoading(false);
    }, []);

    const login = async (email, password) => {
        const response = await api.post('/auth/jwt/create/', { email, password });
        const { access } = response.data;
        localStorage.setItem('accessToken', access);
        const decodedUser = jwtDecode(access);
        setUser(decodedUser);
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('accessToken');
    };

    const value = { user, login, logout, loading };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext };