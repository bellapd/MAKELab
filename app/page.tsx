"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {JSX} from "react";
import { Users, BookOpen, MapPin } from "lucide-react";
import { FaUserTie } from "react-icons/fa";

export default function LandingPage() {
  return (
    <main className="flex-grow min-h-[calc(100vh-160px)] w-full px-4 sm:px-8 py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Section - Text Content */}
        <div className="space-y-6">
          <div className="inline-block bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
            多媒體暨知識工程實驗室
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-black leading-tight">
            Welcome to{" "}
            <span className="block mt-2 sm:mt-3 font-extrabold">
              <span className="text-more-orange-500">M</span>
              <span className="text-more-red-500">A</span>
              <span className="text-more-green-500">K</span>
              <span className="text-more-blue-500">E</span>{" "}
              <span className="text-black">Lab</span>
            </span>
          </h1>

          <p className="text-gray-600 text-base sm:text-lg max-w-prose">
            Our research focusess on Big Data Analytics (巨量資料分析), Deep
            Learning (深度學習), Health Informatics (健康資訊學)
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button className="bg-black text-white text-sm px-6 py-2 rounded-full">
              <Link href="/join-us">Contact Us</Link>
            </Button>
            <Button
              variant="outline"
              className="text-sm px-6 py-2 rounded-full"
            >
              <Link href="/research">Explore Publications</Link>
            </Button>
          </div>
        </div>

        {/* Right Section - Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InfoCard
            icon={<Users className="w-10 h-10 text-orange-500" />}
            title="Lab Members"
            desc="Meet our talented member and alumni"
            href="/lab-members"
          />

          <InfoCard
            icon={<FaUserTie className="w-10 h-10 text-red-500" />}
            title="Advisor"
            desc={
              <>
                <strong>Arbee L.P Chen</strong>
                <br />
                alpchen@cs.nthu.edu.tw
              </>
            }
            href="/advisor"
          />

          <InfoCard
            icon={<BookOpen className="w-10 h-10 text-green-500" />}
            title="Research"
            desc="Explore the full list of publications"
            href="/research"
          />

          <InfoCard
            icon={<MapPin className="w-10 h-10 text-blue-500" />}
            title="Contact Us"
            desc="For more information, please reach us out!"
            href="/join-us"
          />
        </div>
      </div>
    </main>
  );
}

function InfoCard({
  title,
  desc,
  href,
  icon,
}: {
  title: string;
  desc?: string | JSX.Element;
  href: string;
  icon: React.ReactNode;
}) {
  return (
    <Link href={href} className="block group">
      <div className="bg-gray-100 hover:bg-gray-200 transition rounded-xl p-6 h-full flex flex-col items-start gap-4 shadow-sm">
        <div className="bg-white p-3 rounded-full shadow border">{icon}</div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-600 mt-1">{desc}</p>
        </div>
      </div>
    </Link>
  );
}
