import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';

const AddJobs = () => {

    const mutation = useMutation({
        mutationFn: (data)=> toast.promise(
           axios.post('http://localhost:4000/jobs', data),
           {
            loading: 'Submitting...',
            success: 'Submitted successfully!',
            error: 'Submission failed.',
          }
        )
    })

    const handleSubmitForm = (e) => {
        e.preventDefault();
        const form = e.target;

        const addJobs = {
            jobTitle: form.jobTitle.value,
            location: form.location.value,
            job_type: form.job_type.value,
            category: form.category.value,
            deadline: form.deadline.value,
            jobDescription: form.jobDescription.value,
            responsibility: form.responsibility.value,
            requirement: form.requirements.value,
            companyInformation: form.companyInformation.value,
            total_applicants: 0,
            status: "active"
        };
        mutation.mutate(addJobs)

      /*   fetch('http://localhost:4000/jobs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(addJobs),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log('Job added:', data);
                form.reset();
            })
            .catch((err) => console.error('Error:', err)); */
    };

    return (
        <div className="max-w-3xl mx-auto p-6">
            <div className="bg-blue-50 shadow-lg p-6 rounded-lg">
                <h2 className="text-3xl font-bold mb-8 text-center text-black">Add New Job</h2>
                <form onSubmit={handleSubmitForm} className="space-y-6">
                    <div className="flex justify-center items-center">
                        <div className="space-y-6 w-2/4 mx-auto">
                            <div>
                                <label className="block font-medium mb-1">Job Title</label>
                                <input name="jobTitle" type="text" placeholder="Job Title" required className="border p-2 w-full" />
                            </div>
                            <div>
                                <label className="block font-medium mb-1">Location</label>
                                <input name="location" type="text" placeholder="Location" required className="border p-2 w-full" />
                            </div>
                            <div>
                                <label  className="block font-medium mb-1">Job Type</label>
                                <input name="job_type" type="text" placeholder="Job Type" required className="border p-2 w-full" />
                            </div>
                            <div>
                                <label  className="block font-medium mb-1">Category</label>
                                <input  name="category" type="text" placeholder="Category" required className="border p-2 w-full" />
                            </div>
                            <div>
                                <label  className="block font-medium mb-1">Application Deadline</label>
                                <input  name="deadline" type="date" required className="border p-2 w-full" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-2">Job Description</h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block font-medium mb-1">Description</label>
                                <textarea name="jobDescription" placeholder="Description" rows={3} required className="border p-2 w-full" />
                            </div>
                            <div>
                                <label className="block font-medium mb-1">Responsibilities</label>
                                <textarea name="responsibility" placeholder="Responsibilities" rows={3} className="border p-2 w-full" />
                            </div>
                            <div>
                                <label  className="block font-medium mb-1">Requirements</label>
                                <textarea  name="requirements" placeholder="Requirements" rows={3} className="border p-2 w-full" />
                            </div>
                            <div>
                                <label className="block font-medium mb-1">Company Information</label>
                                <textarea name="companyInformation" placeholder="Company Info" rows={3} className="border p-2 w-full" required />
                            </div>
                        </div>
                    </div>

                    <button type="submit" className="w-full bg-blue-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 transition-all rounded-md">
                        Submit Job
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddJobs;
