import { useNavigate } from "react-router-dom";
import { useAuth } from "../services/AuthContext";

const NavigationBar = () => {

    const { authData, setAuthData } = useAuth();
    const navigate = useNavigate();

    const changeView = () => {
        if (authData.account === "JobSeeker") {
            navigate('/userpanel');
        }
        if (authData.account === "Employer") {
            navigate('/companypanel');
        }
    }

    const GotoLogin = () => {
        navigate('/login');
    }

    const LogOut = () => {
        setAuthData({
            account: '',
            uid: '',
            email: '',
            name: '',
            isLoggedIn: false
        });
        navigate('/login');
        console.log(authData);

    }

    const GoToGallery = () => {
        navigate('/gallery');
    }
    return (
        <>
            {authData.isLoggedIn ?
                (
                    <div className="rightSec">
                        <button className="navBtn" onClick={changeView}>Panel</button >
                        <button className="navBtn" onClick={LogOut}>logOut</button>
                    </div >
                )
                :
                (<div className="rightSec">
                    <button className="navBtn" onClick={GoToGallery}>gallery</button >
                    <button className="navBtn" onClick={GotoLogin}>logIn</button>
                </div >)
            }
        </>
    )
}

export default NavigationBar;