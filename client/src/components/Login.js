import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [user, setuser] = useState({});
  const [errVal, seterrVal] = useState([]);
  const handelchange = (event) => {
    setuser({ ...user, [event.target.name]: event.target.value });
  };
  const loginUser = () => {
    axios
      .post("http://localhost:5000/user/login", user)
      .then((result) => localStorage.setItem("auth", result.data.userToken))
      .catch((err) =>
        seterrVal(
          err.response.data.msg
            ? [err.response.data.msg]
            : err.response.data.errors
        )
      );
  };
  return (
    <div>
      <h1> this is login page:</h1>
      <div>
        <input
          onChange={(e) => handelchange(e)}
          type="email"
          placeholder="Email"
          name="email"
        />
        <input
          onChange={(e) => handelchange(e)}
          type="password"
          placeholder="password"
          name="password"
        />
        <button onClick={() => loginUser()}>Login</button>
      </div>
      {errVal && errVal.map((error, index) => <p key={index}> {error} </p>)}
      if you don't have account you can{" "}
      <Link to={"/register"}>register here </Link>
    </div>
  );
};

export default Login;
