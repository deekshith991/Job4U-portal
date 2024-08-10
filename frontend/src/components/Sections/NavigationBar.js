import { useNavigate } from "react-router-dom";
import { useAuth } from "../services/AuthContext";

const NavigationBar = () => {

    const { authData, setAuthData } = useAuth();
    const navigate = useNavigate();

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
    return (
        <>
            {authData.isLoggedIn ?
                (<div className="rightSec">
                    <button className="navBtn">Profile</button>
                    <button className="navBtn" onClick={LogOut}>logout</button>
                </div>)
                :
                (<div className="rightSec">
                    <button className="navBtn">Profile</button>
                    <button className="navBtn" onClick={GotoLogin}>logIn</button>
                </div >)
            }
        </>
    )
}

export default NavigationBar;