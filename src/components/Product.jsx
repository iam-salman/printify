import { Link } from "react-router-dom";
import clothes from "../assets/clothes.webp";
import tshirt from "../assets/img_5.png";
import customproduct from "../assets/custom-products.png";
import yourproduct from "../assets/your-products.png";
import fullfillment from "../assets/fullfillment.png";

const Product = () => {
    return (
        <section className="py-16 bg-[#F7F7F7] w-full">
            <div className="flex flex-col lg:flex-row justify-center items-end bg-white lg:bg-transparent rounded-3xl mx-3  lg:mx-0 md:mx-28">
                <div className="relative w-full lg:w-auto">
                    <div className="bg-green-500 rounded-l-3xl rounded-r-3xl lg:rounded-br-none">
                        <img
                            src={clothes}
                            alt="Products"
                            className="w-full h-52 md:h-72 lg:h-auto lg:w-[460px] object-cover rounded-3xl"
                        />
                        <div className="absolute bottom-20 right-[-64px] bg-white px-6 pt-7 pb-9 border rounded-2xl lg:flex flex-col justify-between items-center hidden">
                            <div className="flex items-center justify-between mb-2">
                                <button className="border px-6 py-1 rounded-md text-xs">
                                    Edit
                                </button>
                                <button className="border px-3 py-1 rounded-md text-xs">
                                    Preview
                                </button>
                            </div>
                            <div className="border-gray-200 pt-2 mt-2">
                                <img src={tshirt} alt="" className="w-28" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:bg-white px-8 py-12 lg:py-36 w-full lg:w-1/2 rounded-r-3xl">
                    <h2 className="text-3xl lg:text-3xl font-bold text-gray-800 mb-4 lg:w-3/5 mx-auto leading-tight">
                        Easily add your design to a wide range of products
                    </h2>
                    <p className="text-gray-600 mb-6 lg:w-3/5 mx-auto">
                        With our free design tools, you can easily add your
                        custom designs to t-shirts, mugs, phone cases, and
                        hundreds of other products.
                    </p>
                    <Link to="/products">
                        <p className="text-green-500 font-medium lg:w-3/5 mx-auto">
                            All products &rarr;
                        </p>
                    </Link>
                </div>
            </div>

            <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 md:px-8 lg:px-14 max-w-6xl mx-auto">
                <div className="flex flex-col lg:items-start items-center">
                    <img
                        src={customproduct}
                        alt="Create"
                        className="mb-4 w-40"
                    />
                    <h3 className="text-lg font-semibold text-green-500 mb-2 lg:mt-6 mt-2">
                        CREATE
                    </h3>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">
                        custom products
                    </h4>
                    <p className="text-gray-600 text-sm w-2/4 lg:w-auto text-center lg:text-start">
                        Easily add your designs to a wide range of products
                        using our free tools.
                    </p>
                </div>

                <div className="flex flex-col lg:items-start items-center">
                    <img src={yourproduct} alt="Create" className="mb-4 w-40" />
                    <h3 className="text-lg font-semibold text-green-500 mb-2 lg:mt-6 mt-2">
                        SELL
                    </h3>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">
                        on your terms
                    </h4>
                    <p className="text-gray-600 text-sm w-2/4 lg:w-auto text-center lg:text-start">
                        You choose the products, sale price, and where to sell.
                    </p>
                </div>
                <div className="flex flex-col lg:items-start items-center">
                    <img
                        src={fullfillment}
                        alt="Create"
                        className="mb-4 w-40"
                    />
                    <h3 className="text-lg font-semibold text-green-500 mb-2 lg:mt-6 mt-2">
                        WE HANDLE
                    </h3>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">
                        fullfillment
                    </h4>
                    <p className="text-gray-600 text-sm w-2/4 lg:w-auto text-center lg:text-start">
                        Once an order is placed, we automatically handle all the
                        printing and delivery logistics
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Product;
