import React from 'react';
import { Route } from 'react-router';

const AppRoutes = () => {
    return (
        <Route>
            <Route element={<MainLayout />}>
                <Route path="/" element={<HomePa />} />
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