"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-yellow-400 text-black shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 py-5 space-y-4">
        {/* Top Section: Logo + Links + Address */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
          {/* Logo + Links */}
          <div className="flex flex-col sm:flex-row sm:items-start gap-4">
            <Image
              src="/logo.png"
              alt="MAKE Lab Logo"
              width={80}
              height={80}
              className="rounded-lg"
            />
          </div>

          {/* Address */}
          <div className="text-sm text-black max-w-sm">
            <p>National Tsing Hua University, General Building II A, 701</p>
            <p className="mt-1">國立清華大學，第二綜合大樓 A, 701</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-black-300 pt-4 flex flex-col sm:flex-row justify-between items-center text-sm text-black">
          <span>© 2025 MAKE Lab. All rights reserved.</span>
          <span className="mt-2 sm:mt-0">多媒體暨知識工程實驗室</span>
        </div>
      </div>
    </footer>
  );
}
