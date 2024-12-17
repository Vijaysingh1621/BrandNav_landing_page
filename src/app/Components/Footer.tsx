import Link from "next/link"
import { Facebook, Twitter, Instagram, Github } from "lucide-react"
import banner from "../../../public/footer_banner_section.svg"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-[#F8F9FF] py-16 px-4">
        <div className="flex justify-center items-center mb-12">
            <Image src={banner} alt=""/>
            
        </div>
      <div className="container mx-auto">
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-[#1A1B1E] text-xl font-semibold">
              BrandNav.io
            </Link>
            <p className="mt-4 text-gray-600 text-sm leading-relaxed">
              BrandNav is an Ecom Leads Database with tons of amazing filters. Now you can get access to stores with just a simple click.
            </p>
            <div className="flex gap-4 mt-6">
              <Link href="#" className="text-gray-400 hover:text-gray-600">
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-600">
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-600">
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-600">
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>

          {/* Blogs Column */}
          <div>
            <h3 className="font-semibold text-[#1A1B1E] mb-4">Blogs</h3>
            <div className="space-y-3">
              <Link href="#" className="block text-sm text-[#0066FF] hover:underline">
                All Blogs
              </Link>
              <Link href="#" className="block text-sm text-[#0066FF] hover:underline">
                Cold Emailing
              </Link>
            </div>
          </div>

          {/* Documentation Column */}
          <div>
            <h3 className="font-semibold text-[#1A1B1E] mb-4">Documentation</h3>
            <div className="space-y-3">
              <Link href="#" className="block text-sm text-[#0066FF] hover:underline">
                Getting Started
              </Link>
            </div>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="font-semibold text-[#1A1B1E] mb-4">Resources</h3>
            <div className="space-y-3">
              <Link href="#" className="block text-sm text-[#0066FF] hover:underline">
                Latest Updates
              </Link>
              <Link href="#" className="block text-sm text-[#0066FF] hover:underline">
                Roadmap
              </Link>
              <Link href="#" className="block text-sm text-[#0066FF] hover:underline">
                About Us
              </Link>
              <Link href="#" className="block text-sm text-[#0066FF] hover:underline">
                Join Us
              </Link>
            </div>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="font-semibold text-[#1A1B1E] mb-4">Legal</h3>
            <div className="space-y-3">
              <Link href="#" className="block text-sm text-[#0066FF] hover:underline">
                Terms & Conditions
              </Link>
              <Link href="#" className="block text-sm text-[#0066FF] hover:underline">
                Privacy Policy
              </Link>
              <Link href="#" className="block text-sm text-[#0066FF] hover:underline">
                Refund Policy
              </Link>
              <Link href="#" className="block text-sm text-[#0066FF] hover:underline">
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            © 2022 BrandNav. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
