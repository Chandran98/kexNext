/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import jwt from "jsonwebtoken";

const isUserAuthenticated = () => {
  const token = localStorage.getItem("auth-token");
  if (!token) {
    return false;
  }

  try {
    const myjwt = jwt.decode(token);
    console.log("myjwt",myjwt);
    return true;
  } catch (error) {
    return false;
  }
};

const withAuth = (WrappedComponent) => {
  return function WithAuth(props) {
    console.log("dfasfsaf");
    const router = useRouter();
    const session = isUserAuthenticated();

    useEffect(() => {
      if (!session) {
        router.push("/");
      }
    }, [session, router]);

    if (!session) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
// export default function withAuth  (WrappedComponent) {
//   return 
//   function withAuth(props){
  
     
//   console.log("dfasfsaf");
//   const router = useRouter();
//   const session = isUserAuthenticated();

//   useEffect(() => {
//     if (!session) {
//       router.push("/");
//     }
//   }, [session, router]);

//   if (!session) {
//     return null;
//   }

//   return <WrappedComponent {...props} />;
//   }
  
// };

 