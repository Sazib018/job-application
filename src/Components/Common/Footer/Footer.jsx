import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10 mt-10">
            <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

                <div>
                    <h2 className="text-2xl font-bold">NextGen</h2>
                    <p className="mt-2 text-gray-400">NextGen is a technology-driven company that transforms future innovations into today’s reality.</p>

                    <button className="mt-2  rounded-md">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="w-32" />
                    </button>
                </div>

                <div>
                    <h3 className="text-lg font-semibold">Services</h3>
                    <ul className="mt-2 space-y-2 text-gray-400">
                        <li>Web Development</li>
                        <li>App Development</li>
                        <li>UI/UX Design</li>
                        <li>Digital Marketing</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold">Contact</h3>
                    <ul className="mt-2 space-y-2 text-gray-400">
                        <li>Email: support@nextgen.com</li>
                        <li>Phone: +123 456 789</li>
                        <li>Location: NextGen IT Center , Dhaka.</li>
                    </ul>
                </div>
            </div>



            <div className="flex justify-center space-x-4 mt-6">
                <a href="#" className="text-gray-400 hover:text-white"><FaFacebook size={24} /></a>
                <a href="#" className="text-gray-400 hover:text-white"><FaTwitter size={24} /></a>
                <a href="#" className="text-gray-400 hover:text-white"><FaInstagram size={24} /></a>
                <a href="#" className="text-gray-400 hover:text-white"><FaLinkedin size={24} /></a>
            </div>

            <div className="text-center text-gray-500 mt-6 text-sm">
                &copy; {new Date().getFullYear()} NextGen. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;