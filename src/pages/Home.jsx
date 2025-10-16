import FeaturedProducts from '../components/Home/Featured/Featured';
import Categories from '../components/Home/Categories/Categories';
import Banner from '../components/Home/Banner/Banner';
import WhyChooseUs from '../components/Home/WhyChooseUs/WhyChooseUs';
import Testimonial from '../components/Home/Testimonial/Testimonial';
import Newsletter from '../components/Home/Newsletter/Newsletter';


const Home = () => {
    return (
        <div>
            <Banner />
            <FeaturedProducts />
            <Categories />
            <WhyChooseUs />
            <Testimonial />
            <Newsletter />
        </div>
    );
};

export default Home;

