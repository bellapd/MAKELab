"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetTitle, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Navbar18() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-yellow-400 backdrop-blur border-b shadow-sm">
      <div className="mx-auto max-w-screen-lg flex flex-wrap items-center justify-between py-2 px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          <Image
            src={"/logo.png"}
            alt="MAKE Lab Logo"
            width={90}
            height={90}
            className="inline-block mr-2"
          />
        </Link>

        {/* Navigation Links */}
        <NavigationMenu>
          <NavigationMenuList className="hidden md:flex space-x-4">
            {["Home", "Advisor", "Lab Members", "Research"].map((item) => (
              <NavigationMenuItem key={item}>
                <NavigationMenuLink asChild>
                  <Link
                    href={
                      item === "Home"
                        ? "/"
                        : `/${item.toLowerCase().replace(/ /g, "-")}`
                    }
                    className="px-3 py-1 text-sm font-medium hover:text-primary"
                  >
                    {item}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Contact Button */}
        <div className="hidden md:block">
          <Button size="sm">
            <Link href="/join-us">Contact Us</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="border-black">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64 sm:w-72">
              {/* A11y Title for Screen Readers */}
              <SheetTitle className="sr-only">MAKE Lab Navigation</SheetTitle>

              <div className="flex flex-col gap-5 mt-10 text-base font-medium">
                <Link href="/">Home</Link>
                <Link href="/advisor">Advisor</Link>
                <Link href="/lab-members">Lab Members</Link>
                <Link href="/research">Research</Link>
                <Button
                  size="sm"
                  className="bg-orange-500 hover:bg-orange-600 text-white text-base"
                >
                  <Link
                    href="/join-us"
                    className="w-full h-full flex items-center justify-center"
                  >
                    Contact Us
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
