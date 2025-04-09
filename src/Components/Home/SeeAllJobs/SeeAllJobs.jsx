import React, { useEffect, useState } from 'react';
import { FaRegClock, FaUsers, FaMoneyBillWave, FaInfoCircle, FaUserGraduate } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SeeAllJobs = () => {
    const [jobsData, setJobsData] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [jobType, setJobType] = useState('');
    const [experience, setExperience] = useState('');
    const [minSalary, setMinSalary] = useState('');
    const [maxSalary, setMaxSalary] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:4000/jobs')
            .then(res => res.json())
            .then(data => {
                setJobsData(data);
                setFilteredJobs(data);
            })
            .catch(error => console.error('Error:', error));
    }, []);

    useEffect(() => {
        filterJobs();
    }, [searchQuery, jobType, experience, minSalary, maxSalary, jobsData]);
    
    const filterJobs = () => {
        const filtered = jobsData
            .filter(job => {
                const query = searchQuery.toLowerCase();
                return (
                    job.job_title?.toLowerCase().includes(query) ||
                    job.category?.toLowerCase().includes(query) ||
                    job.location?.toLowerCase().includes(query)
                );
            })
            .filter(job => {
                return jobType ? job.job_type?.toLowerCase() === jobType.toLowerCase() : true;
            })
            
            .filter(job => {
                return experience ? job.experience_level?.toLowerCase() === experience.toLowerCase() : true;
            })
        
            .filter(job => {
                let min = 0, max = 0;
    
                if (typeof job.salary_range === 'string') {
                    [min, max] = job.salary_range.split('-').map(n => parseInt(n));
                } else if (typeof job.salary_range === 'object') {
                    min = job.salary_range.min || 0;
                    max = job.salary_range.max || 0;
                }
    
                const meetsMin = minSalary ? max >= parseInt(minSalary) : true;
                const meetsMax = maxSalary ? min <= parseInt(maxSalary) : true;
    
                return meetsMin && meetsMax;
            });
    
        setFilteredJobs(filtered);
    };
    

    const handleJobDetails = (id) => {
        navigate(`/jobs/${id}`);
    };

    return (
        <div className='mb-12'>
            <div className="text-center py-10 px-4 md:px-8 lg:px-16 bg-white">
                <h2 className="text-center text-3xl font-bold mb-8">Available Job Listings</h2>
            </div>

            <div className="max-w-6xl mx-auto mb-8 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <input
                    type="text"
                    placeholder="Search by any Jobs"
                    className="border rounded-lg px-4 py-2 w-full"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />

                <select
                    className="border rounded-lg px-4 py-2 w-full"
                    onChange={e => setJobType(e.target.value)}
                >
                    <option value="">All Job Types</option>
                    <option value="fulltime">Full Time</option>
                    <option value="part-time">Part Time</option>
                    <option value="hybrid">Hybrid</option>
                </select>

                <select
                    className="border rounded-lg px-4 py-2 w-full"
                    onChange={e => setExperience(e.target.value)}
                >
                    <option value="">All Experience Levels</option>
                    <option value="entry">Entry</option>
                    <option value="internship">Internship</option>
                    <option value="junior">Junior</option>
                    <option value="midlevel">Midlevel</option>
                    <option value="senior">Senior</option>
                </select>

                <div className="flex flex-col sm:flex-row gap-4">
                    <input
                        type="number"
                        placeholder="Min Salary"
                        value={minSalary}
                        onChange={(e) => setMinSalary(e.target.value)}
                        className="border px-3 py-2 rounded-md w-full"
                    />
                    <input
                        type="number"
                        placeholder="Max Salary"
                        value={maxSalary}
                        onChange={(e) => setMaxSalary(e.target.value)}
                        className="border px-3 py-2 rounded-md w-full"
                    />
                </div>
            </div>

            <div className="py-10 px-4 bg-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {filteredJobs.map((job) => (
                        <div
                            key={job._id}
                            className="bg-blue-50 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 flex flex-col justify-between"
                        >
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800">{job.job_title}</h3>
                                <p className="text-sm text-gray-500 mt-1">{job.location}</p>
                                <div className="flex flex-wrap justify-center gap-2 mt-2 text-sm text-gray-600">
                                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded">{job.job_type}</span>
                                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">{job.category}</span>
                                </div>

                                <div className="text-sm text-gray-600 space-y-2 mt-4">
                                    <p className="flex items-center gap-2">
                                        <FaRegClock className="text-orange-500" />
                                        <strong>Deadline:</strong> {job.deadline}
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <FaUsers className="text-blue-500" />
                                        <strong>Total Applicants:</strong> {job.total_applicants}
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <FaUserGraduate className="text-purple-500" />
                                        <strong>Experience:</strong> {job.experience_level}
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <FaMoneyBillWave className="text-green-500" />
                                        <strong>Salary:</strong> {job.salary_range} {job.currency}
                                    </p>
                                </div>
                            </div>

                            <button
                                onClick={() => handleJobDetails(job._id)}
                                className="mt-6 w-full py-2 bg-cyan-500 text-white font-semibold rounded-lg hover:bg-[#206ab1] transition flex items-center justify-center gap-2"
                            >
                                <FaInfoCircle className="text-lg" />
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
