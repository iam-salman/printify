import React from "react";
import { Link } from "react-router-dom";
import construction from "../assets/construction.mp4";

const StillWorking = () => {
    return (
        <div className="w-full mt-16">
            <div className="flex flex-col md:flex-row items-center justify-center">
                <video
                    src={construction}
                    autoPlay
                    loop
                    muted
                    className="mb-6 w-full md:w-1/2"
                />

                <div className="flex flex-col mx-6">
                    <h1 className="text-3xl font-bold mb-4">
                        We're Still Working on It!
                    </h1>
                    <p className="text-lg text-gray-700 mb-6">
                        Thanks for your patience. This page is currently under
                        construction.
                    </p>
                    <Link to="/">
                        <button className="px-4 rounded py-[5px] border bg-[#39B75D] text-white font-medium border-[#39B75D]">
                            Back to Home
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default StillWorking;
