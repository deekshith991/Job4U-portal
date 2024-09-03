import React from 'react';
import JobBtns from './JobBtns';

const JobCard = ({ jobData, onViewMore, onBack }) => {
    const { company, position, salary, lastDate } = jobData; // Destructure the job data

    return (
        <div className="JobCard" style={{ width: onBack ? '100%' : 'auto' }}> {/* Expand card if onBack is provided */}
            <div className="CompanyPic">
                <img src="logo192.png" alt="Company Logo" />
            </div>

            <div className="JobDetails">
                <h5 id='companyname'>Company Name: {company || "Unknown Company"}</h5>
                <p id='companydetails'>Position: {position || "No Position"}</p>
                <p id='companydetails'>Salary: ${salary || "N/A"}</p>
                <p id='companydetails'>Last Date: {lastDate || "No Deadline"}</p>

                <div className="button-group">
                    <JobBtns onViewMore={onViewMore} onBack={onBack} /> {/* Pass both onViewMore and onBack */}
                </div>
            </div>
        </div>
    );
};

export default JobCard;

