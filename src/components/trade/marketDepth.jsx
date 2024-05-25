// /* eslint-disable react-hooks/rules-of-hooks */
// "use client";
// import React, { useEffect, useState } from "react";
// import withAuth from "../../hoc/protected";
// import * as io from 'socket.io-client' 

// const marketDepth = () => {
//   const [fooEvents, setFooEvents] = useState([]);
//   const [buyOrder, setBuyOrder] = useState([]);
//   const [sellOrder, setSellOrder] = useState([]);

//   useEffect(() => {
//     try {
//       const socket = io("https://liclxnvmxb.kairaaexchange.com/",{transports:["websockets","polling"]});

//       console.log("socket-45", socket);
//       // socket.connect();
//       // socket.on("connect", () => {
//       //   console.log("sdfdsfsdf",socket.id); // x8WIv7-mJelg7on_ALbx
//       // });
//       // function onFooEvent(value) {
//       //   setFooEvents((previous) => [...previous, value]);
//       // }
//       socket.emit("joinRoom", { message: "BTC/INR" });

//       // socket.on("market-price-data", (data) => {
//       //   setFooEvents(data);
//       //   console.log("sddsadfd", data);
//       // });
//       socket.on("buy_order", (data) => {
//         setBuyOrder(data);
//         console.log("buyOrder", buyOrder);
//       });
//       socket.on("sell_order", (data) => {
//         setSellOrder(data);
//         console.log("sellOrder", sellOrder);
//       });
//     } catch (error) {
//       console.log(error, "err");
//     }
//   });

//   return <div>About</div>;
// };

// // export default withAuth(about);
// export default about;
