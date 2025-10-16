import React from 'react';

const Testimonial = () => {
    return (
        <div>
            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900">What Our Customers Say</h2>
                    <div className="mt-8">
                        <blockquote className="text-xl text-gray-600 italic">
                            "The quality of the clothing from DrivnBD is outstanding. I've never been happier with my online purchases. The customer service is top-notch too!"
                        </blockquote>
                        <p className="mt-4 font-semibold text-gray-900">- Alex Johnson</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Testimonial;