import Image from "next/image";

export default function Home() {
  return (
     <div>
           
          <div className="text-center mt-[22px]">
            <h1 className="text-[30px]">Engagement Rings</h1>
            <p className="text-[11px] tracking-wider text-black/80">Explore an array of beautiful jewellery designed to suit every style.</p>
            <p className="text-[11px] tracking-wide text-black/80">Shop your favourite categories and find the perfect piece to make any moment special.</p>
          </div>
           
           <div className="w-full h-full">
             <img
             className="h-[290px] w-full object-cover"
             src="/image 236.png"
             alt="engagementring"
             />
           </div>

           <div className="min-h-[71px] px-[124px] flex items-center justify-between">
                <div className="text-[13px] flex gap-8 text-black/80 items-center">
                    <span className="rounded-[20px] text-white text-[13px] px-5 pt-0.5 pb-1 bg-linear-to-r from-[#1B3536] via-[#029859] to-[#1B3536]">All Rings</span>
                    <span className="">New In</span>
                    <span>today's Specials</span>
                    <span>Best Sellers</span>
                </div>
                 <div className="text-[13px] flex gap-8 text-black/80 items-center">
                    <span className="">Designs in store</span>
                    <span className="border border-black px-3 rounded-[20px] py-1">Ready To Ship</span>
                    <span>Best Sellers</span>
                </div>
           </div>
     </div>
  );
}
