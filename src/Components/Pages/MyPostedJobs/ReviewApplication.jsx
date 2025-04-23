import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import ReviewCard from './ReviewCard';

const ReviewApplication = () => {
    const {id} = useParams()
    const {data, isSuccess, refetch} = useQuery({
        queryKey: ['myAplication', id],
        queryFn: ({ queryKey }) => {
          return axios.get(`http://localhost:4000/applications/${queryKey[1]}`);
        }
      });

console.log(data?.data);


    return (
        <div>
            <div className="max-w-6xl mx-auto mt-10">
        <h2 className="text-3xl text-center font-bold mb-6">:Submitted Applications:</h2>
        <div className="overflow-x-auto">
         
           
              {isSuccess&& data?.data.map((job) => <ReviewCard key={job._id} job={job}></ReviewCard>)}
              {isSuccess&& data.data.length === 0 && (
                <tr>
                  <td colSpan="5" className="py-4 px-4 text-center text-gray-500">
                    No applications found.
                  </td>
                </tr>
              )}
            
        
        </div>
      </div>
        </div>
    );
};

export default ReviewApplication;