import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { LogOut } from "../Redux/UserSlice";

const NavBar = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.User.isAuth);
  return (
    <div>
      <nav class="navbar navbar-inverse">
        <div class="container-fluid">
          <div class="navbar-header">
            {isAuth ? (
              <button onClick={() => dispatch(LogOut())} id="LO" href="#">
                LogOut
              </button>
            ) : (
              <>
                {" "}
                <button as={Link} to="/" id="Ho">
                  Register
                </button>{" "}
                <button as={Link} to="/Login" id="Ree">
                  {" "}
                  Login
                </button>{" "}
              </>
            )}
            <a class="navbar-brand" href="#">
              WebSiteName
            </a>
          </div>
          <ul class="nav navbar-nav">
            <li class="active"></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
