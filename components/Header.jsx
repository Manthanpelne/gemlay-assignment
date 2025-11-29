import React from "react";

const Header = () => {
  return (
    <div className="w-full text-white">

      <div className="min-h-6 flex justify-between items-center bg-[#004545]">
        <div className="text-[10px] pl-[200px]">
          ORDER TRACKING
          <span></span>
        </div>

        <p className="text-[9px]">
          Refer and earn discount. <span>Click here...</span>
        </p>

        <p className="text-[10px] pr-10">140406</p>
      </div>

      <div className="min-h-[139px] flex flex-col py-[23px] justify-between w-full bg-[#1B2D2D]">
        <div className="flex items-center justify-between px-[58px]">
          <div className="flex items-center gap-30">
            <div className="flex gap-1">
              <span className="w-[45px] h-[37.5px] border-2">💍</span>
              <p className="flex flex-col">
                GEMLAY
                <span className="text-[5px]">pure diamond elegance</span>
              </p>
            </div>
            <div className="border-2 w-[472px] flex items-center rounded-full px-2 min-h-9 border-gray-500">
              <input placeholder="search" className="w-full" type="text" />
              <span>🔍</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span>❤️</span>
            <span>🛒</span>
            <span>👤</span>
          </div>
        </div>
        <div className="px-[58px] w-full flex items-center justify-between">
            <div className="flex items-center gap-5">
                 <span className="text-[12px] w-[129px] rounded-[30px] border-2 font-normal flex items-center justify-center gap-1">
                    <span className="text-[20px]">№</span>
                    <p>New Arrivals</p>
                 </span>
                   <span className="text-[12px] font-normal flex items-center gap-1">
                    <span>№</span>
                    <p>New Arrivals</p>
                 </span>
                   <span className="text-[12px] font-normal flex items-center gap-1">
                    <span>№</span>
                    <p>New Arrivals</p>
                 </span>
                   <span className="text-[12px] font-normal flex items-center gap-1">
                    <span>№</span>
                    <p>New Arrivals</p>
                 </span>
                   <span className="text-[12px] font-normal flex items-center gap-1">
                    <span>№</span>
                    <p>New Arrivals</p>
                 </span>
            </div>
            <div className="flex justify-between items-center gap-5">
                 <span className="font-normal">
                    <p className="text-sm">LIVE GOLD RATES</p>
                 </span>
                 <span className="text-[14px] font-normal flex items-center gap-1">
                    <span className="text-orange-400">JSP</span>
                    <p>(10 + 1 monthly plan)</p>
                 </span>
            </div>
        </div>
      </div>





    </div>
  );
};

export default Header;
