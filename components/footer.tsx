"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  const [email, setEmail] = useState("")

  const handleSubscribe = () => {
    // Implement your subscription logic here
    alert(`Subscribed with email: ${email}`)
    setEmail("")
  }

  return (
    <footer className="w-full bg-yellow-400 text-gray-900 shadow-xl">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 md:gap-0">
          {/* Left side: address + logo + nav stacked vertically */}
          <div className="flex flex-col md:flex-row md:items-start md:space-x-16 space-y-6 md:space-y-0 md:flex-1">
            {/* Logo and Navigation links stacked vertically */}
            <div className="flex flex-col md:flex-row md:items-start md:space-x-10 space-y-6 md:space-y-0">
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={200}
                  height={200}
                  className="rounded-full"
                />
              </div>

              {/* Navigation links stacked vertically */}
              <nav className="flex flex-col space-y-3 text-sm text-gray-900">
                {[
                  { label: "Advisor", href: "/advisor" },
                  { label: "Lab Members", href: "/lab-members" },
                  { label: "Research", href: "/research" },
                  { label: "Contact Us", href: "/join-us" },
                ].map(({ label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    className="hover:text-gray-700 transition-colors"
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          {/* Right side: newsletter or other content */}
          <div className="w-full max-w-md">
            {/* Address block */}
            <div className="text-sm text-gray-700 max-w-xs md:max-w-none">
              <p className="text-black-400">National Tsing Hua University, General Building IIA, 701</p> <br/>
              <p className="text-black-400">國立清華大學，第二綜合 A, 701</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-gray-300 flex flex-col md:flex-row md:justify-between md:items-center text-sm text-gray-700">
          <div>© 2025 MAKELab. All rights reserved.</div>
          <div className="flex space-x-6 mt-4 md:mt-0 text-gray-700">
            <p className="text-gray-400">多媒體暨知識工程實驗室</p> 
          </div>
        </div>
      </div>
    </footer>
  )
}
