"use client";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-4 left-1/2 z-50 -translate-x-1/2 w-[95vw] max-w-screen-md rounded-2xl border bg-yellow-400 shadow-2xl px-4 py-3">
      <nav className="flex items-center justify-center gap-6">
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <Link
            href="/"
            className="text-xl font-medium text-black"
          >
            Home
          </Link>  
          
          <Link
            href="/advisor"
            className="text-xl font-medium text-black hover:text-orange-500 transition-colors duration-200" 
          >
            Advisor
          </Link>

          <Link
            href="/lab-members"
            className="text-xl font-medium text-black hover:text-blue-600 transition-colors duration-200"
          >
            Lab Members
          </Link>

          <Link
            href="/research"
            className="text-xl font-medium text-black hover:text-green-600 transition-colors duration-200"
          >
            Research
          </Link>

          <Button
            size="lg"
            className="bg-black text-white text-xl px-6"
          >
            <Link href="/join-us" className="w-full h-full flex items-center justify-center">
              Join Us
            </Link>
          </Button>
        </div>

        {/* Mobile Menu (Sheet) */}
        <div className="md:hidden ml-auto">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <div className="flex flex-col gap-6 mt-10">
                <Link href="/" className="text-base font-medium">Home</Link>
                <Link href="/advisor" className="text-base font-medium">Advisor</Link>
                <Link href="/lab-members" className="text-base font-medium">Lab Members</Link>
                <Link href="/research" className="text-base font-medium">Research</Link>
                <Button
                  size="sm"
                  className="bg-more-orange-500 hover:bg-more-orange-600 text-white text-base"
                >
                  <Link href="/join-us" className="w-full h-full flex items-center justify-center">
                    Join Us
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
