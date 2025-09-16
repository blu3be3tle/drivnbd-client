import { Link, NavLink } from 'react-router';
import { useAuth } from '../contexts/AuthContext.jsx';
import { useCart } from '../contexts/CartContext.jsx';

const Navbar = () => {
    const { user, logout } = useAuth();
    const { cartItems } = useCart();

    const cartItemCount = cartItems.reduce((count, item) => count + item.quantity, 0);

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="text-2xl font-bold text-indigo-600">DrivnBD</Link>
                    </div>
                    <div className="hidden md:flex items-center space-x-4">
                        <NavLink to="/" className={({ isActive }) => isActive ? "text-indigo-600" : "text-gray-500 hover:text-indigo-600"}>Home</NavLink>
                        <NavLink to="/products" className={({ isActive }) => isActive ? "text-indigo-600" : "text-gray-500 hover:text-indigo-600"}>Products</NavLink>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Link to="/cart" className="relative text-gray-500 hover:text-indigo-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            {cartItemCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">{cartItemCount}</span>
                            )}
                        </Link>
                        {user ? (
                            <>
                                <Link to="/profile" className="text-gray-500 hover:text-indigo-600">Profile</Link>
                                <button onClick={logout} className="text-gray-500 hover:text-indigo-600">Logout</button>
                            </>
                        ) : (
                            <Link to="/login" className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                                Login
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

