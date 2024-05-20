"use client"
import React from 'react'
import { useSelector } from 'react-redux';

const Profile = () => {

  const userData = useSelector((state) => state.auth.authData);
  return (
    <div>
         <div>dsafasdf{userData.message}</div>
         <div>{userData.token}</div>
    </div>
  )
}

export default Profile