/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  } from "../../redux/reducer/cryptoReducer";
import { useEffect } from "react";

const snap = () => {

    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch()
    },[])
  return (
    <div>snap</div>
  )
}

export default snap