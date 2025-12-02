import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#141C1E] md:bg-[#1B3536] pt-3 w-full mt-10 pb-5 '>
      <div className='hidden md:flex items-center gap-5 justify-between px-5 lg:px-20 pt-5'>
        <div>
          <h2 className='text-[#21DAD8] uppercase font-bold text-[15px] mb-3'>Contact Us</h2>
           <ul className='flex flex-col text-white text-[14px]
            gap-2'>
            <li className='flex gap-2'><span className='pt-1.5'>  <img className='w-3' src="image 175 (Traced).png" alt="" /></span>
             <span className='flex flex-col'>
                +91 44494 559604
               <span className='text-red-700'>(10am-8pm, 7 days a week) </span>
             </span>
            </li>
            <li className='flex gap-2 '><span className='pt-1.5'>  <img className='w-3' src="image 173 (Traced).png" alt="" /></span>
             <span className='flex flex-col'>
                info@gemlay.com
             </span>
            </li>
             <li className='flex gap-2 '><span className='pt-1.5'>  <img className='w-3' src="image 174 (Traced).png" alt="" /></span>
             <span className='flex flex-col'>
                Gemlay Jewels Private Limited
               <span className='text-[12px]'>Unit No 15, Ground Floor, Jubilee 
Juncttion , Mohali , 160062 </span>
             </span>
            </li>
           </ul>
        </div>
        <div>
             <h2 className='text-[15px] text-[#21DAD8] uppercase font-bold mb-3'>Our Services</h2>
             <ul className='flex text-white flex-col text-[11px] gap-2'>
              <li>Gold Rates</li>
              <li>Digital Gold</li>
              <li>Various Payment Method</li>
              <li>Financing Assurance</li>
              <li>Gemlay Assurance</li>
              <li>Franchise Enquiry</li>
             </ul>
        </div>
        <div>
             <h2 className='text-[15px] text-[#21DAD8] uppercase font-bold mb-3'>Our Policies</h2>
             <ul className='flex text-white flex-col text-[11px] gap-2'>
              <li>Gold Rates</li>
              <li>Digital Gold</li>
              <li>Various Payment Method</li>
              <li>Financing Assurance</li>
              <li>Gemlay Assurance</li>
              <li>Franchise Enquiry</li>
             </ul>
        </div>
      <div>
             <h2 className='text-[15px] text-[#21DAD8] uppercase font-bold mb-3'>Jewellery knowledge</h2>
             <ul className='flex text-white flex-col text-[11px] gap-2'>
              <li>Gold Rates</li>
              <li>Digital Gold</li>
              <li>Various Payment Method</li>
              <li>Financing Assurance</li>
              <li>Gemlay Assurance</li>
              <li>Franchise Enquiry</li>
             </ul>
        </div>
         <div>
             <h2 className='text-[15px] text-[#21DAD8] uppercase font-bold mb-3'>About Us</h2>
             <ul className='flex text-white flex-col text-[11px] gap-2'>
              <li>Gold Rates</li>
              <li>Digital Gold</li>
              <li>Various Payment Method</li>
              <li>Financing Assurance</li>
              <li>Gemlay Assurance</li>
              <li>Franchise Enquiry</li>
             </ul>
        </div>
      </div>

<div className='px-20 mb-4'>
     <span className='text-[16px] text-white'>
                Download Our Application
             </span>
            <div className='flex mt-2 items-center gap-1'>
  <img className='w-[100px]' src="gplay.png" alt="" />
  <img className='w-[100px]' src="apple.png" alt="" />
            </div>
</div>

      <h1 className='text-[24px] font-semibold text-center mt-2 md:hidden text-white'>Subscribe Newsletter</h1>
      <div className='pt-5 m-auto mb-5 md:hidden'>
      <img src="/image 241.png " className='m-auto' alt="" />
      </div>

      <hr  className='border border-[#21DAD8] px-2 mb-5 '/>

       <div className=' md:hidden flex flex-col gap-2 px-[68px] text-[12px] font-bold text-[#4CC7B2] uppercase'>
           <p className='flex justify-between items-center'>Our Policies <span className='text-[#4CC7B2]'>^</span></p>
                      <p className='flex justify-between items-center'>Our Service <span className='text-[#4CC7B2]'>^</span></p>
                      <p className='flex justify-between items-center'>Jewellery Knowledge <span className='text-[#4CC7B2]'>^</span></p>

       </div>
   
      <div className='hidden md:flex justify-between gap-5 items-center px-5 lg:px-20  text-white'>
         <p className='text-[11px]'>@ 2024 GEMLAY.COM . ALL RIGHTS RESERVED</p>
         <div className='flex items-center gap-2'>
          <p className='font-bold text-[15px]'>FOLLOW US</p>
            <div className='flex items-center gap-2'>
            <span>
              <img className='w-9' src="facebook 1.png" alt="" />
            </span>
            <span>
              <img className='w-9' src="instagram 1.png" alt="" />
            </span>
             <span>
              <img className='w-9' src="youtube 1.png" alt="" />
             </span>
            <span>
              <img className='w-9' src="/logo 1.png" alt="" />
            </span>
            <span>
              <img className='w-9' src="social 1.png" alt="" />
            </span>
           
            </div>
         </div>
            <p className='text-[11px]'>SITE MAP | PRIVACY POLICY | TERMS AND CONDITIONS | FAQs</p>
      </div>
    </div>
  )
}

export default Footer