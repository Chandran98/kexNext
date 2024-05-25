/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useEffect, useState } from "react";
import LabTabs from "../../components/trade/watchlist";
import MarketDepth from "../../components/trade/marketDepth";
import * as io from "socket.io-client";
const trade = () => {
  const [fooEvents, setFooEvents] = useState([]);
  const [buyOrder, setBuyOrder] = useState([]);
  const [sellOrder, setSellOrder] = useState([]);

  useEffect(() => {
    try {
      const socket = io("https://liclxnvmxb.kairaaexchange.com/", {
        transports: ["websocket"],
      });

      console.log("socket-45", socket);
      // socket.connect();
      // socket.on("connect", () => {
      //   console.log("sdfdsfsdf",socket.id); // x8WIv7-mJelg7on_ALbx
      // });
      // function onFooEvent(value) {
      //   setFooEvents((previous) => [...previous, value]);
      // }
      socket.emit("joinRoom", { message: "BTC/USDT" });

      // socket.on("market-price-data", (data) => {
      //   setFooEvents(data);
      //   console.log("sddsadfd", data);
      // });
      socket.on("buy_order", (data) => {
        if (data && data.status) {
          const buyOrders = data.data.filter((order) => order.type === "buy");
          setBuyOrder(buyOrders.slice(buyOrders.length - 10, buyOrders.length)); // Get first 10 buy orders
        }
      });
      socket.on("sell_order", (data) => {
        if (data && data.status) {
          const sellOrders = data.data.filter((order) => order.type === "sell");
          setSellOrder(
            sellOrders.slice(sellOrders.length - 10, sellOrders.length)
          );
        }
      });
    } catch (error) {
      console.log(error, "err");
    }
  });

  return (
    <div className="bg-gray-200 h-screen  w-full p-2 ">
      <div className="  bg-white h-20  mb-[0.75rem]"></div>
      <div className=" max-h-screen overflow-y-hidden  flex gap-3  relative">
        <LabTabs />
        <div className=" bg-white w-full ">ddsafdsf</div>
        <div className=" bg-white w-[40vw] ">
          {/* <MarketDepth/> */}

          {/* <div className="flex">{
           buyOrder&& buyOrder.map((e,i)=>(
              <li key={i}>{e.price}</li>
            ))
          }</div> 
          https://nextjs.org/docs/messages/fast-refresh-reload
          */}

          <div className="p-8 divide-y-4 divide-black ">
            <div className=" ">
            <h1>Buy Orders</h1>
            {buyOrder.length === 0 ? (
              <p>Loading...</p>
            ) : (
              <ul>
                {buyOrder.map((order, index) => (
                  <li className="flex" key={index}>
                    <p>Price: {order.price.toFixed(2)}</p>
                    <p>Amount: {order.amount.toFixed(2)}</p>
                    <p>Total: {order.total.toFixed(2)}</p>
                  </li>
                ))}
              </ul>
            )}
            </div> <div className="">
            <h1>Sell Orders</h1>
            {sellOrder.length === 0 ? (
              <p>Loading...</p>
            ) : (
              <ul className="">
                {sellOrder.map((order, index) => (
                  <li className="flex" key={index}>
                    <p>Price: {order.price.toFixed(2)}</p>
                    <p>Amount: {order.amount.toFixed(2)}</p>
                    <p>Total: {order.total.toFixed(2)}</p>
                  </li>
                ))}
              </ul>
            )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default trade;
