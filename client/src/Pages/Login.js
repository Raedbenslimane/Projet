import React, { useEffect, useState } from "react";
import { signIn } from "../Redux/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Login = () => {
  const [user, setUser] = useState({});
  const handlechange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();
  const SigninIn = (e) => {
    e.preventDefault();
    dispatch(signIn(user));
  };
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.User.isAuth);
  useEffect(() => {
    isAuth ? navigate("/Profile") : navigate("/Login");
  }, [isAuth]);
  return (
    <div>
      <form style={{ display: "flex", justifyContent: "center" }}>
        <div class="form-outline mb-4">
          <input
            id="email"
            style={{ width: "300px" }}
            onChange={handlechange}
            name="email"
            type="email"
            class="form-control"
          />
          <label id="lab" class="form-label" for="form2Example1">
            Email address
          </label>
        </div>

        <div class="form-outline mb-4">
          <input
            style={{ width: "300px" }}
            onChange={handlechange}
            name="password"
            type="password"
            id="pass"
            class="form-control"
          />
          <label id="labe" class="form-label" for="form2Example2">
            Password
          </label>
        </div>

        <button
          id="btt"
          onClick={SigninIn}
          type="button"
          class="btn btn-primary btn-block mb-4"
        >
          Sign in
        </button>

        <div class="text-center">
          <button type="button" class="btn btn-link btn-floating mx-1">
            <i class="fab fa-facebook-f"></i>
          </button>

          <button type="button" class="btn btn-link btn-floating mx-1">
            <i class="fab fa-google"></i>
          </button>

          <button type="button" class="btn btn-link btn-floating mx-1">
            <i class="fab fa-twitter"></i>
          </button>

          <button type="button" class="btn btn-link btn-floating mx-1">
            <i class="fab fa-github"></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
