import React from "react";
import { FiSearch } from "react-icons/fi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
    const images = [
        "https://i.ibb.co.com/tMP7j6zm/premium-photo-1661772661721-b16346fe5b0f.jpg",
        "https://i.ibb.co.com/TxNMV7K0/pngtree-partnership-of-companies-collaboration-business-technology-internet-concept-image-15659993.jpg",
        "https://i.ibb.co.com/fzy202XQ/group-diverse-people-having-business-meeting-53876-25060.jpg",
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <div className="relative mt-11">
            <div className="bg-gradient-to-b from-red-500 to-red-800 h-80 flex flex-col items-center justify-center text-white px-4 relative">
                <h1 className="text-center text-3xl sm:text-4xl font-extrabold mb-2 font-serif">
                    What Do You Need?
                </h1>
                <p className="text-lg text-center">
                    Find all kinds of jobs that match your passion and skills.
                </p>
                <div className="relative w-full max-w-4xl mt-6">
                    <div className="bg-white border border-gray-300 shadow-2xl rounded-lg mx-auto p-4">
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-2 flex-wrap">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                            />
                            <button className="bg-red-600 text-white p-2 flex items-center justify-center rounded-md hover:bg-red-700 w-full sm:w-auto flex-shrink-0">
                                <FiSearch className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sm:flex items-center sm:mt-10 max-w-screen-xl mx-auto p-5">
                <div className="sm:w-1/2 p-10">
                    <Slider {...settings}>
                        {images.map((img, index) => (
                            <div key={index} className="text-center">
                                <img
                                    className="rounded-lg mx-auto w-full h-[300px] object-cover"
                                    src={img}
                                    alt={`Slide ${index + 1}`}
                                />
                            </div>
                        ))}
                    </Slider>
                </div>


                <div className="sm:w-1/2 p-5">
                    <div className="text">
                        <h2 className="my-4 font-bold text-3xl sm:text-4xl">
                            About <span className="text-red-600">NextGen</span>
                        </h2>
                        <p className="text-gray-700">
                            NextGen is a leading innovator in AI, software development, and digital services.
                            Our mission is to provide seamless solutions that drive success. With a skilled
                            team and advanced technology, we deliver top-notch services to businesses
                            worldwide. Experience the future of digital transformation with NextGen.
                        </p>
                    </div>

                    <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
