import gift from "../../../public/gift.svg"
import Ratings from "../../../public/rating-star.svg"
import CreditCard from "../../../public/credit_card.svg"
import Banner from "../../../public/banner.png"
import tick from "../../../public/circle-tick.svg"
import Tesitmonial1 from "../../../public/testimonial2.svg"
import Tesitmonial2 from "../../../public/testimonial2.svg"
import Tesitmonial3 from "../../../public/testimonial2.svg"
import Tesitmonial4 from "../../../public/testimonial2.svg"
import Tesitmonial5 from "../../../public/testimonial2.svg"
import numbers from "../../../public/10k.svg"
import Image from "next/image";
export default function PricingCard() {
    return (
      <div className="min-h-screen w-full p-4 flex items-center justify-center" 
      style={{
        backgroundImage: `url(${Banner.src})`,
      }} >
        <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 lg:gap-[80px] gap-8 px-8 items-center lg:px-[200px] ">
          {/* Pricing Card */}
          <div className="bg-white rounded-3xl p-8 mt-10 mb-10 shadow-xl  w-auto h-auto w-[363px] h-[625px] pb-[-150px]">
            <div className="flex flex-col items-center text-center">
              {/* Gift Icon */}
              <div className="w-16 h-16 mb-4">
                <span className="text-4xl">
                  <Image src={gift} alt="Gift" />
                  </span>
              </div>
            
              {/* Pricing */}
              <h2 className="text-2xl font-bold text-[#1a237e] mb-2">Free</h2>
              <div className="text-4xl font-bold text-[#1a237e] mb-4">$0</div>
  
              {/* CTA Button */}
              <button className="bg-[#007bff] text-white px-6 py-2 rounded-lg w-full hover:bg-blue-600 transition-colors mb-4">
                Grab free leads
              </button>
  
              {/* Rating */}
              <div className="flex items-center justify-center gap-2 text-[9px] text-gray-600 lg:flex md:flex">
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
              {/* Features List */}
              <div className="space-y-4 text-left w-full mt-5">
                <div className="flex items-center gap-2">
                  <Image src={tick} alt="tick" />
                  <span className="text-gray-700">All BrandNav features included</span>
                </div>
                <div className="flex items-center gap-2">
                <Image src={tick} alt="tick" />
                  <span className="text-gray-700">200 Screener credits per month</span>
                </div>
                <div className="flex items-center gap-2">
                <Image src={tick} alt="tick" />
                  <span className="text-gray-700">25 Enricher credits per month</span>
                </div>
                <div className="flex items-center gap-2">
                <Image src={tick} alt="tick" />
                  <span className="text-gray-700">Pinpoint ideal prospects</span>
                </div>
                <div className="flex items-center gap-2">
                <Image src={tick} alt="tick" />
                  <span className="text-gray-700">Chat support with real humans</span>
                </div>
              </div>
  
              {/* Social Proof */}
              <div className="mt-8">
                <div className="flex justify-center -space-x-2">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-white overflow-hidden"
                    >
                      <Image
                        src={Tesitmonial3}
                        alt={`User ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                  <Image
                        src={numbers}
                        alt="numbers" height={2} width={2}
                        className="w-8 h-8 object-cover"
                      />
                </div>
                <p className="text-[12px] text-gray-600 mt-3 text-center">
                Trusted by 10,000+ users
                </p>
              </div>
            </div>
          </div>
  
          {/* Right Side Text */}
          <div className="text-white text-center md:text-left">
            <h2 className="text-3xl md:text-[30px] font-bold mb-6">
              Not convinced yet?
            </h2>
            <p className="text-4xl md:text-4xl font-semibold">
              Take it for a{" "}
              <span className="text-[#007bff] mb-6">FREE</span> spin
              <br />
              <span className="text-3xl mt-10">before committing</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  