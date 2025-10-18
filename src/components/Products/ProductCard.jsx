import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    return (
        <Link to={`/products/${product.id}`}>
            <div className="group relative bg-white border rounded-lg p-4 shadow-sm hover:shadow-xl transition-shadow duration-300">
                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden">
                    <img
                        src={product.images.length > 0 ? product.images[0].image : 'https://res.cloudinary.com/dd7xmhwer/image/upload/v1760380152/default_product_tyto4y.jpg'}
                        alt={product.name}
                        className="w-full h-full object-center object-cover group-hover:opacity-75 transition-opacity"
                    />
                </div>
                <div className="mt-4 flex justify-between">
                    <div>
                        <h3 className="text-sm font-bold text-gray-700">

                            <span aria-hidden="true" className="absolute inset-0" />
                            {product.name}
                        </h3>
                    </div>
                    <p className="text-sm font-medium text-gray-900">Tk {product.price}</p>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
