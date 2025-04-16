import React from 'react';

const AddJobs = () => {
    const handleSubmitForm = (e) => {
        e.preventDefault();
        const form = e.target;

        const addJobs = {
            job_title: form.title.value,
            location: form.location.value,
            job_type: form.job_type.value,  
            category: form.category.value,
            deadline: form.applicationDeadline.value, 
            job_description: form.description.value,
            responsibilities: form.responsibilities.value,
            requirement: form.requirements.value,
            salary_range: {
                min: parseInt(form.min_salary.value),
                max: parseInt(form.max_salary.value),
                currency: form.currency.value,
            },
            total_applicants: 0,
            status: "active"
        };

        fetch('http://localhost:4000/Jobs', {
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
            .catch((err) => console.error('Error:', err));
    };

    return (
        <div className="max-w-3xl mx-auto p-6">
            <div className="bg-blue-50 shadow-lg p-6">
                <h2 className="text-3xl font-bold mb-8 text-center text-black">Add New Job</h2>
                <form onSubmit={handleSubmitForm} className="space-y-6">
                    <div className="flex justify-center items-center">
                        <div className="space-y-6 w-2/4 mx-auto">
                            <input name="title" type="text" placeholder="Job Title" required className="border p-2 w-full" />
                            <input name="location" type="text" placeholder="Location" required className="border p-2 w-full" />
                            <input name="job_type" type="text" placeholder="Job Type" required className="border p-2 w-full" />
                            <input name="category" type="text" placeholder="Category" required className="border p-2 w-full" />
                            <input name="applicationDeadline" type="date" required className="border p-2 w-full" />
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold">Job Description</h3>
                        <textarea name="description" placeholder="Description" rows={3} required className="border p-2 w-full mt-2" />
                        <textarea name="responsibilities" placeholder="Responsibilities (one per line)" rows={3} className="border p-2 w-full mt-2" />
                        <textarea name="requirements" placeholder="Requirements (one per line)" rows={3} className="border p-2 w-full mt-2" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <input name="min_salary" min={0} type="number" placeholder="Minimum Salary" required className="border p-2 w-full" />
                        <input name="max_salary" min={0} type="number" placeholder="Maximum Salary" required className="border p-2 w-full" />
                    </div>

                    <button type="submit" className="w-full bg-blue-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 transition-all">
                        Submit Job
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddJobs;
