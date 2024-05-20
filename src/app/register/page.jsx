/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React from "react";
import Authform from "../../components/authform/authform";
import { z } from "zod";
import { useSelector } from "react-redux";
const formSchema = z.object({
  username: z.string().min(2).max(50),
  email: z.string().email("Invalid email"),
  mobile: z.string().min(10).max(10),
  password: z.string().min(6).max(20),
});

const register = () => {
  // const router = useRouter();

  const userDatta = useSelector((state) => state.auth.authData);
  const defaultValues = {
    username: "",
    email: "",
    mobile: "",
    password: "",
  };

  console.log(userDatta);
  function onSubmit(values) {
    console.log(values);
  }

  const formFieldData = [
    { id: "1", name: "username", title: "Username", placeholder: "username" },
    { id: "2", name: "email", title: "Email", placeholder: "adad@gmail.com" },
    { id: "3", name: "mobile", title: "Mobile", placeholder: "7668687768" },
    { id: "4", name: "password", title: "Password", placeholder: "........" },
  ];

  return (
    <>
      <div className=" h-screen  flex flex-col gap-4 items-center justify-center">
        <div className="border-2 p-8  rounded-2xl items-center justify-center w-[30rem] overflow-hidden">
          <Authform
            onSubmit={() => onSubmit}
            formFieldData={formFieldData}
            formSchema={formSchema}
            defaultValues={defaultValues}
            classBame={"w-full"}
          />
          <div className=" h-12"></div>
          <div className=" gap-4 ">
            <span className=" pr-4"> Have an account ?</span>
            <span className=" font-semibold text-md"> Login</span>
            <span>{userDatta.token}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default register;
