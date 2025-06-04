"use client"

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

// Custom 📍 icon
const customIcon = L.divIcon({
  html: `<span style="font-size: 32px; color: red;">📍</span>`,
  className: "",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
})

export default function LeafletMap() {
  const position: [number, number] = [24.794354932705573, 120.99365607956125]

  return (
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
        <Popup>
          General Building II A, 701 <br /> 第二綜合 A, 701
        </Popup>
      </Marker>
    </MapContainer>
  )
}
