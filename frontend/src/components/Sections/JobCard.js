import React from 'react';
import PropTypes from 'prop-types'; // Optional, but good for type checking

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
                <button disabled className="ApplyBtn">Apply</button>
            </div>
        </div>
    );
};

// Optional: Add PropTypes for validation
JobCard.propTypes = {
    companyName: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    salary: PropTypes.number,
    lastDate: PropTypes.string
};

// Optional: Set default props
JobCard.defaultProps = {
    salary: 0, // Default salary if not provided
    lastDate: 'N/A' // Default last date if not provided
};

export default JobCard;
