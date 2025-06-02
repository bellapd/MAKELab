"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <nav className="relative">
        {/* Background Image */}
        <div className="relative w-full">
          <Image
            src="/navbar-bg.png"
            alt="Navbar Background"
            width={1920}
            height={200}
            className="w-full h-auto"
          />

          {/* Navigation overlay */}
          <div className="absolute inset-0">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 h-full">
              <div className="flex items-center h-full justify-center gap-8">
                {/* Left Navigation */}
                <div className="hidden md:flex items-center space-x-6 flex-grow-0">
                  <Link
                    href="/about"
                    className="text-black hover:text-gray-700 text-lg font-semibold transition-colors duration-200"
                  >
                    About
                  </Link>
                  <Link
                    href="/lab-members"
                    className="text-black hover:text-gray-700 text-lg font-semibold transition-colors duration-200"
                  >
                    Lab Members
                  </Link>
                </div>

                {/* Center Logo */}
                <Link href="/" className="block w-32 h-16 z-10">
                  <div className="w-full h-full" />
                </Link>

                {/* Right Navigation */}
                <div className="hidden md:flex items-center space-x-6 flex-grow-0 justify-end">
                  <Link
                    href="/research"
                    className="text-black hover:text-gray-700 text-lg font-semibold transition-colors duration-200"
                  >
                    Research
                  </Link>
                  <Link
                    href="/join-us"
                    className="text-black hover:text-gray-700 text-lg font-semibold transition-colors duration-200"
                  >
                    Contact Us
                  </Link>
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden ml-auto">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-black hover:text-gray-700"
                  >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute w-full z-20">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-yellow-400 border-t border-orange-300 shadow-lg">
              <Link
                href="/"
                className="block px-3 py-2 text-black hover:text-gray-700 text-lg font-semibold transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/lab-members"
                className="block px-3 py-2 text-black hover:text-gray-700 text-lg font-semibold transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Lab Members
              </Link>
              <Link
                href="/research"
                className="block px-3 py-2 text-black hover:text-gray-700 text-lg font-semibold transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Research
              </Link>
              <Link
                href="/join-us"
                className="block px-3 py-2 text-black hover:text-gray-700 text-lg font-semibold transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  )
}
