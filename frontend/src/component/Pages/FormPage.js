// import './.css';
import CompanyprofileForm from "../Sections/CompanyprofileForm";
import UserprofileForm from "../Sections/UserprofileForm";
import { useAuth } from "../service/AuthContext"


const FormPage = () => {

    alert("Update info carefully can't edit them once saved");

    const { authData } = useAuth() || {};

    let account = false;
    if (authData.account === "JobSeeker")
        account = true;
    else
        account = false;

    return (
        <div className="baseformpage">
            {account ?
                (<div className="baseCard">
                    <h1>Update Profile Data</h1>
                    <UserprofileForm />
                </div>)
                :
                (<div className="baseCard">
                    <h1>Update Profile Data</h1>
                    <CompanyprofileForm />
                </div>)
            }
        </div>
    )
}

export default FormPage;