

const JobCard = () => {
    const Name = "gog";
    const posi = "sde";
    const sala = 2333;
    const lastdate = "23223";

    return (
        <div className="JobCard">

            <div className="CompanyPic">
                <img src="logo192.png"></img>
            </div>

            <div className="JobDetails">
                <h3>Company Name: {Name}</h3>
                <h4>Position: {posi}</h4>
                <h4>Salary: {sala}</h4>
                <h4>Last Date: {lastdate}</h4>
                <button disabled className="ApplyBtn">Apply</button>
            </div>
        </div>

    )
}

export default JobCard;