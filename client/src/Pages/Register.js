import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { SignUp } from "../Redux/UserSlice";

const Register = () => {
  const navigate = useNavigate();
  const [NewUser, setNewUser] = useState({});
  const handlechange = (e) => {
    setNewUser({ ...NewUser, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();
  const signinUp = (e) => {
    e.preventDefault();
    dispatch(SignUp(NewUser));
    navigate("/Login");
  };
  return (
    <div className="App">
      <form id="Re">
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>First name</label>
          <input
            onChange={handlechange}
            name="name"
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input
            onChange={handlechange}
            name="lastname"
            type="text"
            className="form-control"
            placeholder="Last name"
          />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            onChange={handlechange}
            name="email"
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            onChange={handlechange}
            name="password"
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="d-grid">
          <button onClick={signinUp} type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
    </div>
  );
};

export default Register;
