import React from "react";
import sliderlady from "../assets/design-slider-lady.svg";
import play from "../assets/play.svg";

const HeroBanner = () => {
    return (
        <div className="px-8 w-full grid grid-cols-1 md:grid-cols-2 items-center lg:w-3/4 max-w-6xl">
            <div className="md:mb-0 mb-8">
                <h1 className="text-3xl lg:text-[3.5rem] md:text-4xl font-semibold mb-3 lg:mb-9 text-left">
                    Create and sell
                </h1>
                <h1 className="text-3xl lg:text-[3.5rem]  font-semibold mb-4 text-left">
                    custom products
                </h1>
                <ul className="text-lg text-gray-600 mb-8 ml-3">
                    <li className="flex items-center mb-2">
                        <span className="text-green-500 mr-2">✔</span> 100% Free
                        to use
                    </li>
                    <li className="flex items-center mb-2">
                        <span className="text-green-500 mr-2">✔</span> 900+
                        High-Quality Products
                    </li>
                    <li className="flex items-center">
                        <span className="text-green-500 mr-2">✔</span> Largest
                        global print network
                    </li>
                </ul>
                <div className="flex gap-4">
                    <button className="bg-green-500 text-white font-medium px-4 md:px-6 py-[10px] rounded hover:bg-green-600 transition">
                        Start for free
                    </button>
                    <button className="bg-transparent border border-gray-400 text-gray-700 px-3 md:px-4 py-2 rounded hover:bg-gray-200 transition flex items-center gap-2 justify-center">
                        <img src={play} alt="" className="h-5" />
                        <p className="font-medium">How it works?</p>
                    </button>
                </div>
                <p className="font-medium text-green-500 mt-4 text-center md:text-left">
                    Trusted by over 8M sellers around the world
                </p>
            </div>

            <div>
                <img
                    src={sliderlady}
                    alt="Illustration"
                    className="sm:w-1/2 md:w-3/4 lg:w-auto w-full"
                />
            </div>
        </div>
    );
};

export default HeroBanner;
