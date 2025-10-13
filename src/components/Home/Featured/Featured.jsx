import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import apiClient from '../../../services/api-client';

const FeaturedProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFeaturedProducts = async () => {
            try {
                const response = await apiClient.get('/products/featured/');
                if (response.data && Array.isArray(response.data.results)) {
                    setProducts(response.data.results);
                } else {
                    setProducts([]);
                }

            } catch (err) {
                setError('Failed to load featured products. Please try again later.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchFeaturedProducts();
    }, []);

    if (loading) {
        return (
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900">Featured Products</h2>
                    <p className="mt-4 text-gray-600">Loading our best sellers...</p>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="py-16 bg-red-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-extrabold text-red-800">Featured Products</h2>
                    <p className="mt-4 text-red-600">{error}</p>
                </div>
            </section>
        );
    }

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-gray-900 text-center">Featured Products</h2>
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map(product => (
                        <div key={product.id} className="group relative bg-white border rounded-lg p-4 shadow-sm hover:shadow-xl transition-shadow duration-300">
                            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden">
                                <img
                                    src={product.image || 'https://placehold.co/400x500/f8fafc/334155?text=Image'}
                                    alt={product.name}
                                    className="w-full h-full object-center object-cover group-hover:opacity-75 transition-opacity"
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <Link to={`/products/${product.id}`}><span aria-hidden="true" className="absolute inset-0" />{product.name}</Link>
                                    </h3>
                                </div>
                                <p className="text-sm font-medium text-gray-900">Tk {product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;

