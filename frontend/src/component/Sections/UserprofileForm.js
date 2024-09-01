// import '../css/*';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../service/AuthContext";
import { UserProfileUpdate } from "../service/UserService";


const UserprofileForm = () => {

    const navigate = useNavigate();
    const { authData } = useAuth();

    const [UserData, setUserData] = useState({
        uid: authData.uid,
        firstName: "",
        lastName: "",
        email: authData.email,
        personelMail: "",
        qualification: "",
        specialization: "",
        percentage: ""
    });

    const changeHandle = (e) => {
        const { name, value } = e.target;
        setUserData({ ...UserData, [name]: value })
    }

    const submitHandle = async (e) => {
        e.preventDefault();

        console.log(UserData);

        const resp = await UserProfileUpdate(UserData);

        console.log(resp.status);
        if (resp.success) {
            // alert("Successfully updated");
            navigate('/home');
        } else {
            alert("please use another mail for Registration");
        }
        // console.log(resp);
    }

    return (
        <div className="userprofileform">
            <form onSubmit={submitHandle}>

                <div className="Input">
                    <label>First Name: </label>
                    <input placeholder="First name" type="text" name="firstName" value={UserData.firstName} onChange={changeHandle} />
                </div>

                <div className="Input">
                    <label>Last Name: </label>
                    <input placeholder="Last name" type="text" name="lastName" value={UserData.lastName} onChange={changeHandle} />
                </div>

                <div className="Input">
                    <label>Email: </label>
                    <input disabled placeholder={authData.email} id="default-disabled-input" />
                </div>

                <div className="Input">
                    <label>Personel email: </label>
                    <input placeholder="Additional mail" type="email" name="personelMail" value={UserData.personelMail} onChange={changeHandle} />
                </div>

                <div className="Input">
                    <label>Qualification: </label>
                    <select name="qualification" value={UserData.qualification} onChange={changeHandle}>
                        <option value="">choose Qualification</option>
                        <option value="B.tech">Btech</option>
                        <option value="Degree">Degree</option>
                    </select>
                </div>

                <div className="Input">
                    <label>Specalization: </label>
                    <select name="specialization" value={UserData.specialization} onChange={changeHandle}>
                        <option value="">choose the specialization</option>
                        <option value="EEE">EEE</option>
                        <option value="cse">cse</option>
                        <option value="Arts">Arts</option>

                    </select>
                </div>

                <div className="Input">
                    <label>Percentage: </label>
                    <input placeholder="percentage %" name="percentage" value={UserData.percentage} onChange={changeHandle} />
                </div>

                <button type="submit" className="SaveBtn">Save</button>

            </form>
        </div>
    )
}

export default UserprofileForm;