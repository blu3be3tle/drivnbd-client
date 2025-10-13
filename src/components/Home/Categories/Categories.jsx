import { Link } from "react-router";

const categories = [
    { name: 'New Arrivals', href: '#', image: 'https://www.eromman.com/images/detailed/1050/T4kNqB0q1568470731.jpeg' },
    { name: 'Men', href: '#', image: 'https://nextluxury.com/wp-content/uploads/trendy-spring-fashion-style.jpg' },
    { name: 'Kids', href: '#', image: 'https://ae01.alicdn.com/kf/Hb68414a2a35648b18e8478013e04640eH.jpg_640x640Q90.jpg_.webp' },
];


const Categories = () => {
    return (
        <div>
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <h2 className="text-3xl font-extrabold text-gray-900 text-center">Shop by Category</h2>

                    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                        {categories.map(category => (
                            <Link to={category.href} key={category.name} className="flex justify-center">
                                <div class="card bg-base-100 bg-opacity-90 image-full w-96 shadow-sm">
                                    <figure>
                                        <img src={category.image} alt={category.name} />
                                    </figure>
                                    <div class="card-body">
                                        <div class="absolute inset-0 flex items-center text-center text-2xl font-bold">
                                            <p>{category.name}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Categories;