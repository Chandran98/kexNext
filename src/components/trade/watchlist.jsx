/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchList } from "../../redux/reducer/cryptoReducer";
import { useEffect } from "react";
import Image from "next/image";

const watchlist = () => {
  const [tabValue, setTab] = useState("INR");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchList());
  }, []);

  const data = useSelector((state) => state.crypto);

  console.log("ssssss ", data.data && data.data);

  const tabList = [
    { title: "INR", value: "inr" },
    { title: "USDT", value: "usdt" },
    { title: "KAITCOIN", value: "kaitcoin" },
  ];

  const filteredPairs =
    data.data &&
    data.data.data.filter(
      (pair) => pair.secondcurrency.toUpperCase() === tabValue
    );
  return (
    <div className=" relative overflow-y-scroll w-[50vw] bg-white    p-3">
      <div className=" flex  bg-gray-200 justify-evenly p-2 gap-2  rounded-lg">
        {tabList.map((e, i) => (
          <div
            key={i}
            onClick={() => setTab(e.title)}
            className=" rounded-lg bg-white  p-2"
          >
            {e.title}
          </div>
        ))}
      </div>
      <div className=" relative  p-4  ">
        {data.loading && <div>loading...</div>}

        {filteredPairs !== null &&
          filteredPairs.map((e, i) => (
            <div key={i} className="flex justify-between p-4">
              <Image src={e.logo} alt="#" height={10} width={30} />
              <div className="">
                {e.firstcurrency.toUpperCase()}/{e.secondcurrency.toUpperCase()}
              </div>
              <span>{e.lastprice}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default watchlist;
