import '../css/jobsCard.css';
import { useState, useEffect } from 'react';
import JobCard from './JobCard';
import { getJobs } from '../service/UserService';
import JobDisplay from './JobDisplay.js';

const JobLists = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedJob, setSelectedJob] = useState(null); // State for selected job

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const jobsData = await getJobs();
                setJobs(jobsData);
            } catch (err) {
                setError("Failed to fetch jobs. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchJobs();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    // If a job is selected, display only that job
    if (selectedJob) {
        return (
            <div className="JobCardsContainer">
                <JobDisplay jobData={selectedJob} onBack={()=> setSelectedJob(null)} />
            </div>
        );
    }

    return (
        <div className="JobCardsContainer">
            {jobs.length > 0 ? (
                jobs.map(job => (
                    <JobCard
                        key={job._id}
                        jobData={job} // Pass the entire job data
                        onViewMore={() => setSelectedJob(job)} // Set selected job on "View More"
                    />
                ))
            ) : (
                <p>No jobs available.</p>
            )}
        </div>
    );
}

export default JobLists;

