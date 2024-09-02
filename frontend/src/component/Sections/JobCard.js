import React from 'react';
import JobBtns from './JobBtns';

const JobCard = ({ companyName, position, salary, lastDate }) => {
    return (
        <div className="JobCard">
            <div className="CompanyPic">
                <img src="logo192.png" alt="Company Logo" />
            </div>

            <div className="JobDetails">
                <h5 id='companyname' >Company Name: {companyName}</h5>
                <p id='companydetails' >Position: {position}</p>
                <p id='companydetails' >Salary: ${salary}</p> {/* Added currency symbol for better clarity */}
                <p id='companydetails' >Last Date: {lastDate}</p>

                <div className="button-group">
                    <JobBtns />
                </div>

            </div>
        </div>
    );
};

export default JobCard;
