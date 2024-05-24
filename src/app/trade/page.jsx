import React from "react";
import LabTabs from "../../components/trade/watchlist";
const trade = () => {
  return (
    <div className="bg-gray-200  w-full p-2 ">
      <div className="  bg-white h-20  mb-[0.75rem]"></div>
      <div className=" max-h-screen overflow-y-hidden  flex gap-3  relative">
        <LabTabs />
        <div className=" bg-white w-full ">ddsafdsf</div>
        <div className=" bg-white w-[40vw] ">ddsafdsf</div>
      </div>
    </div>
  );
};

export default trade;
