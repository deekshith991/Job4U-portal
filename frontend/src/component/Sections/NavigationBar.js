import Buttons from "./Buttons";
import { useAuth } from "../service/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const NavigationBar = () => {
    const { authData } = useAuth();
    const [islogin, setislogin] = useState(authData.isLoggedIn);

    useEffect(() => {
        setislogin(authData.isLoggedIn);
    }, [authData]);

    return (
        <div className="NavigationBar">
            {!islogin ? (
                <div>
                    {/* <h1>Not Logged In</h1> */}
                    <LoginNav />
                </div>
            ) : authData.account === 'JobSeeker' ? (
                <div>
                    {/* <h1>Logged In as Jobseeker</h1> */}
                    <UserNav />
                </div>
            ) : authData.account === 'Employer' ? (
                <div>
                    {/* <h1>Logged In as Employer</h1> */}
                    <CompNav />
                </div>
            ) : (
                <div>
                    <h1>Account type not recognized</h1>
                </div>
            )}
        </div>
    );
}















const LoginNav = () => {
    const navigate = useNavigate();

    const GotoLogin = () => {
        navigate('/login');
    }
    const GotoJobs = () => {
        navigate('/jobs');
    }
    const GotoRegister = () => {
        navigate('/register');
    }

    return (
        <div className="NavigationBar">
            <Buttons onClick={GotoJobs}>Gallery</Buttons>
            <Buttons onClick={GotoLogin} color="violet">Log In</Buttons>
            <Buttons onClick={GotoRegister}>Register</Buttons>
        </div>
    );
}

const UserNav = () => {
    const navigate = useNavigate();
    const { setAuthData } = useAuth();

    const LogOut = () => {
        setAuthData({
            account: '',
            uid: '',
            email: '',
            name: '',
            isLoggedIn: false
        });
        navigate('/home');
    }

    const GotoJobs = () => {
        navigate('/jobs');
    }
    const Gotohome = () => {
        navigate('/home');
    }

    return (
        <div className="NavigationBar">
            <Buttons onClick={Gotohome}>Home</Buttons>
            <Buttons onClick={GotoJobs}>Gallery</Buttons>
            <Buttons >DashBoard</Buttons>
            <Buttons onClick={LogOut}>Log Out</Buttons>
        </div>
    );
}

const CompNav = () => {
    const navigate = useNavigate();
    const { setAuthData } = useAuth();

    const LogOut = () => {
        setAuthData({
            account: '',
            uid: '',
            email: '',
            name: '',
            isLoggedIn: false
        });
        navigate('/home');
    }

    const Gotopanel = () => {
        navigate('/dashboard');
    }
    const Gotohome = () => {
        navigate('/home');
    }

    return (
        <div className="NavigationBar">
            <Buttons onClick={Gotohome}>Home</Buttons>
            <Buttons onClick={Gotopanel}>panel</Buttons>
            <Buttons onClick={LogOut}>Log Out</Buttons>
        </div>
    );
}

export default NavigationBar;
