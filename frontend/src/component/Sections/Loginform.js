import '../css/LoginPage.css';
import Buttons from "./Buttons";
import { useAuth } from "../service/AuthContext";
import { useState } from "react";
import { LoginUser } from "../service/AuthService";
import { Link, useNavigate } from 'react-router-dom';

const Loginform = () => {

    const navigate = useNavigate();

    const { setAuthData } = useAuth() || {};
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = async (e) => {
        e.preventDefault();
        const data = {
            email: email,
            password: password,
        };

        try {

            const Resp = await LoginUser(data);

            if (Resp.success) {
                setAuthData({ isLoggedIn: true, email: Resp.email, uid: Resp.uid, account: Resp.account });
                if (Resp.account === "Employer") {
                    // console.log("emp");
                    navigate('/dashboard');
                }
                if (Resp.account === 'JobSeeker') {
                    // console.log("user");
                    navigate('/home')
                }
            } else {
                alert(Resp.message || "An error occurred. Please try again.");
            }
        } catch (error) {
            console.error("Login failed:", error);
            alert("An unexpected error occurred. Please try again.");
        }
    };

    return (
        <div className="loginform">

            <form onSubmit={submitHandler} >
                <div className="Input">
                    <label>Email: </label>
                    <input
                        placeholder="email"
                        name="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="Input">
                    <label>password: </label>
                    <input
                        placeholder="password"
                        name="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <Buttons className="LoginBtn" color="rgb(112, 251, 112)" type="submit">Log In</Buttons>
            </form>

            <h5>Don't have an Account <Link to="/register"> Register</Link></h5>

        </div >
    );
};

export default Loginform;