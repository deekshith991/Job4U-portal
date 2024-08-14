import React, { useEffect, useState } from 'react';
import JobCard from "../Sections/JobCard";
import { useAuth } from '../services/AuthContext';
import axios from 'axios';

const CardDisplayer = () => {

    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { authData, API_URL } = useAuth();

    const getJobsss = async () => {

        try {
            let data = "";
            if (authData.account === "Employer") {
                data = authData.uid;
            }

            const response = await axios.get(`${API_URL}/api/jobs`, data);

            // console.log("get", response.data);
            return response.data;

        } catch (error) {
            console.log(error);
            console.log("error in getJobs api func");
        }
    }


    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const jobsData = await getJobsss();
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
        <div className="Gallery">
            {jobs.length > 0 ? (
                jobs.map(job => (
                    <JobCard
                        key={job._id}
                        companyName={job.companyName || "Unknown Company"}
                        position={job.position || "No Position"}
                        salary={job.salary || " N/A"}
                        lastDate={job.lastDate || "No Deadline"}
                    />
                ))
            ) : (
                <p>No jobs available.</p>
            )}
        </div>
    );
};

export default CardDisplayer;
