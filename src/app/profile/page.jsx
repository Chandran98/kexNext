"use client";
import React from "react";
import { useSelector } from "react-redux";
import CandleStick from "../../utils/cd";

const Profile = () => {
  // const userData = useSelector((state) => state.auth.authData);
  return (
    <div>
      <CandleStick />
      {/* <div>dsafasdf{userData&& userData.message}</div>
         <div>{userData&& userData.token}</div> */}
    </div>
  );
};

export default Profile;
