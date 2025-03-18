import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md w-full">
            <div className="container mx-auto px-4 flex items-center justify-between py-4 w-full">
                <div className="flex items-center text-3xl font-extrabold text-gray-800">
                    <img className="w-[40px]" src="https://i.ibb.co.com/pjt54kgc/imgbin-job-interview-computer-icons-mock-interview-ielts-C1-Abr-JKtcr-Yv1-Gfv15wbhg5-Cb.jpg" alt="Job Website Logo" />
                    <span className="ml-2">
                        Next<span className="text-rose-500">Gen</span>
                    </span>

                </div>

                <button
                    className="lg:hidden text-gray-600 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        />
                    </svg>
                </button>

                <div className={`lg:flex items-center ${isOpen ? "block" : "hidden"} w-full lg:w-auto`}>
                    <ul className="flex flex-col lg:flex-row lg:space-x-6 w-full">
                        <li><Link to="/" className="text-yellow-600 hover:text-yellow-400 text-base font-medium py-2 block">Home</Link></li>

                        <li><Link to="/documentations" className="text-yellow-600 hover:text-yellow-400 text-base font-medium py-2 block">Documentations
                        </Link></li>

                        <li><Link to="/features" className="text-yellow-600 hover:text-yellow-400 text-base font-medium py-2 block">Features</Link></li>

                        <li><Link to="/faqs" className="text-yellow-600 hover:text-yellow-400 text-base font-medium py-2 block">FAQs</Link></li>

                        <li> <a href="https://assignment-10-clint-837e6.web.app" target="_blank" className="text-yellow-600 hover:text-yellow-400 text-base font-medium py-2 block">
                            Support
                        </a>
                        </li>
                    </ul>
                </div>

                <div className="hidden md:flex space-x-4">
                    <NavLink to="/login" className="bg-rose-600 text-white px-4 py-2 rounded-lg hover:bg-rose-700" > LogIn
                    </NavLink>
                    <button className="bg-sky-400 text-white px-4 py-2 rounded-lg hover:bg-sky-700"> Find Job</button>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;
