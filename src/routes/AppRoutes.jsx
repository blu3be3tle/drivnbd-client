import { Route, Routes } from 'react-router';
import Home from '../pages/Home';
import MainLayout from '../Layouts/MainLayout';
import Products from '../pages/Products';
import Login from '../pages/Login';
import Register from '../pages/Register';
import PrivateRoute from './PrivateRoute';
import ActivateAccount from '../pages/ActivateAccount';
import ProductDetail from '../pages/ProductDetail';

import DashboardLayout from "../layouts/DashboardLayout";
import Profile from "../pages/Profile";
import Dashboard from "../pages/Dashboard";
import Cart from '../pages/Cart';


const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path='login' element={<Login />} />
                <Route path='register' element={<Register />} />
                <Route path="products" element={<Products />} />
                <Route path="activate/:uid/:token" element={<ActivateAccount />} />
                <Route path="products/:productId" element={<ProductDetail />} />
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
                <Route path='cart' element={<Cart />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;