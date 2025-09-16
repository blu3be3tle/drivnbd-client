import React from 'react';
import { Route } from 'react-router';
import HomePage from '../pages/Home';

const AppRoutes = () => {
    return (
        <Route>
            <Route element={<MainLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Route>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Route>
    );
};

export default AppRoutes;