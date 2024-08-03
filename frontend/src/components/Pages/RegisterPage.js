import { useState } from "react";
import { RegisterUser } from "../services.js/AuthService";
import { Link } from "react-router-dom";

const RegisterPage = () => {
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

        // Network Integration

        const Resp = await RegisterUser(data);
        console.log(Resp);
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

