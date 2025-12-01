import React from "react";

const Header = () => {
  return (
    <div className="w-full text-white">

      <div className="min-h-6 flex justify-between items-center bg-[#004545]">
        <div className="hidden sm:block text-[10px] pl-[200px]">
          ORDER TRACKING
          <span></span>
        </div>

        <p className="text-[9px] text-center flex items-center m-auto">
          Refer and earn extra discount. <span className="hidden sm:block text-[#521CC6]">Click here...</span>
        </p>

        <p className="text-[10px] pr-10 hidden sm:block">140406</p>
      </div>

      <div className="min-h-[120px] md:min-h-[139px] flex flex-col py-4 md:py-[23px] justify-between w-full bg-[#1B2D2D] px-4">
        <div className="flex items-center justify-between md:px-[58px]">
          <div className="flex items-center gap-10 lg:gap-30">
            <div className="flex items-center gap-1">
              <img className="w-5 h-4 md:hidden" src="/Group 7266.png" alt="" />
              <span className="w-[45px] h-[37.5px]">
                <img src="/Group 7743.svg" alt="" />
              </span>
              <p className="flex flex-col gap-0">
                GEMLAY
                <span className="text-[5px] text-white/40">Pure diamond elegance</span>
              </p>
            </div>
            <div className="hidden md:flex border-2 bg-black lg:w-[472px] items-center rounded-full px-2 min-h-9 border-gray-500">
              <input placeholder="Slim Sparkle Diamond Ring" className="w-full placeholder:text-white font-light text-[14px]" type="text" />
              <div className="flex items-center gap-2">
                 <img className="w-4" src="/cam1.png" alt="" />
                <img className="w-4" src="/search1.png" alt="" />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 md:gap-6">
            <span className="relative hidden md:block">
              <img src="/Group1.png" alt="" />
                <p className="text-[7px] text-green-700 rounded-full bg-white w-max px-[3.5px] absolute -top-1 -right-2">42</p>
            </span>
         <span className="relative">
              <img src="/Group.png" alt="" />
                <p className="text-[7px] text-green-700 rounded-full bg-white w-max px-[3.5px] absolute -top-1 -right-2">1</p>
            </span>
           <span className="relative">
              <img src="/Vector.png" alt="" />
                <p className="text-[7px] text-green-700 rounded-full bg-white w-max px-[3.5px] absolute -top-1 -right-2">1</p>
            </span>
             <span className="">
              <img src="/Group3.png" alt="" />
            </span>
          </div>
        </div>
         <div className="md:hidden bg-black border-2 w-full flex items-center rounded-full px-4 min-h-9 border-gray-500">
              <input placeholder="Slim Sparkle Diamond Ring" className="w-full placeholder:text-white font-light text-[14px]" type="text" />
              <span className="flex items-center gap-2">
                <img className="w-4" src="/cam2.png" alt="" />
                <img className="w-4" src="/search2.png" alt="" />
              </span>
          </div>
        <div className="hidden px-[58px] w-full md:flex items-center justify-between">
            <div className="flex items-center gap-8">
                 <span className="text-[12px] text-[#40AB99] py-2 border border-[#40AB99] w-[129px] rounded-[30px] font-normal flex items-center justify-center gap-1">
                    <img className="w-5" src="/Group 27013.png" alt="" />
                    <p>New Arrivals</p>
                 </span>
                   <span className="text-[12px] font-normal flex items-center gap-1">
                    <span>
                      <img src="/Group 26999.png" className="w-[15px]" alt="" />
                    </span>
                    <p>Rings</p>
                 </span>
                   <span className="text-[12px] font-normal flex items-center gap-1">
                   <img src="/Group 3333.png" className="w-[15px]" alt="" />
                    <p>Earrings</p>
                 </span>
                   <span className="text-[12px] font-normal flex items-center gap-1">
                  <img src="/Group 26999.png" className="w-[15px]" alt="" />
                    <p>Pendants</p>
                 </span>
                   <span className="text-[12px] font-normal flex items-center gap-1">
                <img src="/Group 26999.png" className="w-[15px]" alt="" />
                    <p>Bangles And Bracelets</p>
                 </span>
                   <span className="text-[12px] font-normal flex items-center gap-1">
                <img src="/Group 26999.png" className="w-[15px]" alt="" />
                    <p>Gold Coin & Bars</p>
                 </span>
                   <span className="text-[12px] font-normal flex items-center gap-1">
                <img src="/Group 26999.png" className="w-[15px]" alt="" />
                    <p>All Jewellery</p>
                 </span>
            </div>
            <div className="flex justify-between items-center gap-5">
                 <span className="font-normal">
                    <p className="text-sm">LIVE GOLD RATES</p>
                 </span>
                 <span className="text-[14px] border border-[#40AB99] rounded-[30px] px-3 py-1 font-normal flex items-center gap-1">
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
