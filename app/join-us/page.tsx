"use client"

import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapContainer, TileLayer, Marker, Popup, MarkerProps } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet"


const customIcon = L.divIcon({
  html: `<span style="font-size: 32px; color: red;">📍</span>`,
  className: "", // remove default styles
  iconSize: [32, 32],
  iconAnchor: [16, 32], // point of the icon which will correspond to marker's location
})

export default function JoinUsPage() {
  // Lab coordinates (NTHU)
  const position: [number, number] = [24.794354932705573, 120.99365607956125]

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Page Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 via-red-500 to-blue-500 bg-clip-text text-transparent">
          Lab Location
        </h1>
      </div>

      {/* Side-by-side layout */}
      <div className="flex flex-col md:flex-row items-stretch justify-center gap-x-6">
        {/* Map Card */}
        <Card className="flex-1 shadow-xl border-0 bg-white/80 backdrop-blur-sm">
          <CardContent className="p-0" style={{ height: 400 }}>
            <MapContainer
              center={position}
              zoom={90}
              scrollWheelZoom={false}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer
                attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position} icon={customIcon as unknown as L.Icon}>
                <Popup>General Building II A, 701 <br /> 第二綜合 A, 701</Popup>
              </Marker>
            </MapContainer>
          </CardContent>
        </Card>

        {/* Contact Information Card */}
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
