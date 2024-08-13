import React, { useEffect, useState } from 'react';
import HeaderSec from "../Sections/HeaderSec";
import JobCard from "../Sections/JobCard";
import { getJobs } from "../services/UserService";

const JobGallery = () => {

    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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

    return (
        <div className="JobGallery">
            <HeaderSec />
            <h1 className="TITLE">Jobs Latest</h1>

            <div className="Gallery">
                {jobs.length > 0 ? (
                    jobs.map(job => (
                        <JobCard
                            key={job._id}
                            companyName={job.companyName || "Unknown Company"}
                            position={job.position || "No Position"}
                            salary={job.salary || 0}
                            lastDate={job.lastDate || "No Deadline"}
                        />
                    ))
                ) : (
                    <p>No jobs available.</p>
                )}
            </div>
        </div>
    );
};

export default JobGallery;
