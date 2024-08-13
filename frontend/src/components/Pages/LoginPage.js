import { useState } from "react";
import { useAuth } from "../services/AuthContext";
import { useNavigate } from "react-router-dom";
import { LoginUser, ServerCheck } from "../services/AuthService";
import { Link } from "react-router-dom";
import './css/cardpages.css';

const LoginPage = () => {

  ServerCheck();

  const { authData, setAuthData } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    const data = {
      email: email,
      password: password,
    };

    try {
      // Network Integration
      const Resp = await LoginUser(data);

      console.log(Resp);

      if (Resp.success) {

        // alert("Logging in...");
        setAuthData({ isLoggedIn: true, email: Resp.email, uid: Resp.uid, account: Resp.account });
        if (Resp.account === "Employer") {
          // alert("redirecting to employer");
          navigate('/companypanel');
        }
        if (Resp.account === 'JobSeeker') {
          // alert("redirecting to user");
          navigate('/gallery')
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
    <div className="LoginPage">
      <div className="LoginCard">
        <h1>Login Page</h1>

        <form onSubmit={submitHandler}>
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
          <button type="submit" className="LoginBtn">
            Login
          </button>
        </form>
        <h5>Don't have an Account <Link to="/register"> Register</Link></h5>
      </div>
    </div>
  );
};

export default LoginPage;
