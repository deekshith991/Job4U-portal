import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const data = {
      email: email,
      password: password,
    };

    console.log("Login page submit");
    console.log(data);

    // Network Integration
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
        <h5>Don't have an Account Register</h5>
      </div>
    </div>
  );
};

export default LoginPage;
