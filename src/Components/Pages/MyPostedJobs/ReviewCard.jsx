import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const ReviewCard = ({ job }) => {
  const { _id, userName, userEmail, submitted_At, status } = job;

  const mutation = useMutation({
    mutationFn: ({ status, id }) => {
      return axios.put(`http://localhost:4000/applications/update/${id}`, { status });
    },
    onSuccess: () => {
      console.log("Status updated successfully!");
    },
    onError: (error) => {
      console.error(" Error updating status:", error);
    },
  });

  const handleStatusChange = (newStatus) => {
    mutation.mutate({ status: newStatus, id: _id });
  };

  const handleWithdraw = () => {
    console.log("Withdraw logic here for ID:", _id);
  };

  return (
    <div className="bg-green-100 max-w-[550px] mx-auto border rounded-2xl p-6 shadow-md space-y-4">
      {/* Top Section */}
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-semibold text-gray-800"><span>Name: </span>{userName}</h3>
          <p className="text-sm text-gray-500"><span className='text-base font-medium'>Email: </span>{userEmail}</p>
          <p className="text-sm text-gray-500">Submitted: {new Date(submitted_At).toLocaleString()}</p>
        </div>

        {/* Current Status Badge */}
        <span className={`px-3 py-1 text-sm rounded-full font-medium ${
          status === 'ShortListed' ? 'bg-yellow-100 text-yellow-800' :
          status === 'Hired' ? 'bg-green-100 text-green-800' :
          status === 'Interview Scheduled' ? 'bg-blue-100 text-blue-800' :
          'bg-red-100 text-red-800'
        }`}>
          {status}
        </span>
      </div>


      <div className="flex flex-col md:flex-row justify-between gap-4 items-center">
        {/* Dropdown */}
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium text-gray-700">Update Status:</label>
          <select
            onChange={(e) => handleStatusChange(e.target.value)}
            defaultValue={status}
            className="border border-blue-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option disabled value="">Select</option>
            <option value="Rejected">Rejected</option>
            <option value="ShortListed">ShortListed</option>
            <option value="Interview Scheduled">Interview Scheduled</option>
            <option value="Hired">Hired</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
