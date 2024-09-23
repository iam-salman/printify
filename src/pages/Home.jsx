import Features from "../components/Features";
import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";
import Product from "../components/Product";
import Testimonial from "../components/Testimonial";

const Home = () => {
    return (
        <div className="mt-[70px] py-20 h-screen overflow-y-auto w-full fixed flex flex-col items-center">
            <HeroBanner />
            <Features />
            <Product />
            <Testimonial />
            <Footer />
        </div>
    );
};

export default Home;
