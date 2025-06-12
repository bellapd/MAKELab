"use client"

import dynamic from "next/dynamic"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Lazy load the map with SSR disabled
const LeafletMap = dynamic(() => import("@/components/LeafletMap"), {
  ssr: false,
  loading: () => <div className="text-center p-4">Loading map...</div>,
})

export default function JoinUsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-26 pt-52 bg-white">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6 text-black">
          Lab Location
        </h1>
      </div>

      {/* Layout */}
      <div className="flex flex-col md:flex-row items-stretch justify-center gap-x-6">
        {/* Map Card */}
        <Card className="flex-1 shadow-xl border-0 bg-white/80 backdrop-blur-sm">
          <CardContent className="p-0" style={{ height: 400 }}>
            <LeafletMap />
          </CardContent>
        </Card>

        {/* Contact Info Card */}
        <Card className="flex-1 shadow-xl border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-t-lg text-center">
            <CardTitle className="text-3xl font-bold">Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="p-6 text-center">
            <h3 className="text-gray-600 mb-6 text-xl">
              For more questions, please reach us at the following contact information:
            </h3>
            <div className="space-y-4 text-gray-700 text-lg">
              <h2 className="text-2xl font-semibold">MAKE Lab</h2>
              <p>General Building II A, 701</p>
              <p>第二綜合 A, 701</p>
              <p>Office hours by appointment through email</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
