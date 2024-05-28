/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useEffect, useState } from "react";
import LabTabs from "../../components/trade/watchlist";
import {
  marketDepthBuy,
  marketDepthSell,
  fetchList,
} from "../../redux/reducer/cryptoReducer";
import { useDispatch, useSelector } from "react-redux";
import MarketDepthDemo from "../../components/trade/market2Depth";
import Chartflow from "../../components/trade/chart";
import Image from "next/image";
const trade = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchList());
  }, [dispatch]);

  const data = useSelector((state) => state.crypto);
  const [tabValue, setTab] = useState("INR");
  const [frstCurreny, setfrst] = useState("");
  const [secondCurreny, setsecond] = useState("");

  const tabList = [
    { title: "INR", value: "inr" },
    { title: "USDT", value: "usdt" },
    { title: "KAITCOIN", value: "kaitcoin" },
  ];

  const filteredPairs =
    data.coin?.data?.filter(
      (pair) => pair.secondcurrency.toUpperCase() === tabValue
    ) || [];

    console.log("dfasfadsfadfasdfsdf",frstCurreny,secondCurreny)
  return (
    <div className="bg-gray-200 h-screen  w-full p-2 ">
      <div className="  bg-white h-20  mb-[0.75rem]"></div>
      <div className=" max-h-screen overflow-y-hidden  flex gap-3  relative">
        <div className="relative  w-[50vw] bg-white p-3">
          <div className="flex bg-gray-200 justify-evenly p-2 gap-2 rounded-lg">
            {tabList.map((e, i) => (
              <div
                key={i}
                onClick={() => setTab(e.title.toUpperCase())}
                className={`rounded-lg p-2 cursor-pointer ${
                  tabValue === e.title ? "bg-gray-400" : "bg-white"
                }`}
              >
                {e.title}
              </div>
            ))}
          </div>
          <div className="relative p-4 h-[80vh] overflow-y-scroll">
            {data.loading && <div>Loading...</div>}

            {filteredPairs.map((e, i) => (
              <div
                onClick={() => {
                  setfrst(e.firstcurrency.toUpperCase()),
                    setsecond(e.secondcurrency.toUpperCase());
                }}
                key={i}
                className="flex justify-between p-4"
              >
                <Image src={e.logo} alt="logo" height={30} width={30} />
                <div>
                  {e.firstcurrency.toUpperCase()}/
                  {e.secondcurrency.toUpperCase()}
                </div>
                <span>{e.lastprice}</span>
              </div>
            ))}
          </div>
        </div>
        <div className=" bg-white ">
          <Chartflow frst={frstCurreny} second={secondCurreny} />
        </div>
        <div className=" bg-white w-[50vw] ">
          <div className="p-8 divide-y-4 divide-black ">
            <MarketDepthDemo pair={`${frstCurreny}/${secondCurreny}`} />
            {/*            
            <div className="">
              <h1>Sell Orders</h1>
              {data?.sellsocket === 0 ? (
                <p>Loading...</p>
              ) : (
                <ul className="">
                  {data?.sellsocket?.slice(0, 10).reverse().map((order, index) => (
                    <li className="flex" key={index}>
                      <p>Price: {Number(order.price).toFixed(2)}</p>
                      <p>Amount: {Number(order.amount).toFixed(2)}</p>
                      <p>Total: {Number(order.total).toFixed(2)}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div> <div className=" ">
              <h1>Buy Orders</h1>
              {
              data?.buysocket === 0 ? (
                <p>Loading...</p>
              ) : (
                <ul>
                  {data?.buysocket?.slice(0, 10).map((order, index) => (
                    <li className="flex" key={index}>
                      <p>Price: {Number(order.price).toFixed(2)}</p>
                      <p>Amount: {Number(order.amount).toFixed(2)}</p>
                      <p>Total: {Number(order.total).toFixed(2)}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>{" "} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default trade;
