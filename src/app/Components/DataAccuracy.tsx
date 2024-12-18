import before from "../../../public/before svg.svg"
import after from "../../../public/after svg.svg"
import Image from "next/image"

export default function DataAccuracy() {
  return (
    <div className="min-h-screen bg-[#F8F9FF] py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h1 className="text-2xl md:text-[28px] font-bold text-[#2A2665] mb-10 max-w-2xl mx-auto text-left sm:text-center pl-10">
          Fix data accuracy problems<br />with BrandNav
        </h1>
        <div className="flex justify-center items-center gap-8 lg:gap-5 mx-auto max-w-6xl p-4 lg:p-8">
  {/* Before Section */}
  <div className="relative flex flex-col ">
   
    <Image
      src={before}
      height={280}
      width={270}
      alt="Before"
      className="object-contain"
    />
  </div>

  {/* After Section */}
  <div className="relative flex flex-col">
    
    <Image
      src={after}
      height={320}
      width={320}
      alt="After"
      className="object-contain mt-[-49px]"
    />
  </div>
</div>


       </div>
      </div>

    
  )
}

