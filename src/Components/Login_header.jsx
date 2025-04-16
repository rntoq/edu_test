import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Header = () => {

    const navigate = useNavigate();
    return (
        <header className="bg-white text-gray-800 p-4 border-b border-gray-200">
            {/* Враппер с margin 100px слева и справа */}
            <div className="mx-[100px]">
                <div className="container mx-auto flex justify-between items-center">
                    <Link to="/" className="flex items-center">
                        <img src="../Assets/logo.png" alt="EDU ONLINE Logo" className="h-10"/>
                    </Link>

                    <div className="flex space-x-4">
                        <button
                            className="border border-blue-500 text-blue-500 pl-[14px] pr-[14px] pt-2.5 pb-2.5 text-[16px] leading-[20px] rounded-[8px] hover:bg-blue-50" onClick={() => navigate("/login")}>
                            Кіру
                        </button>
                        <button
                            className="bg-blue-500 text-white pl-[14px] pr-[14px] pt-2.5 pb-2.5 text-[16px] leading-[20px] rounded-[8px] hover:bg-blue-600" onClick={() => navigate("/register")}>
                            Тіркелу
                        </button>
                    </div>

                </div>
            </div>
        </header>
    );
};

export default Header;