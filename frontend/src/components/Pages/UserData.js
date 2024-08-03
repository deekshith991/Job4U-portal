

const Userdata = () => {

    return (
        <div className="UserData">

            <div className="ProfileData">
                <h1>Update Profile</h1>
                <form>

                    <div className="Input">
                        <label>First Name: </label>
                        <input placeholder="First name" />
                    </div>

                    <div className="Input">
                        <label>Last Name: </label>
                        <input placeholder="Last name" />
                    </div>

                    <div className="Input">
                        <label>Email: </label>
                        <input disabled placeholder="need to work" />
                    </div>

                    <div className="Input">
                        <label>Personel email: </label>
                        <input placeholder="need to work" />
                    </div>

                    <div className="Input">
                        <label>Qualification: </label>
                        <select>
                            <option>Btech</option>
                        </select>
                    </div>

                    <div className="Input">
                        <label>Stream: </label>
                        <select>
                            <option>EEE</option>
                        </select>
                    </div>

                    <div className="Input">
                        <label>Percentage: </label>
                        <input placeholder="percentage %" />
                    </div>

                </form>
                <button type="submit" className="SaveBtn">Save</button>

            </div>
        </div>
    )
}

export default Userdata;