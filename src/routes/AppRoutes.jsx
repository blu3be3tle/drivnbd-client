import { Route, Routes } from 'react-router';
import Home from '../pages/Home';
import MainLayout from '../Layouts/MainLayout';
import Products from '../pages/Products';

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;