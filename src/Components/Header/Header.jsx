import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white font-bold text-xl">Garuda Genesis</div>
                <ul className="flex space-x-4">
                    <li><a href="#" className="text-white hover:text-gray-300">Home</a></li>
                    <li><a href="#" className="text-white hover:text-gray-300">About</a></li>
                    <li><a href="#" className="text-white hover:text-gray-300">Services</a></li>
                    <li><a href="#" className="text-white hover:text-gray-300">Contact</a></li>
                </ul>
            </div>
        </nav>

    );
};

export default Header;
