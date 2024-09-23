import React, { useState } from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StillWorking from "./components/StillWorking";
import Header from "../src/components/Header";
import Sidebar from "./components/Sidebar";

const App = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <BrowserRouter>
            <div className="fixed top-0 left-0">
                <Sidebar setShowMenu={setShowMenu} showMenu={showMenu} />
                <Header setShowMenu={setShowMenu} />
                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="*" element={<StillWorking />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;
