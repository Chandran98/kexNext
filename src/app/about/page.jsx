/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useEffect, useState } from "react";
import withAuth from "../../hoc/protected";
import * as io from 'socket.io-client' 

const about = () => {
  const [fooEvents, setFooEvents] = useState([]);
  const [buyOrder, setBuyOrder] = useState([]);
  const [sellOrder, setSellOrder] = useState([]);

  useEffect(() => {
    try {
      const socket = io("https://liclxnvmxb.kairaaexchange.com/",{transports:["websockets","polling"]});

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
          setBuyOrder(buyOrders.slice(0, 10)); // Get first 10 buy orders
        }
      });
      socket.on("sell_order", (data) => {if (data && data.status) {
        const buyOrders = data.data.filter((order) => order.type === "sell");
        setSellOrder(buyOrders.slice(0, 10).reverse()); // Get first 10 buy orders
      }
      });
    } catch (error) {
      console.log(error, "err");
    }
  });

  return <div className=" "><div className="p-8">
  <h1>Market Sell Orders</h1>
  {sellOrder.length === 0 ? (
    <p>Loading...</p>
  ) : (
    <ul>
      {sellOrder.map((order, index) => (
       <li className="flex" key={index}>
       <p>Price: {Number(order.price).toFixed(2)}</p>
       <p>Amount: {Number(order.amount).toFixed(2)}</p>
       <p>Total: {Number(order.total).toFixed(2)}</p>
     </li>
      ))}
    </ul>
  )}
</div>
    <div className="p-8">
  <h1>Market Buy Orders</h1>
  {buyOrder.length === 0 ? (
    <p>Loading...</p>
  ) : (
    <ul>
      {buyOrder.map((order, index) => (
        <li className="flex" key={index}>
        <p>Price: {Number(order.price).toFixed(2)}</p>
        <p>Amount: {Number(order.amount).toFixed(2)}</p>
        <p>Total: {Number(order.total).toFixed(2)}</p>
      </li>
      ))}
    </ul>
  )}
</div>
  </div>
};

// export default withAuth(about);
export default about;
