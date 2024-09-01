// import css
import { useState } from "react";
import Buttons from "../Sections/Buttons";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../service/AuthContext";
import { CompanyProfileUpdate } from "../service/CompanyService";


const CompanyprofileForm = () => {

    const navigate = useNavigate();
    const { authData } = useAuth();

    const [CompanyData, setCompanyData] = useState({
        uid: authData.uid,
        name: "",
        email: authData.email,
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

        console.log(authData);

        console.log(CompanyData);
        console.log(CompanyData.uid);

        const resp = await CompanyProfileUpdate(CompanyData);

        if (resp.success) {
            // alert("success");
            navigate('/home');
        }
        else {
            console.log(resp);
            alert("Registration not done");
        }

    }

    return (

        <div className="companyprofileform">
            <form onSubmit={submitHandle}>

                <div className="Input">
                    <label>Conpany Name: </label>
                    <input placeholder="First name" name="name" value={CompanyData.name} onChange={changeHandle} />
                </div>

                <div className="Input">
                    <label>Email: </label>
                    <input disabled placeholder={authData.email} id="default-disabled-input" />
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

                <Buttons type="submit">Save</Buttons>

            </form>

        </div>
    )
}

export default CompanyprofileForm;