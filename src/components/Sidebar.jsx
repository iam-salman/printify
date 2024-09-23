import React, { useState } from "react";
import { Link } from "react-router-dom";
import close from "../assets/close.svg";
import dropdown from "../assets/dropdown.svg";

const Sidebar = ({ setShowMenu, showMenu }) => {
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (index) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };

    const handleMenuItemClick = () => {
        setShowMenu(false);
    };

    return (
        <div
            className={`fixed top-0 left-0 w-full h-screen bg-[#333333]/70 z-50 transition-opacity duration-300 ${
                showMenu ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
        >
            <div
                className={`flex flex-col items-center gap-7 w-64 h-screen overflow-y-auto bg-white transition-transform duration-300 pb-6 ${
                    showMenu
                        ? "transform translate-x-0"
                        : "transform -translate-x-full"
                }`}
            >
                <div className="py-3 border-b w-full flex items-center">
                    <div className="flex-1 text-center">
                        <p className="text-2xl font-bold pl-14">Menu</p>
                    </div>
                    <img
                        src={close}
                        alt="Close Menu"
                        className="h-8 pr-4 cursor-pointer"
                        onClick={() => setShowMenu((prev) => !prev)}
                    />
                </div>

                <div className="flex flex-col gap-4 items-start w-full px-4">
                    {[
                        { label: "Catalog", path: "/catalog", dropdown: false },
                        {
                            label: "How it works",
                            dropdown: true,
                            submenu: [
                                {
                                    label: "How Printify Works",
                                    path: "/how-it-works/printify",
                                },
                                {
                                    label: "Print On Demand",
                                    path: "/how-it-works/print-on-demand",
                                },
                                {
                                    label: "Printify Quality Promise",
                                    path: "/how-it-works/quality-promise",
                                },
                                {
                                    label: "What to Sell?",
                                    path: "/how-it-works/what-to-sell",
                                },
                            ],
                        },
                        { label: "Pricing", path: "/pricing", dropdown: false },
                        { label: "Blog", path: "/blog", dropdown: false },
                        {
                            label: "Services",
                            dropdown: true,
                            submenu: [
                                {
                                    label: "Printify Studio",
                                    path: "/services/studio",
                                },
                                {
                                    label: "Printify Express Delivery",
                                    path: "/services/express",
                                },
                                {
                                    label: "Transfer Products",
                                    path: "/services/transfer",
                                },
                                {
                                    label: "Order In Bulk",
                                    path: "/services/bulk",
                                },
                                {
                                    label: "Expert Program",
                                    path: "/services/expert",
                                },
                            ],
                        },
                        {
                            label: "Use-cases",
                            dropdown: true,
                            submenu: [
                                {
                                    label: "Merch for Fans",
                                    path: "/use-cases/fans",
                                },
                                {
                                    label: "Merch for eCommerce",
                                    path: "/use-cases/ecommerce",
                                },
                                {
                                    label: "Merch for Enterprises",
                                    path: "/use-cases/enterprises",
                                },
                                {
                                    label: "Grow Your Store",
                                    path: "/use-cases/grow-store",
                                },
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
                    ].map((item, index) => (
                        <div key={item.label} className="w-full">
                            <div
                                className="flex justify-between items-center cursor-pointer"
                                onClick={() => {
                                    if (item.dropdown) {
                                        toggleDropdown(index);
                                    } else {
                                        handleMenuItemClick();
                                    }
                                }}
                            >
                                {item.dropdown ? (
                                    <span
                                        className={`text-lg font-bold ${
                                            openDropdown === index
                                                ? "text-[#39B75D]"
                                                : "#2B2B2B"
                                        }`}
                                    >
                                        {item.label}
                                    </span>
                                ) : (
                                    <Link
                                        to={item.path}
                                        onClick={handleMenuItemClick}
                                        className={`text-lg font-bold ${
                                            openDropdown === index
                                                ? "text-[#39B75D]"
                                                : "#2B2B2B"
                                        }`}
                                    >
                                        {item.label}
                                    </Link>
                                )}
                                {item.dropdown && (
                                    <img
                                        src={dropdown}
                                        className={`transform transition-transform ${
                                            openDropdown === index
                                                ? "rotate-180"
                                                : ""
                                        } h-6`}
                                        alt="Dropdown icon"
                                    />
                                )}
                            </div>
                            {item.dropdown && openDropdown === index && (
                                <div className="ml-10 mt-6 flex flex-col gap-5">
                                    {item.submenu.map((subItem) => (
                                        <Link
                                            key={subItem.label}
                                            to={subItem.path}
                                            onClick={handleMenuItemClick}
                                            className="text-[#2B2B2B] text-md"
                                        >
                                            {subItem.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
