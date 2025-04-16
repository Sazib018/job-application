import React, { useEffect, useState } from "react";
import { FaRegClock, FaUsers, FaMoneyBillWave, FaInfoCircle,} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const JobCard = () => {
  const [jobData, setJobData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:4000/jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, []);

  const handleJobDetails = (id) => {
    navigate(`/jobs/${id}`);
  };

  if (loading)
    return (
      <div className="rounded-lg p-4 bg-gray-200 animate-pulse max-w-sm mx-auto mt-20">
        <div className="flex space-x-4 py-6">
          <div className="flex-1 space-y-4 py-1">
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-300 rounded"></div>
              <div className="h-4 bg-gray-300 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    );

  const jobsToShow = jobData.slice(0, 4);

  return (
    <div className="py-10 px-4 bg-gray-100">
      <h2 className="text-center text-3xl font-bold mb-8">
        Available Job Listings
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {jobsToShow.map((job) => (
          <div
            key={job._id}
            className="bg-blue-50 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6"
          >
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {job.job_title}
              </h3>
              <p className="text-sm text-gray-500 mt-1">{job.location}</p>
              <div className="flex flex-wrap justify-center gap-2 mt-2 text-sm text-gray-600">
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded">
                  {job.job_type}
                </span>
                <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">
                  {job.category}
                </span>
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
              className="mt-4 w-full py-2 bg-cyan-500 text-white font-semibold rounded-lg hover:bg-[#206ab1] transition flex items-center justify-center gap-2"
            >
              <FaInfoCircle className="text-lg" />
              Job Details
            </button>
          </div>
        ))}
      </div>

      <div className="text-center mt-6">
        <Link to="/seeAllJobs">
          <button className="px-6 py-2 bg-sky-500 text-white rounded-lg hover:bg-blue-600 transition">
            See All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
