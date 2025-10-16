import FeaturedProducts from '../components/Home/Featured/Featured';
import Categories from '../components/Home/Categories/Categories';


const Home = () => {
    return (
        <div>
            {/* 1. Hero */}
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage:
                        "url(https://i.postimg.cc/FHtPHRdk/handsome-tourist-sunglasses-straw-hat-looking-aside-smiling-pleased-exploring-sighsteeing.jpg)",
                }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-2xl mb-32">
                        <h1 className="mb-5 text-5xl font-bold">Summer Collection is Here</h1>
                        <p className="mb-5">
                            Discover the latest trends and refresh your wardrobe with our stunning new arrivals.
                        </p>
                        <button className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-700">Shop Now</button>
                    </div>
                </div>
            </div>

            <FeaturedProducts />
            <Categories />

            {/* 4. Why Choose Us */}
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

            {/* 5. Customer Testimonials */}
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

            {/* 6. Newsletter Subscription */}
            <section className="py-16 bg-white">
                <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-gray-100 p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-gray-900">Stay in the Loop</h2>
                    <p className="mt-2 text-gray-600">Subscribe to our newsletter to get the latest updates on new arrivals, sales, and special offers.</p>
                    <form className="mt-6 flex flex-col sm:flex-row gap-4">
                        <input type="email" placeholder="Enter your email" className="flex-grow p-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
                        <button type="submit" className="bg-gray-900 text-white font-semibold py-3 px-6 rounded-md hover:bg-gray-700 transition">Subscribe</button>
                    </form>
                </div>
            </section>

        </div>
    );
};

export default Home;

