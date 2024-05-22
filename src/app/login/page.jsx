/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState } from "react";
import Authform from "../../components/authform/authform";
import { z } from "zod";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { signIn } from "@/redux/reducer/authReducer";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6).max(20),
});

const login = () => {
  const router = useRouter();

  const defaultValues = {
    email: "",
    password: "",
  };
  const dispatch = useDispatch();

  const { authData, loading, error } = useSelector((state) => state.auth);

  console.log("sttatte", authData);

  async function onSubmit(values) {
    let data = {
      deviceInfo: {
        browser: "",
        browser_version: "",
        os: "",
        device: "mobile",
      },
      browser: "Chrome",
      browser_version: "116.0.0.0",
      device: "PC", //mobile,
      os: "Linux", //others,
      ipaddress: "123.45.678.900",
      password: values.password,
      username: values.email,
    };
    console.log(data);
    dispatch(signIn(data)).then((res) => {
      if (res.payload.status == true) {
        router.push("/profile");
      }
    });
  }

  const formFieldData = [
    // { id: "1", name: "username", title: "Username", placeholder: "username" },
    { id: "1", name: "email", title: "Email", placeholder: "adad@gmail.com" },
    // { id: "3", name: "mobile", title: "Mobile", placeholder: "7668687768" },
    { id: "2", name: "password", title: "Password", placeholder: "........" },
  ];

  return (
    <>
      <div className=" h-screen  flex flex-col gap-4 items-center justify-center">
        <div className="border-2 h-[30rem] p-8 rounded-2xl items-center justify-center w-[30rem] overflow-hidden">
          <Authform
            onSubmit={() => onSubmit}
            loading={loading}
            formFieldData={formFieldData}
            formSchema={formSchema}
            defaultValues={defaultValues}
            classBame={"w-full"}
          />
          <div className=" h-12"></div>
          <div className=" gap-4 ">
            <span className=" pr-4"> Don't have an account ?</span>
            <span className=" font-semibold text-md"> Register</span>
            {error && <span>{error}</span>}
          </div>
        </div>
      </div>
    </>
  );
};

export default login;
