import React, { useEffect, useState } from 'react';
import { FaRegClock, FaUsers, FaMoneyBillWave } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SeeAllJobs = () => {
    const [jobsData, setJobsData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:4000/jobs')
            .then(res => res.json())
            .then(data => setJobsData(data))
            .catch(error => console.error('Error:', error));
    }, []);

    const handleJobDetails = (id) => {
        navigate(`/jobs/${id}`);
    };

    return (
        <div className='mb-9'>
            {/* Header */}
            <div className="text-center py-10 px-4 md:px-8 lg:px-16 bg-white">
                <h2 className="text-center text-3xl font-bold mb-8">Available Job Listings</h2>

            </div>

            {/* Search + Title */}
            <div className="relative w-full mb-2 max-w-xl mx-auto bg-white rounded-full">
                <input
                    type="text"
                    name="query"
                    id="query"
                    placeholder="Search Hear"
                    className="rounded-full w-full h-16 bg-transparent py-2 pl-8 pr-32 outline-none border-2 border-gray-100 shadow-md  "
                />
                <button
                    type="submit"
                    className="absolute inline-flex items-center h-10 px-4 py-2 text-sm text-white transition duration-150 ease-in-out rounded-full outline-none right-3 top-3 bg-blue-600 sm:px-6 sm:text-base sm:font-medium hover:bg-sky-400"
                >
                    <svg
                        className="-ml-0.5 sm:-ml-1 mr-2 w-4 h-4 sm:h-5 sm:w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                    Search
                </button>
            </div>

            {/* Job Cards */}
            <div className="py-10 p-3 bg-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {jobsData.map((job) => (
                        <div
                            key={job._id}
                            className="bg-blue-50 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6"
                        >
                            <div className="mb-4">
                                <h3 className="text-xl font-semibold text-gray-800">{job.job_title}</h3>
                                <p className="text-sm text-gray-500 mt-1">{job.location}</p>
                                <div className="flex justify-center gap-2 mt-2 text-sm text-gray-600">
                                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded">{job.job_type}</span>
                                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">{job.category}</span>
                                </div>
                            </div>
                            <div className="text-sm text-gray-600 space-y-2 mt-4 flex flex-col items-center">
                                <p className="flex items-center gap-2">
                                    <FaRegClock className="text-orange-500" />
                                    <strong>Deadline:</strong> {job.deadline}
                                </p>
                                <p className="flex items-center gap-2">
                                    <FaUsers className="text-blue-500" />
                                    <strong>Total Applicants:</strong> {job.total_applicants}
                                </p>
                                <p className="flex items-center gap-2">
                                    <FaMoneyBillWave className="text-green-500" />
                                    <strong>Salary:</strong> {job.salary_range} {job.currency}
                                </p>
                            </div>
                            <button
                                onClick={() => handleJobDetails(job._id)}
                                className="mt-4 w-full py-2 bg-cyan-500 text-white font-semibold rounded-lg hover:bg-[#206ab1] transition"
                            >
                                Job Details
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SeeAllJobs;
