import { Route, Routes } from 'react-router';
import Home from '../pages/Home';
import MainLayout from '../Layouts/MainLayout';
import Products from '../pages/Products';
import Login from '../pages/Login';
import Register from '../pages/Register';

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path="/products" element={<Products />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;