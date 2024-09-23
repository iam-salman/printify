import React from "react";
import icon1 from "../assets/higher-profits.svg";
import icon2 from "../assets/robust-scaling.svg";
import icon3 from "../assets/best-selection.svg";

const Features = () => {
    const features = [
        {
            id: 1,
            icon: icon1,
            title: "Higher Profits",
            description:
                "We offer some of the lowest prices in the industry because print providers continuously compete to win your business.",
        },
        {
            id: 2,
            icon: icon2,
            title: "Robust Scaling",
            description:
                "Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality.",
        },
        {
            id: 3,
            icon: icon3,
            title: "Best Selection",
            description:
                "With 900+ products and top quality brands, you can choose the best products for your business.",
        },
    ];

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-8 text-justify md:px-4">
                <div className="flex flex-col md:flex-row md:justify-evenly md:items-start">
                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            className="text-center max-w-sm mb-8 lg:mb-0 md:flex md:flex-col md:items-start md:gap-4 md:pr-6"
                        >
                            <img
                                src={feature.icon}
                                alt={feature.title}
                                className="mx-auto md:mx-0 w-28 h-28 mb-4"
                            />
                            <h3 className="text-2xl font-semibold mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 md:text-start text-center">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
