import { Link } from "react-router";


const Banner = () => {
    return (
        <div>
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
                        <Link to="/products">
                            <button className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-700">Shop Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;