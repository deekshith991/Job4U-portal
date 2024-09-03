import '../css/jobDisplay.css';
import JobBtnns from './JobBtns';
const JobDisplay = ({ jobData, onBack }) => {
    const { company, position, salary, lastDate, jd } = jobData;

    console.log(jobData);
    return (
        <div className="jobview">
            <h1>{company}</h1>
            <h3>position: {position}</h3>
            <h4>salary: ${salary}</h4>
            <h4>Last Date: {lastDate}</h4>
            <p><h5>Job Description : </h5>{jd}</p>

            <div>
                <JobBtnns onBack={onBack} />
            </div>
        </div>
    )
}

export default JobDisplay;
