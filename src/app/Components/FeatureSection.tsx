"use client"
import CreditCard from "../../../public/credit_card.svg"
import Ratings from "../../../public/rating-star.svg"
import Image from "next/image";
import Feature1 from "../../../public/feature-1.svg"
import feature11 from "../../../public/feature-11.svg"
import feature12 from "../../../public/feature-12.svg"

export default function FeatureSection() {
  return (
    <div className="min-h-screen bg-[#F8F7FF] py-16 px-4 relative overflow-hidden">
      {/* Dotted pattern background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute right-0 top-1/4 w-48 h-48 bg-dots opacity-20" />
        <div className="absolute left-0 bottom-1/4 w-48 h-48 bg-dots opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-4xl font-bold text-[#2A2665] mb-4">
            Why should you use BrandNav?
          </h2>
          <p className="text-md text-[#6B7280] max-w-2xl mx-auto">
            Optimize your workflow for faster results and higher revenue
          </p>
        </div>
            

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center lg:px-[140px]">
          {/* Enrich CSV Feature */}
          <div className="relative">
            <div className="z-10 " >
              <div className="relative w-auto h-auto">
                <Image
                  src={Feature1}
                  height={500}
                  width={500}
                  alt="CSV Enrichment Interface"
                //   layout="fill"
                  objectFit="cover"
                  className="rounded-lg "
                />
                <div className="flex flex-row gap-5 absolute top-[140px]">
                <Image src={feature11} height={180} width={180} alt="" className=""/>
                <Image src={feature12} height={180} width={180} alt="" className=""/>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="" />
          </div>
          <div className="space-y-6">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#2A2665]">Enrich any CSV</h3>
            <p className="text-[#6B7280] leading-relaxed">
              BrandNav transforms your CSV files by adding valuable contact,
              firmographics, and technographics data. With just a few clicks, you
              can enhance your data with enriched information and unlock new
              insights and opportunities.
            </p>

             {/* Pricing */}
           <div className=" flex flex-col justify-center items-start pb-10">
              {/* CTA Button */}
              <button className="bg-[#007bff] text-white px-6 py-2 rounded-lg w-full lg:w-[200px] hover:bg-blue-600 transition-colors mb-4">
                Grab free leads
              </button>
  
              {/* Rating */}
              <div className="flex items-center justify-center gap-2 text-[13px] text-gray-600 lg:flex md:flex">
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
                </div>
          </div>

          

          {/* Fresh Data Updates Feature */}
          <div className="space-y-6 md:order-3">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#2A2665]">
              Fresh data updates everyday
            </h3>
            <p className="text-[#6B7280] leading-relaxed">
              BrandNav updates its data every day, providing the most recent and
              accurate information to its users. With a constant stream of new
              information, BrandNav ensures that users have access to the latest
              contact, firmographics, and technographics data for better
              decision-making.
            </p>
          </div>
          <div className="relative md:order-4">
            <div className="bg-white rounded-lg shadow-xl p-6 relative z-10">
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Fresh Data Updates Interface"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -left-8 -bottom-8 w-48 h-48 bg-dots opacity-20 z-0" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-dots {
          background-image: radial-gradient(#2A2665 1px, transparent 1px);
          background-size: 16px 16px;
        }
      `}</style>
    </div>
  );
}
