import SideFilters from '@/components/SideFilters';
import React from 'react'

const LandingPage = () => {
      const imgs = [
    "/_YA 1.png",
    "/_YA 9.png",
    "/_YA 10.png",
    "/_YA.png",
    "/_YA 11.png",
    "/_YA 12.png",
    "/_YA 13.png",
    "/_YA 14.png",
  ];

  const imgs2 = ["/_YAx.png","/_YA 4.png"]

  const imgs3 = ["/_YAx.png","/_YA 4.png"]

  return (
    <div className="">
      <div className='relative mt-0.5'>
        <div className='absolute hidden md:block left-0 text-[10px] md:ml-[204px]'>
            <h2 className='text-black/60'>Home / Collections / Engagement Rings</h2>
            <p className='text-black'>(1440 Products)</p>
        </div>
          <div className=' md:hidden left-0 text-[12px] text-center mt-3 md:ml-[204px]'>
            <h2 className='text-black/60'>Home / Collections / Engagement Rings</h2>
            <p className='text-black'>(1440 Products)</p>
        </div>
      <div className="text-center mt-1 md:mt-5">
        <h1 className="text-[20px] md:text-[30px]">Engagement Rings</h1>
        <p className="text-[11px] tracking-wider text-black/80">
          Explore an array of beautiful jewellery designed to suit every style.
        </p>
        <p className="text-[11px] hidden md:auto tracking-wide text-black/80">
          Shop your favourite categories and find the perfect piece to make any
          moment special.
        </p>
      </div>
      </div>

      <div className="w-full h-full mt-6 md:mt-0">
        <img
          className="h-[197px] w-full object-cover md:hidden"
          src="/image 242.png"
          alt="engagementring"
        />
      </div>
       <div className="w-full h-full hidden md:block">
        <img
          className="h-[290px] w-full object-cover"
          src="/image 236.png"
          alt="engagementring"
        />
      </div>

      <div className="hidden md:flex min-h-[71px] px-5 lg:px-[124px] items-center justify-between">
        <div className="text-[13px] flex gap-8 text-black/80 items-center">
          <span className="rounded-[20px] text-white text-[13px] px-5 pt-0.5 pb-1 bg-linear-to-r from-[#1B3536] via-[#029859] to-[#1B3536]">
            All Rings
          </span>
          <span className="">New In</span>
          <span>today's Specials</span>
          <span>Best Sellers</span>
        </div>
        <div className="text-[13px] flex gap-8 text-black/80 items-center">
          <span className="">Designs in store</span>
          <span className="border border-black px-3 rounded-[20px] py-1">
            Ready To Ship
          </span>
          <span>Best Sellers</span>
        </div>
      </div>

      <div className="pt-2 bg-[#FBFBFB]">
        <div className='flex md:hidden mt-2 mb-6 justify-between items-center px-4'>
           <div className='flex items-center gap-1'>
              <img className='w-3' src="/image 77 .svg" alt="" />
              <span className='relative'>Filters <span className='text-green-600 absolute -top-1 text-sm font-semibold '>4</span></span>
           </div>
           <div className='flex items-center gap-4'>
              <span className="rounded-[20px] flex items-center gap-2 text-white text-[13px] px-2 pt-0.5 pb-1 bg-[#009E7F]">
            All Rings 
            <svg xmlns="http://www.w3.org/2000/svg"  className='w-[15px]' viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7 10l5 5l5-5"/></svg>
          </span>
          <span className='flex items-center gap-1'>Sort By: Relevance
            <svg xmlns="http://www.w3.org/2000/svg" className='w-[15px]' viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7 10l5 5l5-5"/></svg>
             </span>
           </div>
        </div>
        <h2 className="pl-[69px] mb-2 hidden xl:block">FILTERS</h2>
        <div className="xl:flex gap-3">
          <SideFilters />
          <div>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 px-[21px]">
            {imgs.map((imgSrc, index) => {
              return (
                <div key={index} className="md:w-[270px] ">
                  <div className="h-[180px] md:h-[280px] bg-[#FFFFFF] w-full flex flex-col justify-between rounded-[15px] border p-3 border-black/10 shadow relative">
                    <div className="flex justify-between items-center z-10">
                   <img className='w-[81px] md:w-[105px]' src="/Group 27168.png" alt="" />
                  <img className='w-3 md:w-[18px]' src="/heart.png" alt="" />
                    </div>
                    <img className='w-5[px] md:w-2 md:hidden absolute left-3 top-1/2' src="/Group 27324.svg" alt="" />
                    <img className='w-[5px] md:w-2 md:hidden absolute right-3 top-1/2' src="/Group 27328.svg" alt="" />
                    <img
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140px] h-[140px] md:w-[220px] md:h-[220px] object-cover"
                      src={imgSrc}
                      alt="Product Image"
                    />
                    <div className="flex justify-between items-center z-10">
                      <div></div>
                      <div className="flex text-[18px] items-center gap-1">
                        <span className="text-orange-300">o</span>
                        <span className="text-gray-400">o</span>
                        <span className="text-red-400">o</span>
                      </div>
                      <div className="">
                         <img className='w-3 md:w-5' src="/Group 27325.png" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="px-3 py-2 leading-4 md:leading-5 tracking-wide font-semibold"> 
                  <p className=" text-[14px] md:text-[18px]">$23,335 <span className="text-black/50 text-[11px] md:text-[13px]">$24,554</span> </p>
                  <span className="text-[10px] md:text-[13px]">Yemarly wings diamond...</span>
                  <p className="text-[#007A64] text-[9px] md:text-[13px]">10% on off Making Charges</p>
                  </div>
                  <button className="text-white rounded-[30px] bg-linear-to-l from-[#00382D] to-[#009E7F] py-2 text-sm w-full">Buy Now</button>
                </div>
              );
            })}
          </div>
            <div className="flex mb-4 flex-col lg:flex-row items-center gap-4 mt-4 px-[21px]">
              <div className='flex w-full items-center gap-4'>
            {imgs2.map((imgSrc, index) => {
              return (
               <div key={index} className="md:w-[270px] ">
                  <div className="h-[180px] md:h-[280px] bg-[#FFFFFF] w-full flex flex-col justify-between rounded-[15px] border p-3 border-black/10 shadow relative">
                    <div className="flex justify-between items-center z-10">
                   <img className='w-[81px] md:w-[105px]' src="/Group 27168.png" alt="" />
                  <img className='w-3 md:w-[18px]' src="/heart.png" alt="" />
                    </div>
                    <img className='w-5[px] md:w-2 md:hidden absolute left-3 top-1/2' src="/Group 27324.svg" alt="" />
                    <img className='w-[5px] md:w-2 md:hidden absolute right-3 top-1/2' src="/Group 27328.svg" alt="" />
                    <img
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140px] h-[140px] md:w-[220px] md:h-[220px] object-cover"
                      src={imgSrc}
                      alt="Product Image"
                    />
                    <div className="flex justify-between items-center z-10">
                      <div></div>
                      <div className="flex text-[18px] items-center gap-1">
                        <span className="text-orange-300">o</span>
                        <span className="text-gray-400">o</span>
                        <span className="text-red-400">o</span>
                      </div>
                      <div className="">
                         <img className='w-3 md:w-5' src="/Group 27325.png" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="px-3 py-2 leading-4 md:leading-5 tracking-wide font-semibold"> 
                  <p className=" text-[14px] md:text-[18px]">$23,335 <span className="text-black/50 text-[11px] md:text-[13px]">$24,554</span> </p>
                  <span className="text-[10px] md:text-[13px]">Yemarly wings diamond...</span>
                  <p className="text-[#007A64] text-[9px] md:text-[13px]">10% on off Making Charges</p>
                  </div>
                  <button className="text-white rounded-[30px] bg-linear-to-l from-[#00382D] to-[#009E7F] py-2 text-sm w-full">Buy Now</button>
                </div>
              );
            })}
            </div>
            <div className='w-full'>
                <img src="/image 239.png" className='h-60 w-full md:h-[390px]' alt="" />
            </div>
          </div>
             <div className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4 px-[21px]">
            {imgs.map((imgSrc, index) => {
              return (
                 <div key={index} className="md:w-[270px] ">
                  <div className="h-[180px] md:h-[280px] bg-[#FFFFFF] w-full flex flex-col justify-between rounded-[15px] border p-3 border-black/10 shadow relative">
                    <div className="flex justify-between items-center z-10">
                   <img className='w-[81px] md:w-[105px]' src="/Group 27168.png" alt="" />
                  <img className='w-3 md:w-[18px]' src="/heart.png" alt="" />
                    </div>
                    <img className='w-5[px] md:w-2 md:hidden absolute left-3 top-1/2' src="/Group 27324.svg" alt="" />
                    <img className='w-[5px] md:w-2 md:hidden absolute right-3 top-1/2' src="/Group 27328.svg" alt="" />
                    <img
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140px] h-[140px] md:w-[220px] md:h-[220px] object-cover"
                      src={imgSrc}
                      alt="Product Image"
                    />
                    <div className="flex justify-between items-center z-10">
                      <div></div>
                      <div className="flex text-[18px] items-center gap-1">
                        <span className="text-orange-300">o</span>
                        <span className="text-gray-400">o</span>
                        <span className="text-red-400">o</span>
                      </div>
                      <div className="">
                         <img className='w-3 md:w-5' src="/Group 27325.png" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="px-3 py-2 leading-4 md:leading-5 tracking-wide font-semibold"> 
                  <p className=" text-[14px] md:text-[18px]">$23,335 <span className="text-black/50 text-[11px] md:text-[13px]">$24,554</span> </p>
                  <span className="text-[10px] md:text-[13px]">Yemarly wings diamond...</span>
                  <p className="text-[#007A64] text-[9px] md:text-[13px]">10% on off Making Charges</p>
                  </div>
                  <button className="text-white rounded-[30px] bg-linear-to-l from-[#00382D] to-[#009E7F] py-2 text-sm w-full">Buy Now</button>
                </div>
              );
            })}
          </div>
         <div className="flex flex-col lg:flex-row items-center gap-4 mt-4 px-[21px]">
             <div className='w-full'>
                <img src="/image 238.png" className='h-60 w-full md:h-[390px]' alt="" />
            </div>
              <div className='w-full flex items-center gap-4'>
            {imgs3.map((imgSrc, index) => {
              return (
                  <div key={index} className="md:w-[270px] ">
                  <div className="h-[180px] md:h-[280px] bg-[#FFFFFF] w-full flex flex-col justify-between rounded-[15px] border p-3 border-black/10 shadow relative">
                    <div className="flex justify-between items-center z-10">
                   <img className='w-[81px] md:w-[105px]' src="/Group 27168.png" alt="" />
                  <img className='w-3 md:w-[18px]' src="/heart.png" alt="" />
                    </div>
                    <img className='w-5[px] md:w-2 md:hidden absolute left-3 top-1/2' src="/Group 27324.svg" alt="" />
                    <img className='w-[5px] md:w-2 md:hidden absolute right-3 top-1/2' src="/Group 27328.svg" alt="" />
                    <img
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140px] h-[140px] md:w-[220px] md:h-[220px] object-cover"
                      src={imgSrc}
                      alt="Product Image"
                    />
                    <div className="flex justify-between items-center z-10">
                      <div></div>
                      <div className="flex text-[18px] items-center gap-1">
                        <span className="text-orange-300">o</span>
                        <span className="text-gray-400">o</span>
                        <span className="text-red-400">o</span>
                      </div>
                      <div className="">
                         <img className='w-3 md:w-5' src="/Group 27325.png" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="px-3 py-2 leading-4 md:leading-5 tracking-wide font-semibold"> 
                  <p className=" text-[14px] md:text-[18px]">$23,335 <span className="text-black/50 text-[11px] md:text-[13px]">$24,554</span> </p>
                  <span className="text-[10px] md:text-[13px]">Yemarly wings diamond...</span>
                  <p className="text-[#007A64] text-[9px] md:text-[13px]">10% on off Making Charges</p>
                  </div>
                  <button className="text-white rounded-[30px] bg-linear-to-l from-[#00382D] to-[#009E7F] py-2 text-sm w-full">Buy Now</button>
                </div>
              );
            })}
             </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage