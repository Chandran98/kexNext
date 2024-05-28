/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useEffect, useState } from "react";
import withAuth from "../../hoc/protected";
import * as io from "socket.io-client";

const marketDepthDemo = ({pair}) => {
  const [fooEvents, setFooEvents] = useState([]);
  const [buyOrder, setBuyOrder] = useState([]);
  const [sellOrder, setSellOrder] = useState([]);

  useEffect(() => {
    console.log("pair",pair)
    try {
      const socket = io("https://liclxnvmxb.kairaaexchange.com/", {
        transports: ["websockets", "polling"],
      });
      let dataaa=pair===""?"BTC/INR":pair
      console.log("dataaa",dataaa)
      socket.emit("joinRoom", { message: dataaa });

      socket.on("buy_order", (data) => {
        if (data && data.status) {
          const buyOrders = data.data.filter((order) => order.type === "buy");
          setBuyOrder(buyOrders.slice(0, 5)); // Get first 10 buy orders
        }
      });
      socket.on("sell_order", (data) => {
        if (data && data.status) {
          const buyOrders = data.data.filter((order) => order.type === "sell");
          setSellOrder(buyOrders.slice(0, 5).reverse()); // Get first 10 buy orders
        }
      });
    } catch (error) {
      console.log(error, "err");
    }
  });

  return (
    <div className=" ">
      <div className="p-8">
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
  );
};

export default marketDepthDemo;
