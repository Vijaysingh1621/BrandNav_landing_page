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
      <div className="relative pt-10 bg-gradient-to-b from bg-blue-50  to-white min-h-[80vh] flex flex-col items-center justify-center text-center px-4 py-16">
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
       <button className="bg-gradient-to-r from-[#52A8FF] via-[#0084FF] to-[#0084FF] text-white lg:px-12 w-full lg:w-auto  py-[8px] rounded-[10px] text-lg font-medium hover:bg-blue-600 transition-colors mb-2">
          Start for free
        </button>
        
        <div className="flex items-center justify-center gap-4 text-sm text-gray-600 hidden lg:flex md:flex">
          <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none"><path fill="#8A8A8A" d="M11.9 2H2.1A2.1 2.1 0 0 0 0 4.1v6.3a2.1 2.1 0 0 0 2.1 2.1h9.8a2.1 2.1 0 0 0 2.1-2.1V4.1A2.1 2.1 0 0 0 11.9 2Zm.7 8.4a.7.7 0 0 1-.7.7H2.1a.7.7 0 0 1-.7-.7V6.2h11.2v4.2Zm0-5.6H1.4v-.7a.7.7 0 0 1 .7-.7h9.8a.7.7 0 0 1 .7.7v.7Z"/></svg>
            No credit card required
          </div>
          <span>|</span>
          <div className="flex items-center ">
                
                <svg xmlns="http://www.w3.org/2000/svg" width="65" height="13" fill="none"><g clip-path="url(#a)"><g clip-path="url(#b)"><path fill="#787878" d="M64.838 5.16h-4.652L58.744.65l-1.442 4.51H52.65l3.758 2.782-1.422 4.49 3.758-2.784 3.758 2.783-1.442-4.51 3.778-2.762Z"/><path fill="#FFCE31" d="M60.807 5.16h-.62L58.743.65l-1.442 4.51H52.65l3.758 2.782-1.422 4.49 3.758-2.784 2.063 1.532V5.159Z"/></g><g clip-path="url(#c)"><path fill="#FFCE31" d="M12.594 5.119H7.942L6.5.609 5.058 5.12H.406l3.758 2.783-1.422 4.489L6.5 9.608l3.758 2.783-1.442-4.51 3.778-2.762Z"/></g><g clip-path="url(#d)"><path fill="#FFCE31" d="M25.594 5.119h-4.652L19.5.609l-1.442 4.51h-4.652l3.758 2.783-1.422 4.489L19.5 9.608l3.758 2.783-1.442-4.51 3.778-2.762Z"/></g><g clip-path="url(#e)"><path fill="#FFCE31" d="M38.594 5.119h-4.652L32.5.609l-1.442 4.51h-4.652l3.758 2.783-1.422 4.489L32.5 9.608l3.758 2.783-1.442-4.51 3.778-2.762Z"/></g><g clip-path="url(#f)"><path fill="#FFCE31" d="M51.594 5.119h-4.652L45.5.609l-1.442 4.51h-4.652l3.758 2.783-1.422 4.489L45.5 9.608l3.758 2.783-1.442-4.51 3.778-2.762Z"/></g></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h65v13H0z"/></clipPath><clipPath id="b"><path fill="#fff" d="M52 0h13v13H52z"/></clipPath><clipPath id="c"><path fill="#fff" d="M0 0h13v13H0z"/></clipPath><clipPath id="d"><path fill="#fff" d="M13 0h13v13H13z"/></clipPath><clipPath id="e"><path fill="#fff" d="M26 0h13v13H26z"/></clipPath><clipPath id="f"><path fill="#fff" d="M39 0h13v13H39z"/></clipPath></defs></svg> 
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
  
  