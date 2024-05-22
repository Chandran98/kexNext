/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState } from "react";

const watchlist = () => {
  const [tabValue, setTab] = useState("INR");
  console.log("tabVsxcalue", tabValue);

  const tabList = [
    { title: "INR", value: "inr" },
    { title: "USDT", value: "usdt" },
    { title: "KAITCOIN", value: "kaitcoin" },
  ];

  return (
    <div className="  bg-white    p-3">
      <div className=" flex  bg-gray-200 p-2 gap-2  rounded-lg">
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
      <div className=" p-4">
        <div className=""> dsadsfasf {tabValue}</div>
      </div>
    </div>
  );
};

export default watchlist;
