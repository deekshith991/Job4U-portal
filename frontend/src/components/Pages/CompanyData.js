import { useState } from "react";

const Companydata = () => {
    const [CompanyData, setCompanyData] = useState({
        name: "",
        email: "default mail",
        secondaryMail: "",
        field: "",
        type: "",
    });

    const changeHandle = (e) => {
        const { name, value } = e.target;
        setCompanyData({ ...CompanyData, [name]: value })
    }

    const submitHandle = async (e) => {
        e.preventDefault();

        console.log(CompanyData);

        alert("success");
    }

    return (
        <div className="CompanyData">

            <div className="ProfileData">
                <h1>Update Profile</h1>
                <form onSubmit={submitHandle}>

                    <div className="Input">
                        <label>Conpany Name: </label>
                        <input placeholder="First name" name="name" value={CompanyData.name} onChange={changeHandle} />
                    </div>

                    <div className="Input">
                        <label>Email: </label>
                        <input disabled placeholder="need to work" name="email" value={CompanyData.email} onChange={changeHandle} />
                    </div>

                    <div className="Input">
                        <label>Secondary email: </label>
                        <input placeholder="need to work" name="secondaryMail" value={CompanyData.secondaryMail} onChange={changeHandle} />
                    </div>

                    <div className="Input">
                        <label>Field of company: </label>
                        <select name="field" value={CompanyData.field} onChange={changeHandle}>
                            <option value="">choose field of work</option>
                            <option value="software">software</option>
                            <option value="designer">designer</option>
                            <option value="management">management</option>
                        </select>
                    </div>

                    <div className="Input">
                        <label>Type of Company: </label>
                        <select name="type" value={CompanyData.type} onChange={changeHandle}>
                            <option value="">choose the type</option>
                            <option value="start-up">startUp</option>
                            <option value="MNC">MNC</option>
                            <option value="GOVT">GOVT</option>

                        </select>
                    </div>

                    <button type="submit" className="SaveBtn">Save</button>

                </form>

            </div>
        </div>
    )
}

export default Companydata;