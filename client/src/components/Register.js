import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  // const navigate = useNavigate()
  const [errVal, seterrVal] = useState([]);
  const [user, setuser] = useState({});
  const handelchange = (event) => {
    setuser({ ...user, [event.target.name]: event.target.value });
  };
  const registerUser = () => {
    axios
      .post("http://localhost:5000/user/registre", user)
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
      <h1> this is Register page:</h1>
      <div>
        <input
          onChange={(e) => handelchange(e)}
          type="text"
          placeholder="username"
          name="username"
        />
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
        <button onClick={() => registerUser()}>Register</button>
      </div>
      {errVal && errVal.map((error, index) => <p key={index}> {error} </p>)}
      if you have account you can <Link to={"/login"}>conncted here </Link>
    </div>
  );
};

export default Register;
