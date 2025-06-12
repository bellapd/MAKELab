"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import visitingAcademics from "@/data/visiting_academics.json" assert { type: "json" };
import programCommittees from "@/data/program_committees.json" assert { type: "json" };
import awards from "@/data/awards.json" assert { type: "json" };
import PHDthesissupervision from "@/data/phd_thesis_supervision.json" assert { type: "json" };

export default function Advisor() {
  const renderVisitingTable = () => (
    <Card className="shadow-sm border border-gray-200 mt-6">
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50 hover:bg-gray-50">
              <TableHead>ID</TableHead>
              <TableHead>University</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Location</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {visitingAcademics.map((item) => (
              <TableRow key={item.id} className="hover:bg-gray-50">
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.university}</TableCell>
                <TableCell>{item.department}</TableCell>
                <TableCell>{item.location}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );

  const renderProgramCommittees = () => (
    <>
      <Card className="shadow-sm border border-gray-200 mt-4">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50 hover:bg-gray-50">
                <TableHead>ID</TableHead>
                <TableHead>Conference</TableHead>
                <TableHead>Years</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {programCommittees.map((item) => (
                <TableRow key={item.id} className="hover:bg-gray-50">
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.conference}</TableCell>
                  <TableCell>{item.years.join(", ")}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );

  const renderAwardsTable = () => (
    <Card className="shadow-sm border border-gray-200 mt-6">
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50 hover:bg-gray-50">
              <TableHead>ID</TableHead>
              <TableHead>Award</TableHead>
              <TableHead>Conference</TableHead>
              <TableHead>Year</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {awards.map((item) => (
              <TableRow key={item.id} className="hover:bg-gray-50">
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.award}</TableCell>
                <TableCell>{item.conference}</TableCell>
                <TableCell>{item.year}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen max-w-5xl mx-auto px-6 py-26 pt-52 bg-white">
      {/* Professor Section */}
      <div className="mb-20">
        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-2">
            <Image
              src="prof.jpeg"
              alt="Arbee L.P. Chen"
              width={300}
              height={300}
              className="rounded-xl shadow-2xl w-48 md:w-56 lg:w-64 h-auto object-cover mx-auto mb-6 md:mb-0"
            />
          </div>
          <div className="md:col-span-3 space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">
                Arbee L.P. Chen
              </h2>
              <p className="text-xl text-gray-600 mb-1">Professor</p>
              <a
                href="mailto:alpchen@cs.nthu.edu.tw"
                className="text-orange-500 font-medium"
              >
                alpchen@cs.nthu.edu.tw
              </a>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 border-l-4 border-orange-500 pl-4">
                  Education
                </h3>
                <div className="space-y-2 text-gray-600 pl-4">
                  <p>
                    Ph.D. in Computer Engineering, Department of Electrical
                    Engineering, University of Southern California, USA
                  </p>
                  <p>
                    B.S. in Computer Science, Department of Computer Science,
                    National Chiao-Tung University, Taiwan, ROC
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 border-l-4 border-red-500 pl-4">
                  Current Position
                </h3>
                <p className="text-gray-600 pl-4">
                  Professor of Department of Computer Science by Joint
                  Appointment <b>National Tsing Hua University</b>
                </p>{" "}
                <br />
                <p className="text-gray-600 pl-4">
                  Chair Professor of Department of Computer Science and
                  Information Engineering <br /> Dean of College of Information
                  and Electrical Engineering <br />
                  <b>Asia University</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Experience */}
      <div className="mt-20 pt-16 border-t border-gray-200">
        <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Professional Experience
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="border-l-4 border-orange-500 pl-6 py-2">
              <h4 className="font-semibold text-gray-900">
                National Tsing Hua University
              </h4>
              <p className="text-gray-600">
                Professor of Department of Computer Science
                <br />
                Director of Computer and Communications Center
              </p>
            </div>
            <div className="border-l-4 border-red-500 pl-6 py-2">
              <h4 className="font-semibold text-gray-900">
                National Chengchi University
              </h4>
              <p className="text-gray-600">
                University Chair Professor in Computer Science <br />
                Dean of College of Science <br />
                Director of Center for Teaching and Learning Development
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="border-l-4 border-green-500 pl-6 py-2">
              <h4 className="font-semibold text-gray-900">Asia University</h4>
              <p className="text-gray-600">
                Chair Professor of Department of Computer Science and
                Information Engineering
                <br />
                Vice President of Department of Computer Science and Information
                Engineering
                <br />
                Dean of College of Information and Electrical Engineering
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-6 py-2">
              <h4 className="font-semibold text-gray-900">Academia Sinica</h4>
              <p className="text-gray-600">
                Researcher (Joint Appointment), Research Center for Information
                Technology Innovation
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="border-l-4 border-green-500 pl-6 py-2">
              <h4 className="font-semibold text-gray-900">
                Bell Communications Research, USA
              </h4>
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

      {/* PhD Thesis Supervision */}
      <div className="mt-20 pt-16 border-t border-gray-200">
        <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          PhD Thesis Supervision{" "}
        </h3>
        <Card className="mb-16 shadow-xl border-0 bg-white/80 backdrop-blur-sm">
          <CardContent className="p-8 space-y-4">
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {PHDthesissupervision.map((item) => (
                <li key={item.id}>
                  <strong>{item.name}</strong>, &ldquo;{item.title}&rdquo;,{" "}
                  {item.date}, <em>{item.institution}</em>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Awards */}
      <div className="mt-20 pt-16 border-t border-gray-200">
        <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Awards{" "}
        </h3>
        <div className="w-full max-w-6xl mx-auto">{renderAwardsTable()}</div>
      </div>

      {/* Visiting Academics*/}
      <div className="mt-20 pt-16 border-t border-gray-200">
        <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Visiting Academics{" "}
        </h3>
        <div className="w-full max-w-6xl mx-auto">{renderVisitingTable()}</div>
      </div>

      {/* Program Comitee*/}
      <div className="mt-20 pt-16 pb-32 border-t border-gray-200">
        <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Program Comitee
        </h3>
        <div className="w-full max-w-6xl mx-auto">
          {renderProgramCommittees()}
        </div>
      </div>
    </div>
  );
}
