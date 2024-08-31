import Buttons from "./Buttons";
import { useAuth } from "../service/AuthContext";
import { useNavigate } from "react-router-dom";

const NavigationBar = () => {

    const { authData } = useAuth();

    return (
        <div className="NavigationBar">
            {!authData.isLoggeIn ?
                (
                    <LoginNav />
                )
                :
                (
                    <UserNav />
                )
            }
        </div>
    )
}


const LoginNav = () => {
    const navigate = useNavigate();

    const GotoLogin = () => {
        navigate('/login');
    }

    const GotoJobs = () => {
        navigate('/jobs');
    }

    return (
        <div className="NavigationBar">
            <Buttons>check</Buttons>
            <Buttons onClick={GotoJobs}>Gallery</Buttons>
            <Buttons onClick={GotoLogin} color="violet">Log In</Buttons>
        </div>
    )
}

const UserNav = () => {
    return (
        <div className="NavigationBar">
            <Buttons name="Log Out" />
        </div>
    )
}

const CompNav = () => {
    return (
        <div className="NavigationBar">
            <Buttons name="Log Out" />
        </div>
    )
}

export default NavigationBar;