"use client";

import Image from "next/image";
import Link from "next/link";
import {JSX} from "react";
import { Badge } from "@/components/ui/badge";
import { Users, BookOpen, MapPin } from "lucide-react";
import { FaUserTie } from "react-icons/fa";

export default function LandingPage() {
  return (
    <main className="min-h-[80vh] w-full flex items-center justify-center px-6 lg:px-24 2xl:px-48 py-20 bg-white">
      <div className="w-full max-w-screen-2xl grid grid-cols-1 2xl:grid-cols-2 gap-32 items-center">
        {/* Left Section */}
        <div className="flex flex-col items-center 2xl:items-start text-center 2xl:text-left gap-8">
          <Image src="/logo.png" alt="MAKE Logo" width={500} height={500} />
          <h1 className="text-6xl sm:text-7xl 2xl:text-8xl font-light text-black leading-tight">
            Welcome to
            <span className="block font-extrabold mt-4">
              <span className="text-more-orange-500">M</span>
              <span className="text-more-red-500">A</span>
              <span className="text-more-green-500">K</span>
              <span className="text-more-blue-500">E</span>{" "}
              <span className="text-black">Lab</span>
            </span>
          </h1>

          <p className="text-2xl sm:text-3xl text-gray-600">
            多媒體暨知識工程實驗室
          </p>

          <div className="flex flex-wrap gap-4 mt-4 justify-center 2xl:justify-start">
            <Badge className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 text-lg rounded-md">
              Big Data Analytics (巨量資料分析)
            </Badge>
            <Badge className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 text-lg rounded-md">
              Deep Learning (深度學習)
            </Badge>
            <Badge className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 text-lg rounded-md">
              Health Informatics (健康資訊學)
            </Badge>
          </div>
        </div>

        {/* Right Section - Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-full 2xl:max-w-6xl">
          <Card
            href="/lab-members"
            icon={<Users className="w-12 h-12 transition-colors group-hover:text-white" />}
            title="Lab Members"
            desc="Meet our talented member and alumni"
            color="orange"
          />

          <Card
            href="/advisor"
            icon={<FaUserTie className="w-14 h-14 transition-colors group-hover:text-white" />}
            title="Advisor"
            desc={<>
              <strong>Arbee L.P Chen</strong><br />alpchen@cs.nthu.edu.tw
            </>}
            color="red"
          />

          <Card
            href="/research"
            icon={<BookOpen className="w-12 h-12 transition-colors group-hover:text-white" />}
            title="Research"
            desc="Explore the full list of publications"
            color="green"
          />

          <Card
            href="/join-us"
            icon={<MapPin className="w-12 h-12 transition-colors group-hover:text-white" />}
            title="Contact Us"
            desc="For more information, please reach us out!"
            color="blue"
          />
        </div>
      </div>
    </main>
  );
}

function Card({
  title,
  desc,
  href,
  icon,
  color,
}: {
  title: string;
  desc?: string | JSX.Element;
  href: string;
  icon: React.ReactNode;
  color: "orange" | "red" | "green" | "blue";
}) {
  const hoverColor = {
    orange: "hover:bg-more-orange-500 hover:text-white",
    red: "hover:bg-more-red-500 hover:text-white",
    green: "hover:bg-more-green-500 hover:text-white",
    blue: "hover:bg-more-blue-500 hover:text-white",
  }[color];

  return (
    <Link href={href} className="block group">
      <div
        className={`bg-gray-200 p-10 2xl:p-14 rounded-md shadow transition min-h-[260px] 2xl:min-h-[300px] flex flex-col justify-center items-center text-center ${hoverColor}`}
      >
        <div className="flex flex-col items-center text-center gap-5">
          <div className="bg-white group-hover:bg-black p-5 rounded-full border shadow transition-colors">
            {icon}
          </div>
          <div>
            <h3 className="text-xl 2xl:text-2xl font-bold">{title}</h3>
            {desc && <p className="text-base 2xl:text-lg mt-3">{desc}</p>}
          </div>
        </div>
      </div>
    </Link>
  );
}
