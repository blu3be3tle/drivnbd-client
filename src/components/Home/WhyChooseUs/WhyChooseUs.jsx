import React from 'react';

const WhyChooseUs = () => {
    return (
        <div>
            <section className="bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <h2 className="text-3xl font-extrabold text-center">Why DrivnBD?</h2>
                    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        <div>
                            <h3 className="text-xl font-semibold">Quality First</h3>
                            <p className="mt-2 text-indigo-200">We source the finest materials to create durable and comfortable apparel.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">Free Shipping</h3>
                            <p className="mt-2 text-indigo-200">Enjoy free shipping on all orders over $50, delivered right to your door.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">Easy Returns</h3>
                            <p className="mt-2 text-indigo-200">Not satisfied? We offer a 30-day hassle-free return policy.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WhyChooseUs;