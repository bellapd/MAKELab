import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionItem } from "@/components/ui/accordion"
import visitingAcademics from "@/data/visiting_academics.json" assert { type: "json" };
import programCommittees from "@/data/program_committees.json" assert { type: "json" };
import awards from "@/data/awards.json" assert { type: "json" };
import patents from "@/data/patents.json" assert { type: "json" };

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-20">
          <h1 className="text-6xl font-light mb-8 text-gray-900">
            Welcome to{" "}
            <span className="text-black-900 font-bold">
              MAKE Lab
            </span>
          </h1>
          <h2 className="text-4xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
           多媒體暨知識工程實驗室
          </h2>
        </div>

        {/* Professor Section */}
        <div className="mb-20">
          <div className="grid md:grid-cols-5 gap-12 items-start">
            <div className="md:col-span-2">
              <Image
                src="prof.jpeg"
                alt="Arbee L.P. Chen"
                width={220}
                height={300}
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="md:col-span-3 space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-2">Arbee L.P. Chen</h2>
                <p className="text-xl text-gray-600 mb-1">Professor</p>
                <a href="mailto:alpchen@cs.nthu.edu.tw" className="text-orange-500 font-medium">alpchen@cs.nthu.edu.tw</a>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 border-l-4 border-orange-500 pl-4">
                    Education
                  </h3>
                  <div className="space-y-2 text-gray-600 pl-4">
                    <p>Ph.D. in Computer Engineering, Department of Electrical Engineering, University of Southern California, USA</p>
                    <p>B.S. in Computer Science, Department of Computer Science, National Chiao-Tung University, Taiwan, ROC</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 border-l-4 border-red-500 pl-4">
                    Current Position
                  </h3>
                  <p className="text-gray-600 pl-4">Professor of Department of Computer Science, National Tsing Hua University by Joint Appointment</p> <br/>
                  <p className="text-gray-600 pl-4">Chair Professor of Department of Computer Science and Information Engineering/Vice President/Dean of College of Information and Electrical Engineering, Asia University</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 border-l-4 border-green-500 pl-4">
                    Research Focus
                  </h3>
                  <div className="flex flex-wrap gap-3 pl-4">
                    <Badge className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2">Big Data Analytics (巨量資料分析)</Badge>
                    <Badge className="bg-red-500 hover:bg-red-600 text-white px-4 py-2">Deep Learning (深度學習)</Badge>
                    <Badge className="bg-green-500 hover:bg-green-600 text-white px-4 py-2">Health Informatics (健康資訊學)</Badge>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 border-l-4 border-blue-500 pl-4">
                    Recent Recognition
                  </h3>
                  <div className="space-y-2 text-gray-600 pl-4">
                    <p>Best Paper Award, 2019 ACM/SIGAPP Symposium on Applied Computing (2019)</p>
                    <p>Master Thesis Supervision Award, Institute of Information & Computing Machinery(2014/2015)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Experience */}
        <div className="mt-20 pt-16 border-t border-gray-200">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Professional Experience</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="border-l-4 border-orange-500 pl-6 py-2">
                <h4 className="font-semibold text-gray-900">National Tsing Hua University</h4>
                <p className="text-gray-600">Professor of Department of Computer Science by Joint Appointment<br /> 
                  Director of Computer and Communications Center</p>
              </div>
              <div className="border-l-4 border-red-500 pl-6 py-2">
                <h4 className="font-semibold text-gray-900">National Chengchi University</h4>
                <p className="text-gray-600">University Chair Professor in Computer Science <br /> 
                Dean of College of Science <br /> 
                Director of Center for Teaching and Learning Development</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-6 py-2">
                <h4 className="font-semibold text-gray-900">Asia University</h4>
                <p className="text-gray-600">Chair Professor of Department of Computer Science and Information Engineering/Vice President/Dean of College of Information and Electrical Engineering</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-6 py-2">
                <h4 className="font-semibold text-gray-900">Academia Sinica</h4>
                <p className="text-gray-600">Researcher (Joint Appointment), Research Center for Information Technology Innovation</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-6 py-2">
                <h4 className="font-semibold text-gray-900">Bell Communications Research, USA</h4>
                <p className="text-gray-600">Member of Technical Staff</p>
              </div>
             
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-red-500 pl-6 py-2">
                <h4 className="font-semibold text-gray-900">Unisys Inc., USA</h4>
                <p className="text-gray-600">Research Scientist</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* 1.1 Visiting Academics */}
            <section className="pt-16 border-t border-gray-200">
              <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Visiting Academics</h3>
              <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
              {visitingAcademics.slice(0, 5).map(academic => (
                <AccordionItem 
                  key={academic.id} 
                  value={`item-${academic.id}`} 
                >
                  <div className="font-semibold text-lg">{academic.university} ({academic.location})</div>
                  <p>{academic.department}</p>
                </AccordionItem>
              ))}
              </Accordion>
              <div className="mt-8 text-center">
                <Link href="/about#visiting-academics">
                  <span className="text-blue-600 hover:underline text-lg">See more →</span>
                </Link>
              </div>
            </section>

            {/* 1.2 Program Comitees */}
            <section className="pt-16 border-t border-gray-200">
              <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Program Comitees</h3>
              <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
              {programCommittees.slice(0, 5).map(comitee => (
                <AccordionItem 
                  key={comitee.id} 
                  value={`item-${comitee.id}`} 
                >
                  <div className="font-semibold text-lg">{comitee.conference}</div>
                  <p>{comitee.years.join(", ")}</p>
                </AccordionItem>
              ))}
              </Accordion>
              <div className="mt-8 text-center">
                <Link href="/about#program-comitee">
                  <span className="text-blue-600 hover:underline text-lg">See more →</span>
                </Link>
              </div>
            </section>

            {/* 2.1 Awards */}
            <section className="pt-16 border-t border-gray-200">
              <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Awards</h3>
              <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
                {/* Accordion items*/}
                {awards.slice(0, 5).map(award => (
                  <AccordionItem 
                    key={award.id} 
                    value={`item-${award.id}`} 
                  >
                    <div className="font-semibold text-lg">{award.award}</div>
                    <p>{award.year} - {award.conference}</p>
                  </AccordionItem>
                ))}
              </Accordion>
              <div className="mt-8 text-center">
                <Link href="/about#awards">
                  <span className="text-blue-600 hover:underline text-lg">See more →</span>
                </Link>
              </div>
            </section>

            {/* 2.2 Patents */}
            <section className="pt-16 border-t border-gray-200">
              <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Patents</h3>
              <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
                {patents.slice(0, 5).map(patent => (
                  <AccordionItem 
                    key={patent.id} 
                    value={`item-${patent.id}`}
                  >
                    <div className="font-semibold text-lg">{patent.title}</div>
                    <p>{patent.patent_numbers}</p>
                  </AccordionItem>
                ))}
              </Accordion>
              <div className="mt-8 text-center">
                <Link href="/about#patents">
                  <span className="text-blue-600 hover:underline text-lg">See more →</span>
                </Link>
              </div>
            </section>
          </div>
        </div>

      </div>
    </div>
  )
}
