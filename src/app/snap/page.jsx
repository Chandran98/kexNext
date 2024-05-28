/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { memo, useEffect, useMemo, useState } from "react";
import axios from "axios";

const snap = () => {
  const [fooEvents, setFooEvents] = useState([]);
  // const [buyOrder, setBuyOrder] = useState([]);
  // const [sellOrder, setSellOrder] = useState([]);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(marketDepth("BTC/USDT"));
  // }, []);

  // const data = useSelector((state) => state.crypto);

  // console.log("useSelector ", data);
  useEffect(() => {
    const data = axios.post(
      "https://kaitworld.com/public/api/api_team_structure",
      { user_id: "5" }
    );

    console.log("data", data);
    setFooEvents(data);
  }, []);

  useMemo(() => {}, []);

  return <div>snap</div>;
};

export default snap;
