import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import currentStudent from "@/data/current_student.json" assert { type: "json" };
import alumniData from "@/data/alumni_student.json" assert { type: "json" };

export default function LabMembersPage() {
  return (
    <div className="min-h-screen bg-white px-4 sm:px-6 lg:px-8 pt-40">
      {/* Page Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-black">
          Lab Members
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
          Meet our talented students
        </p>
      </div>

      {/* Current Students */}
      <Card className="mb-16 shadow-xl border-0 bg-white/80 backdrop-blur-sm">
        <CardHeader className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-t-lg px-6 py-4 sm:px-8">
          <CardTitle className="text-xl sm:text-2xl font-bold">
            Current Members
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 sm:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {currentStudent.map((student, index) => (
              <Card
                key={index}
                className="shadow-lg hover:shadow-xl transition-shadow border-0 bg-white"
              >
                <CardContent className="p-6 text-center">
                  <Image
                    src={student.image || "/placeholder.svg"}
                    alt={student.name}
                    width={160}
                    height={160}
                    className="rounded-full mx-auto mb-4 w-32 h-32 object-cover"
                  />
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                    {student.name}
                  </h3>
                  <div className="space-y-2">
                    <Badge
                      className={`${
                        student.status === "Postdoctoral Researcher"
                          ? "bg-orange-100 text-orange-800 hover:bg-orange-200"
                          : "bg-blue-100 text-blue-800 hover:bg-blue-200"
                      }`}
                    >
                      {student.status}
                    </Badge>
                    <p className="text-gray-600">{student.department}</p>
                    <p className="text-sm text-gray-500 break-all">
                      {student.email}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Alumni */}
      <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm mb-32">
        <CardHeader className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-t-lg px-6 py-4 sm:px-8">
          <CardTitle className="text-xl sm:text-2xl font-bold">
            Alumni
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 sm:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {alumniData.map((student, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row justify-between gap-4 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg hover:from-orange-50 hover:to-red-50 transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-gray-800">
                    {student.name}
                  </h4>
                  <p className="text-gray-600 py-2">{student.paper}</p>
                  <Badge
                    variant="outline"
                    className={`mt-1 ${
                      student.degree === "PhD"
                        ? "border-orange-300 text-orange-700"
                        : "border-blue-300 text-blue-700"
                    }`}
                  >
                    {student.degree}
                  </Badge>
                </div>
                <span className="text-gray-500 font-medium sm:self-start sm:whitespace-nowrap">
                  {student.year}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
