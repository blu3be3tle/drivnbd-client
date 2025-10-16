const Newsletter = () => {
    return (
        <div>
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

export default Newsletter;