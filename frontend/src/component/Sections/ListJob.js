// import css 
import '../css/LoginPage.css';
import { useState } from 'react';
import { useAuth } from '../service/AuthContext';
import { PostJob } from '../service/CompanyService';


const ListJob = () => {

    const { authData } = useAuth();

    const [JobData, setJobData] = useState({
        uid: authData.uid,
        position: "",
        salary: "",
        lastDate: "",
        jd: ""
    });

    const handlechange = (e) => {
        const { name, value } = e.target;
        setJobData({ ...JobData, [name]: value });
    }

    const handlesubmit = async (e) => {
        e.preventDefault();

        console.log(JobData);
        const resp = await PostJob(JobData);

        if (resp.success) {
            alert("Job issued");
            setJobData({
                position: "",
                salary: "",
                lastDate: "",
                jd: ""
            });
        }

    }

    return (
        <div className="jobform">
            <form onSubmit={handlesubmit}>
                <div className="Input">
                    <label>Position :</label>
                    <input placeholder="Position" type='text' required name="position" value={JobData.position} onChange={handlechange} />
                </div>

                <div className="Input">
                    <label>Salary :</label>
                    <input placeholder="Salary" name='salary' type='number' value={JobData.salary} onChange={handlechange} />
                </div>

                <div className="Input">
                    <label>Last Date :</label>
                    <input placeholder="DD/MM/YYY" type='date' name='lastDate' value={JobData.lastDate} onChange={handlechange} />
                </div>

                <div className="Input">
                    <label>Job Description :</label>
                    <input placeholder="Description" type='text' name='jd' value={JobData.jd} onChange={handlechange} />
                </div>
                <button className="IssueJobBtn" type='submit'>Issue</button>
            </form>

        </div>
    )
}

export default ListJob;
