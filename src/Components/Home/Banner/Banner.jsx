import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div
            className="bg-gray-100 py-10 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('https://i.ibb.co.com/tMP1NL7k/images-2.jpg')" }}
        >
            <div className="container mx-auto px-4  p-6 rounded-lg shadow-lg">
                <div className="grid md:grid-cols-2 gap-6 items-start">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        {[
                            { label: "LIVE JOBS", count: 46, img: "https://i.ibb.co/9HjPF1Py/istockphoto-1061305620-612x612.jpg" },
                            { label: "VACANCIES", count: 56, img: "https://i.ibb.co/FLxmsgsp/12216544.png" },
                            { label: "COMPANIES", count: 867, img: "https://i.ibb.co/kVqFXwjz/9235458.png" },
                            { label: "NEW JOBS", count: 168, img: "https://i.ibb.co/rD88xn8/images-4.png" },
                        ].map((stat, index) => (
                            <div key={index} className="bg-white p-5 rounded-lg shadow-lg border border-gray-200">
                                <img src={stat.img} alt={stat.label} className="mx-auto w-16 h-16 mb-2" />
                                <h4 className="text-2xl font-bold text-gray-800">{stat.count}</h4>
                                <p className="text-gray-600 font-semibold">{stat.label}</p>
                            </div>
                        ))}
                    </div>

                    {/* Job Search Form */}
                    <div className="bg-white shadow-lg p-5 rounded-lg text-center border border-gray-300">
                        <h3 className="text-2xl font-bold text-gray-800">OUR JOBS</h3>
                        <p className="text-gray-600 mb-4">We connect people and job opportunities</p>
                        <div className="flex flex-col md:flex-row gap-2 mb-4">
                            <input type="text" placeholder="Find Jobs" className="border p-2 w-full rounded focus:outline-none" />
                            <select className="border p-2 rounded w-full focus:outline-none">
                                <option value="">Select Your Category</option>
                                <option value="1">Commercial/Supply Chain</option>
                                <option value="2">IT & Telecommunication</option>
                                <option value="3">Education/Training</option>
                            </select>
                            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded font-semibold">Search</button>
                        </div>
                    </div>
                </div>

                {/* Quick Links & Divisional Jobs */}
                <div className="mt-6 grid md:grid-cols-2 gap-6">
                    {/* Quick Links */}
                    <div className="bg-yellow-500 p-5 rounded-lg text-white shadow-lg">
                        <h3 className="text-xl font-bold mb-3">QUICK LINKS</h3>
                        <ul className="grid grid-cols-2 gap-2 text-sm">
                            {[
                                { name: "Govt Jobs", path: "/govt-jobs" },
                                { name: "Home Based Jobs", path: "/home-jobs" },
                                { name: "New Jobs", path: "/new-jobs" },
                                { name: "Tender", path: "/tender" },
                                { name: "Freshers Jobs", path: "/freshers-jobs" },
                                { name: "Part-Time Jobs", path: "/part-time-jobs" },
                                { name: "Training & Course", path: "/training" },
                                { name: "Foreign Jobs", path: "/foreign-jobs" },
                                { name: "Skill Based Jobs", path: "/skill-jobs" },
                                { name: "Deadline Tomorrow", path: "/deadline-tomorrow" },
                            ].map((link, index) => (
                                <li key={index}>
                                    <Link to={link.path} className="text-white hover:underline">▪ {link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Divisional Jobs */}
                    <div className="bg-yellow-500 p-5 rounded-lg shadow-lg text-white">
                        <h3 className="text-xl font-bold mb-3">DIVISIONAL JOBS</h3>
                        <ul className="grid grid-cols-2 gap-2 text-sm">
                            {[
                                { name: "Anywhere in Bangladesh", count: 3 },
                                { name: "Barishal", count: 0 },
                                { name: "Chattagram", count: 1 },
                                { name: "Dhaka", count: 42 },
                                { name: "Khulna", count: 0 },
                                { name: "Mymensingh", count: 0 },
                                { name: "Rajshahi", count: 0 },
                                { name: "Rangpur", count: 0 },
                                { name: "Sylhet", count: 0 },
                            ].map((job, index) => (
                                <li key={index} className="text-white">▪ {job.name} ({job.count})</li>
                            ))}
                            <li className="col-span-2 text-center font-bold mt-2">ALL Bangladesh (46)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
