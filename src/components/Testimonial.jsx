import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import { Navigation, Pagination } from "swiper/modules";

import TestimonialCard from "./TestimonialCard";
import robert from "../assets/robert-voltaire.png";
import quinten from "../assets/quinten-barney.png";
import nikki from "../assets/nikki.png";
import spencer from "../assets/spencer.png";
import april from "../assets/april.jpeg";

const Testimonial = () => {
    const testimonials = [
        {
            image: robert,
            name: "Robert A. Voltaire",
            role: "Store link",
            rating: 5,
            review: "Printify has been an incredible service for us musicians unable to keep large amount of inventory - now we can create designs previously too expensive to print without having to have 1,000 shirts in our jam space. Thanks Printify!",
        },
        {
            image: quinten,
            name: "Quinten Barney",
            role: "Etsy Merchant",
            rating: 5,
            review: "We chose Printify because of their offerings as well as their incredibly low prices. After several years, we've come to find that their customer service is also top notch, and their platform just keeps getting better and better.",
        },
        {
            image: nikki,
            name: "Nikki",
            role: "Store link",
            rating: 5,
            review: "Printify has been a amazing partner to work with as we grow our business, from the range of merch we can make for our customers to working with our Customer Service team (Hi Martin!) it's truly made the whole process a breeze.",
        },
        {
            image: spencer,
            name: "Spencer, Brett, and Kyle",
            role: "Store link",
            rating: 5,
            review: "Using Printify has been a great experience. Customer service is always very quick to respond and handle any issues that our customers may have. The premium account has more than paid for itself and has increased our margins significantly.",
        },
        {
            image: april,
            name: "April Showers",
            role: "Store link",
            rating: 5,
            review: "I really appreciate working with Printify on my brand. Afro Unicorn was only supposed to be my design on a white shirt. It is so much more. Printify allows me the time to run the business and not work in the business.",
        },
    ];

    return (
        <section className="py-10 bg-gray-100 w-full ">
            <div className="text-start md:text-center lg:flex lg:justify-start lg:items-center lg:gap-8 lg:w-3/4 mx-auto mb-10 px-5">
                <h2 className="text-3xl font-bold lg:w-1/3 lg:text-[2.5rem] lg:text-start text-gray-700 lg:pt-20 lg:leading-[3.5rem] leading-10">
                    Trusted by over 8M sellers around the world
                </h2>
                <p className="text-gray-600 mt-2 lg:w-1/3 lg:mt-6 lg:text-start">
                    Whether you're just getting started or running an
                    enterprise-level business, we ensure a positive merchant
                    experience.
                </p>
            </div>

            <div className="flex justify-center">
                <Swiper
                    navigation
                    pagination={{ clickable: true }}
                    modules={[Navigation, Pagination]}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2, spaceBetween: 8 },
                        1024: { slidesPerView: 3, spaceBetween: 20 },
                    }}
                    className="w-3/4"
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index} className="h-full">
                            <div className="w-full h-full">
                                <TestimonialCard {...testimonial} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonial;
