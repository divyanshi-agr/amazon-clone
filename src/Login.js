import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    //firebase login stuff
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //it successfully created a new user with email and pswd
        console.log(auth);
      })
      .catch((error) => alert(error.message));

    //firebase register stuff
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>

      <div className="login-container">
        <h1>Sign-in</h1>

        <form>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>

          <button type="submit" onClick={signIn} className="login-signinButton">
            Sign In
          </button>
        </form>

        <p>
          By signing in, you agree to AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice
        </p>

        <button onClick={register} className="login-registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
