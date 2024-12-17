import before from "../../../public/before svg.svg"
import after from "../../../public/after svg.svg"
import Image from "next/image"

export default function DataAccuracy() {
  return (
    <div className="min-h-screen bg-[#F8F9FF] py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h1 className="text-[#2B3377] text-4xl md:text-4xl font-bold text-center mb-16">
          Fix data accuracy problems<br />with BrandNav
        </h1>

        {/* Before/After Container */}
        <div className="grid md:grid-cols-2 gap-4 max-w-6xl mx-auto ">
            <div className="flex justify-center items-center px-10 ">
                <Image src={before} height={350} width={350} alt="" className="lg:mr-[-30px]"/>
           
            </div>
            <div className=" ">
                <Image src={after} height={420} width={420} alt="" className="ml-14 lg:ml-[-10px] "/>
            </div>
          
          </div>
        </div>
      </div>
    
  )
}

