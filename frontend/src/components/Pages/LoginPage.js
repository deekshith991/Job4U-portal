import { useState } from "react";
import { LoginUser } from "../services/AuthService";
import { useAuth } from "../services/AuthContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import RegisterPage from "./RegisterPage";

const LoginPage = () => {

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

    // Network Integration
    const Resp = await LoginUser(data);
    console.log(Resp);
    console.log(Resp.status);

    if (Resp.status === "success") {
      alert("Loggin in");
      setAuthData({ isLoggegIn: true, email: Resp.email, uid: Resp.uid });

      console.log(authData);

      navigate('/home');
    } else if (Resp.status === "failed") {
      alert(Resp.message);
    } else {
      alert("error");
    }

    // console.log(JSON.stringify(Resp));

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
