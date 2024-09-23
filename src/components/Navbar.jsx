import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import dropdown from "../assets/dropdown.svg";

const NavBar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(null);
    const location = useLocation();
    const toggleDropdown = (index) => {
        setDropdownOpen(dropdownOpen === index ? null : index);
    };

    const handleMouseEnter = (index) => {
        setDropdownOpen(index);
    };

    const handleMouseLeave = () => {
        setDropdownOpen(null);
    };

    const navItems = [
        { label: "Catalog", path: "/catalog" },
        {
            label: "How it works",
            dropdown: true,
            submenu: [
                { label: "How Printify Works", path: "/how-it-works/printify" },
                {
                    label: "Print On Demand",
                    path: "/how-it-works/print-on-demand",
                },
                {
                    label: "Printify Quality Promise",
                    path: "/how-it-works/quality-promise",
                },
                { label: "What to Sell?", path: "/how-it-works/what-to-sell" },
            ],
        },
        { label: "Pricing", path: "/pricing" },
        { label: "Blog", path: "/blog" },
        {
            label: "Services",
            dropdown: true,
            submenu: [
                { label: "Printify Studio", path: "/services/studio" },
                {
                    label: "Printify Express Delivery",
                    path: "/services/express",
                },
                { label: "Transfer Products", path: "/services/transfer" },
                { label: "Order In Bulk", path: "/services/bulk" },
                { label: "Expert Program", path: "/services/expert" },
            ],
        },
        {
            label: "Use-cases",
            dropdown: true,
            submenu: [
                { label: "Merch for Fans", path: "/use-cases/fans" },
                { label: "Merch for eCommerce", path: "/use-cases/ecommerce" },
                {
                    label: "Merch for Enterprises",
                    path: "/use-cases/enterprises",
                },
                { label: "Grow Your Store", path: "/use-cases/grow-store" },
            ],
        },
        {
            label: "Need Help?",
            dropdown: true,
            submenu: [
                { label: "Help Center", path: "/help-center" },
                { label: "Contacts", path: "/contacts" },
                { label: "My Requests", path: "/my-requests" },
            ],
        },
    ];

    return (
        <div className="flex items-center gap-6">
            {navItems.map((item, index) => (
                <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() =>
                        item.dropdown && handleMouseEnter(index)
                    }
                    onMouseLeave={handleMouseLeave}
                >
                    {item.dropdown ? (
                        <>
                            <button
                                onClick={() => toggleDropdown(index)}
                                className={`flex items-center text-[#1B1B1B] ${
                                    dropdownOpen === index ||
                                    location.pathname.startsWith(
                                        item.submenu[0].path
                                    )
                                        ? "text-[#39B75D]"
                                        : ""
                                }`}
                            >
                                {item.label}
                                <img
                                    src={dropdown}
                                    alt="Dropdown"
                                    className={`transform transition-transform ${
                                        dropdownOpen === index
                                            ? "rotate-180"
                                            : ""
                                    } h-4 ml-1`}
                                />
                            </button>
                            {dropdownOpen === index && (
                                <div className="bg-transparent absolute left-0 pt-6">
                                    <div className=" py-2 w-52 bg-white shadow-lg rounded z-10">
                                        {item.submenu.map((subItem) => (
                                            <Link
                                                key={subItem.label}
                                                to={subItem.path}
                                                className={`block px-4 py-2 hover:bg-gray-100 ${
                                                    location.pathname ===
                                                    subItem.path
                                                        ? "text-[#39B75D]"
                                                        : "text-[#1B1B1B]"
                                                }`}
                                            >
                                                {subItem.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </>
                    ) : (
                        <Link
                            to={item.path}
                            className={`text-[#1B1B1B] ${
                                location.pathname === item.path
                                    ? "text-[#39B75D]"
                                    : ""
                            }`}
                        >
                            {item.label}
                        </Link>
                    )}
                </div>
            ))}
        </div>
    );
};

export default NavBar;
