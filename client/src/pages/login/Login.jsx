import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [emails, setEmail] = useState("exceleezay@example.com");
  const [passwords, setPassword] = useState("jenny");
  async function handleSubmit(event) {
    console.log("i am here")
    try {
      const response = await fetch("http://127.0.0.1:3000/api/user/login", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email:emails,
          password:passwords,
        }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div id="login">
      <div className="login">
        {/* <form> */}
          <h1>Login</h1>
          <div className="login-div">
            {/* <label htmlFor="email">Email:</label> */}
            {/* <input
              type="text"
              id="email"
              name="email"
              required
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            /> */}
          </div>
          <div className="login-div">
            {/* <label htmlFor="password">Password:</label> */}
            {/* <input
              type="text"
              id="name"
              name="name"
              required
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            /> */}
          </div>

          <button onClick={handleSubmit} id="login-btn">
            Login
          </button>
          <div className="pragraph">
            <Link to={"/"}>forgot Password</Link>
            <Link to={"/signup"}>create account</Link>
          </div>
        {/* </form> */}
      </div>
    </div>
  );
};

export default Login;
