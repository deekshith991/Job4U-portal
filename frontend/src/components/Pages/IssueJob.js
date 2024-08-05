

const IssueJob = () => {


    return (
        <div className="IssueJob">
            <form>
                <div className="Input">
                    <label>Position :</label>
                    <input placeholder="Position" />
                </div>

                <div className="Input">
                    <label>Salary :</label>
                    <input placeholder="Salary" />
                </div>

                <div className="Input">
                    <label>Last Date :</label>
                    <input placeholder="DD/MM/YYY" />
                </div>

                <div className="Input">
                    <label>Job Description :</label>
                    <input placeholder="Description" />
                </div>
            </form>

            <button className="IssueJobBtn">Issue</button>
        </div>
    )
}

export default IssueJob;