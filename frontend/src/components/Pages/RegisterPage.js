import { useState } from "react";
import { RegisterUser } from "../services/AuthService";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../services/AuthContext";

const RegisterPage = () => {

    const { authData, setAuthData } = useAuth();
    const navigate = useNavigate();

    const [account, setaccount] = useState("JobSeeker");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            account: account,
            email: email,
            password: password
        };
        console.log(data);

        try {
            // Network Integration
            const Resp = await RegisterUser(data);
            console.log(Resp);

            // redirection 
            if (Resp.success) {
                // alert("registering");
                setAuthData({ isLoggedIn: true, email: Resp.email, uid: Resp.Uid, account: Resp.account });
                if (Resp.account === "Employer") {
                    // alert("redirecting to employer");
                    navigate('/companyProfile');
                }
                if (Resp.account === 'JobSeeker') {
                    // alert("redirecting to user");
                    navigate('/userProfile')
                }
            } else {
                alert(Resp.message);
            }
        } catch (error) {
            alert("error at register page", error);
        }

    }

    return (
        <div className="RegisterPage">
            <div className="RegisterCard">
                <h1>Register Page</h1>

                <form onSubmit={handleSubmit}>
                    <div className="Input">
                        <label>Account Type: </label>
                        <select
                            name="account"
                            value={account}
                            onChange={(e) => {
                                setaccount(e.target.value);
                            }}
                        >
                            <option value="JobSeeker">JobSeeker</option>
                            <option value="Employer">Employer</option>
                        </select>
                    </div>

                    <div className="Input">
                        <label>Email: </label>
                        <input
                            placeholder="email"
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setemail(e.target.value)}
                        />
                    </div>

                    <div className="Input">
                        <label>password: </label>
                        <input
                            placeholder="password"
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setpassword(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="RegisterBtn">Register</button>

                </form>
                <h5>Have an Account <Link to="/login"> Login </Link></h5>
            </div>
        </div>
    );
};

export default RegisterPage;

