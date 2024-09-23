import React from "react";
import NavBar from "./NavBar";
import companyLogo from "../assets/logo-full.svg";
import logo from "../assets/printify.svg";
import hamburger from "../assets/hamburger.svg";
import { Link } from "react-router-dom";

const Header = ({ setShowMenu }) => {
    return (
        <div className="w-full h-[70px] shadow-md fixed top-0 flex items-center lg:justify-evenly justify-between gap-5 px-8 bg-white z-30">
            <div className="flex items-center gap-2">
                <img
                    src={hamburger}
                    alt="Menu"
                    className="lg:hidden h-[30px] cursor-pointer"
                    onClick={() => setShowMenu((prev) => !prev)}
                />
                <Link to="/">
                    <img
                        src={companyLogo}
                        alt="Company logo"
                        className="h-10 md:block hidden"
                    />
                    <img
                        src={logo}
                        alt="Company logo"
                        className="h-12 md:hidden"
                    />
                </Link>
            </div>

            <div className="lg:block hidden">
                <NavBar />
            </div>

            <div className="flex items-center gap-4">
                <button className="px-5 rounded py-[5px] border font-medium border-[#bbbbbb]">
                    Log in
                </button>
                <button className="px-4 rounded py-[5px] border bg-[#39B75D] text-white font-medium border-[#39B75D]">
                    Sign up
                </button>
            </div>
        </div>
    );
};

export default Header;
