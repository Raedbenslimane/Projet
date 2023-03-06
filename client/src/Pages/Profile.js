import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const User = useSelector((state) => state.User.user);
  const navigate = useNavigate();
  const isAuth = localStorage.getItem("isAuth");
  useEffect(() => {
    !isAuth && navigate("/Login");
  }, [isAuth]);
  return (
    <div>
      <h2> Welcome to {User.name} profile</h2>
    </div>
  );
};

export default Profile;
