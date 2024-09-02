import '../css/jobsCard.css';
import { useState, useEffect } from 'react';
import JobCard from './JobCard';
import { getJobs } from '../service/UserService';

const JobLists = () => {

    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const jobsData = await getJobs();
                // console.log("eff", jobsData);
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

    return (
        <div className="JobCardsContainer">
            {jobs.length > 0 ? (
                jobs.map(job => (
                    <JobCard
                        key={job._id}
                        companyName={job.company || "Unknown Company"}
                        position={job.position || "No Position"}
                        salary={job.salary || " N/A"}
                        lastDate={job.lastDate || "No Deadline"}
                    />
                ))
            ) : (
                <p>No jobs available.</p>
            )}
        </div>
    )
}

export default JobLists;
