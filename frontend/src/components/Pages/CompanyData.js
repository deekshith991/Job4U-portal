

const Companydata = () => {

    return (
        <div className="CompanyData">

            <div className="ProfileData">
                <h1>Update Profile</h1>
                <form>

                    <div className="Input">
                        <label>Conpany Name: </label>
                        <input placeholder="First name" />
                    </div>

                    <div className="Input">
                        <label>Email: </label>
                        <input disabled placeholder="need to work" />
                    </div>

                    <div className="Input">
                        <label>Secondary email: </label>
                        <input placeholder="need to work" />
                    </div>

                    <div className="Input">
                        <label>Field of company: </label>
                        <select>
                            <option>software</option>
                        </select>
                    </div>

                    <div className="Input">
                        <label>Type of Company: </label>
                        <select>
                            <option>startUp</option>
                        </select>
                    </div>

                </form>
                <button type="submit" className="SaveBtn">Save</button>

            </div>
        </div>
    )
}

export default Companydata;