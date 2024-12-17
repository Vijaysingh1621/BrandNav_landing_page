import Ratings from "../../../public/rating-star.svg"
import CreditCard from "../../../public/credit_card.svg"
import verifierCard from "../../../public/verifier_card.svg"
import screenerCard from "../../../public/screener-card-lp.svg"
import enricherCard from "../../../public/enricher-card-lp.svg"
import blackShieldCard from "../../../public/blacklist-shield-card-lp.svg"
import brand1 from "../../../public/sentry-ecom-new.svg"
import brand2 from "../../../public/acexmedia-new.svg"
import brand3 from "../../../public/outreach-clerk-new.svg"
import brand4 from "../../../public/og-new.svg"
import brand5 from "../../../public/xlr-media-new.svg"
import Image from "next/image"

export function Hero() {
    return (
      <div className="relative pt-10 bg-[#F8F7FF]  min-h-[80vh] flex flex-col items-center justify-center text-center px-4 py-16">
       <h1 className="text-[2.5rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[56px] font-[540] leading-tight text-[#0D2052] max-w-4xl mx-auto mb-6 text-left sm:text-center">
        Weapons to grow<br />
        your Business
        </h1>
        <div className="max-w-2xl mx-auto space-y-1 mb-8 mt-0 gap-0  text-left sm:text-center">
        <p className="text-gray-600 sm:text-xl lg:text-[16px] ">
            Turbocharge your business growth.
        </p>
        <p className="text-gray-600 sm:text-xl lg:text-[16px] ">
            Our products help ignite sales and entrepreneurship.
        </p>
        </div>

       
       <div> 
       <button className="bg-gradient-to-r from-[#52A8FF] via-[#0084FF] to-[#0084FF] text-white lg:px-12 w-full lg:w-auto mx-0 py-[8px] rounded-[10px] text-lg font-medium hover:bg-blue-600 transition-colors mb-2">
          Start for free
        </button>
        
        <div className="flex items-center justify-center gap-4 text-sm text-gray-600 hidden lg:flex md:flex">
          <div className="flex items-center gap-2">
            <Image src={CreditCard} alt="card"/>
                
            No credit card required
          </div>
          <span>|</span>
          <div className="flex items-center ">

          <Image src={Ratings} alt="card"/>
           <span className="ml-1">4.8/5 G2 Rating</span> 
          </div>
        

       </div>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4  w-full max-w-6xl mx-auto p-2  rounded-xl">
            

      {/* Verifier Card */}
      <div className="bg-white rounded-xl shadow-lg items-center justify-center h-auto ">
        <Image
          src={verifierCard}
          alt="Verifier Card"
          className="w-full h-auto object-contain lg:mt-[-80px]  mt-[0px]"
        />
      </div>

      {/* Screener Card */}
      <div className=" bg-white rounded-xl shadow-lg flex items-center justify-center">
        <Image
          src={screenerCard}
          alt="Screener Card"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Black Shield Card */}
      <div className=" bg-white rounded-xl shadow-lg  flex items-center justify-center">
        <Image
          src={blackShieldCard}
          alt="Black Shield Card"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Enricher Card */}
      <div className=" bg-white rounded-xl shadow-lg  flex items-center justify-center  ">
        <Image
          src={enricherCard}
          alt="Enricher Card"
          className="w-full h-auto object-contain lg:mt-[-80px]  mt-[0px]"
        />
      </div>
        </div>
        </div>
        <div className="p-8">
                <h4 className="lg:text-[18px] text-[14px] md:text-[15px] font-poppins text-[#666666] mb-[9px] p-5">
                    Modern companies are using <span className="font-semibold">BrandNav</span>
                </h4>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-6 lg:gap-8">
                <Image src={brand1} alt="brand1" className=" h-auto" />
                <Image src={brand2} alt="brand2" className=" h-auto" />
                <Image src={brand3} alt="brand3" className=" h-auto" />
                <Image src={brand4} alt="brand4" className="h-auto" />
                <Image src={brand5} alt="brand5" className=" h-auto" />
                </div>

        </div>

      </div>
    )
  }
  
  