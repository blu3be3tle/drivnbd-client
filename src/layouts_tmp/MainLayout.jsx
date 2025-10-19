import React from 'react';
import { Outlet } from 'react-router';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';


const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;

