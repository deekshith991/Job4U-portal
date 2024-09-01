import React from 'react';

const JobCard = ({ companyName, position, salary, lastDate }) => {
    return (
        <div className="JobCard">
            <div className="CompanyPic">
                <img src="logo192.png" alt="Company Logo" />
            </div>

            <div className="JobDetails">
                <h3>Company Name: {companyName}</h3>
                <h4>Position: {position}</h4>
                <h4>Salary: ${salary}</h4> {/* Added currency symbol for better clarity */}
                <h4>Last Date: {lastDate}</h4>

                <div className="button-group">
                    <button disabled className="ApplyBtn">View More</button>
                    <button disabled className="ApplyBtn">Apply</button>
                </div>

            </div>
        </div>
    );
};

export default JobCard;
