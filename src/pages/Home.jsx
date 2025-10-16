import FeaturedProducts from '../components/Home/Featured/Featured';
import Categories from '../components/Home/Categories/Categories';
import Banner from '../components/Home/Banner/Banner';
import WhyChooseUs from '../components/Home/WhyChooseUs/WhyChooseUs';


const Home = () => {
    return (
        <div>
            <Banner />
            <FeaturedProducts />
            <Categories />
            <WhyChooseUs />
            

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

