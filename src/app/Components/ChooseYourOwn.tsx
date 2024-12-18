import leftSideImage from "../../../public/third-section-image-left.svg"
import rightSideImage from "../../../public/third-section-image-right.svg"
import card1 from "../../../public/card 1.png"
import card2 from "../../../public/card 2.png"
import card3 from "../../../public/card 3.png"
import card4 from "../../../public/card 5.png"
import React from 'react'
import Image from "next/image"

export default function ChooseYourOwn() {
  return (
    <div className='bg-blue-50 lg:px-[140px] px-2'>
       <section className=" py-16 px-4 max-w-7xl mx-auto">
        {/* Header */}
        <div className="lg:text-center mb-16 md:text-center text-left">
          <h2 className="text-2xl   md:text-[28px] font-bold text-[#2A2665] mb-2  max-w-2xl lg:mx-auto text-left sm:text-center">
            Choose Your Weapon
          </h2>
          <p className="text-gray-600 lg:text-lg md:text-lg text-[16px]">
            BrandNav is a multi-dimensional platform designed for revenue growth
          </p>
        </div>
        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-6 mb-24 bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
          {/* Screener Search */}
          <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-48 mb-6 flex items-center justify-center">
              {/* Placeholder for image */}
              <Image src={card2} alt="" height={400} width={400}/>
              <div className="w-full h-full rounded-lg bg-gray-50" />
            </div>
            <h3 className="text-xl font-semibold text-[#0D2052] mb-2">
              Screener Search
            </h3>
            <p className="text-gray-600">
              Build your list with advanced search filters
            </p>
          </div>
  
          {/* Enricher Lookup */}
          <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-48 mb-6 flex items-center justify-center">
              {/* Placeholder for image */}
              <Image src={card2} alt="" height={400} width={400}/>
              <div className="w-full h-full rounded-lg bg-gray-50" />
            </div>
            <h3 className="text-xl font-semibold text-[#0D2052] mb-2">
              Enricher Lookup
            </h3>
            <p className="text-gray-600">
              Get verified contact information from Enricher
            </p>
          </div>
  
          {/* Email Verifier */}
          <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-48 mb-6 flex items-center justify-center">
              {/* Placeholder for image */}
              <Image src={card3} alt="" height={400} width={400}/>
              <div className="w-full h-full rounded-lg bg-gray-50" />
            </div>
            <h3 className="text-xl font-semibold text-[#0D2052] mb-2">
              Email Verifier
            </h3>
            <p className="text-gray-600">
              Reduce bounces with 100% verified emails
            </p>
          </div>
  
          {/* Blacklist Shield */}
          <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-48 mb-6 flex items-center justify-center">
              {/* Placeholder for image */}
              <Image src={card4} alt="" height={400} width={400}/>
              <div className="w-full h-full rounded-lg bg-gray-50" />
            </div>
            <h3 className="text-xl font-semibold text-[#0D2052] mb-2">
              Blacklist Shield
            </h3>
            <p className="text-gray-600">
              Monitor and boost your email deliverability
            </p>
          </div>
        </div>
  
        {/* Bottom Section */}
        <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow mt-[-100px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#0D2052] mb-4">
              The ultimate eCom leads database
            </h2>
            <p className="text-gray-600 mb-8">
            Get powerful insights of 99.99% eCommerce and DTC brands that can help you build your ideal prospect list.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#0066FF] text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                Try for free
              </button>
              <button className="text-[#0066FF] hover:text-blue-700 flex items-center gap-2 font-medium">
                Learn more
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transform rotate-[-45deg]"
                >
                  <path
                    d="M3.33337 8H12.6667"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 3.33331L12.6667 7.99998L8 12.6666"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="h-[400px] bg-gray-50 rounded-2xl  flex-row md:flex-row items-center justify-center gap-4 p-4 hidden lg:flex md:flex ">
              {/* Left Side Image */}
              <Image
                src={leftSideImage}
                height={229}
                width={136}
                alt="Left_image"
                className="w-[120px] sm:w-[136px] md:w-[156px] lg:w-[180px] h-auto"
              />

              {/* Right Side Image */}
              <Image
                src={rightSideImage}
                height={156}
                width={136}
                alt="Right_image"
                className="w-[120px] sm:w-[136px] md:w-[156px] lg:w-[180px] h-auto"
              />
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
