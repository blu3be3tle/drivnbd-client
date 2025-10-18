import { Route, Routes } from 'react-router';
import Home from '../pages/Home';
import MainLayout from '../Layouts/MainLayout';
import Products from '../pages/Products';
import Login from '../pages/Login';
import Register from '../pages/Register';
import PrivateRoute from './PrivateRoute';
import ActivateAccount from '../pages/ActivateAccount';

import DashboardLayout from "../layouts/DashboardLayout";
import Profile from "../pages/Profile";
import Dashboard from "../pages/Dashboard";


const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path="/products" element={<Products />} />
                <Route path="activate/:uid/:token" element={<ActivateAccount />} />
            </Route>

            {/* Private Routes  */}
            <Route
                path="dashboard"
                element={
                    <PrivateRoute>
                        <DashboardLayout />
                    </PrivateRoute>
                }
            >
                <Route index element={<Dashboard />} />
                <Route path="profile" element={<Profile />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;