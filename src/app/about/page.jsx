/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useEffect, useState } from "react";
import withAuth from "../../hoc/protected";
import { io } from "socket.io-client";

const about = () => {
  const [socket, setSocket] = useState();
  // const [socket,setSocket]=useState();

  useEffect(() => {
    try {
      const socket = io ("https://liclxnvmxb.kairaaexchange.com/",{
        transports: ["websocket"],autoConnect:false 
      });
      socket.connect();
      // socketIo.on('connection', function() {
      //   console.log("Connected to WS server");
      
      //   console.log('dsdds',socket.connected); 
      
      //   // load_posts();
      // });
    // setSocket(socketIo);
    console.log("sdfdsfdsfs", socket);
    } catch (error) {
      
    console.log("sdf--error", error);
    }
    return () => {
      // socket.disconnect();
    };
  }, []);
  return <div>About</div>;
};
const handleSocket = () => {
  socketIo.emit("joinRoom", (data) => {
    console.log("sdds", data);
  });
};

// export default withAuth(about);
export default about;

// socket = IO.io("https://liclxnvmxb.kairaaexchange.com/", {
//   'autoConnect': false,
//   'transports': ['websocket'],
// });

// socket.connect();
// socket.onConnect((_) {
//   socket.emit('joinRoom', {"message": widget.pair});
//   print("USDT BUY and SELL ORder Book");
// });

// super.initState();

// socket.on("trade-order-response", (data) {
