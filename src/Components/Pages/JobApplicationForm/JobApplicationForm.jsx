import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useParams } from "react-router-dom";

const JobApplicationForm = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const application = {
      userName: user?.displayName,
      userEmail: user?.email,
      userPhoto: user?.photoURL,
      job_id: id,
      job_title: form.job_title.value,
      job_type: form.job_type.value,
      category: form.category.value,
      location: form.location.value,
      deadline: form.deadline.value,
      careerSummary: form.careerSummary.value,
      skills: form.skills.value,
      experience: form.experience.value,
      whyHire: form.whyHire.value,
      minSalary: form.minSalary.value,
      maxSalary: form.maxSalary.value,
      portfolio: form.portfolio.value,
      linkedin: form.linkedin.value,
      resume: form.resume.value,
      readyToWork: form.readyToWork.checked,
      skillsAligned: form.skillsAligned.checked,
      confident: form.confident.checked,
      submitted_At: new Date().toISOString(),
      status: "pending"
    };

    console.log(application);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-4xl mx-auto p-8 bg-blue-50 rounded-2xl shadow-xl space-y-6 mt-10"
    >
      <h2 className="text-3xl font-bold text-blue-600 mb-4">Apply for the Job</h2>

      <textarea
        name="careerSummary"
        rows="4"
        placeholder="Career Summary"
        className="w-full border border-blue-300 rounded-lg p-4"
        required
      />

      <input
        type="text"
        name="skills"
        placeholder="Skills (comma separated)"
        className="w-full border border-blue-300 rounded-lg p-4"
        required
      />

      <input
        type="text"
        name="experience"
        placeholder="Experience"
        className="w-full border border-blue-300 rounded-lg p-4"
        required
      />

      <textarea
        name="whyHire"
        rows="3"
        placeholder="Why should we hire you?"
        className="w-full border border-blue-300 rounded-lg p-4"
        required
      />

      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="number"
          name="minSalary"
          placeholder="Minimum Salary"
          className="w-full border border-blue-300 rounded-lg p-4"
          required
        />
        <input
          type="number"
          name="maxSalary"
          placeholder="Maximum Salary"
          className="w-full border border-blue-300 rounded-lg p-4"
          required
        />
      </div>

      <input
        type="url"
        name="portfolio"
        placeholder="Portfolio Link"
        className="w-full border border-blue-300 rounded-lg p-4"
      />
      <input
        type="url"
        name="linkedin"
        placeholder="LinkedIn Profile"
        className="w-full border border-blue-300 rounded-lg p-4"
      />
      <input
        type="url"
        name="resume"
        placeholder="Resume Link"
        className="w-full border border-blue-300 rounded-lg p-4"
        required
      />

      <div className="space-y-3">
        <label className="flex gap-3 items-center">
          <input type="checkbox" name="readyToWork" className="accent-blue-500" />
          Ready to work on preferred location
        </label>
        <label className="flex gap-3 items-center">
          <input type="checkbox" name="skillsAligned" className="accent-blue-500" />
          My skills are aligned with job requirements
        </label>
        <label className="flex gap-3 items-center">
          <input type="checkbox" name="confident" className="accent-blue-500" />
          I believe I can fulfill all job responsibilities
        </label>
      </div>

      {/* Hidden job info fields */}
      <input type="hidden" name="job_title" value="Backend Developer" />
      <input type="hidden" name="job_type" value="Full-time" />
      <input type="hidden" name="category" value="Software" />
      <input type="hidden" name="location" value="Remote" />
      <input type="hidden" name="deadline" value="2025-05-15" />

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold py-3 rounded-xl transition duration-300"
      >
        Apply Now
      </button>
    </form>
  );
};

export default JobApplicationForm;
