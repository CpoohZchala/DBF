import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import branches from "../../data/branches.json";
import L from "leaflet";

// Fix for missing marker icon in production
const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  shadowSize: [41, 41],
});

const Network = () => (
  <section className="pt-16 flex flex-col md:flex-row items-center md:items-start text-center md:text-left px-4 md:px-8 lg:px-16 py-10 bg-white w-full gap-8 relative">
    <h1 className="top-2 font-extrabold text-blue-950 p-4 text-3xl md:text-4xl lg:text-5xl w-full text-center">
      Our Company Network
    </h1>

    {/* Left side: Map */}
    <div className="w-full md:w-2/3 relative z-10 rounded-lg shadow-lg overflow-hidden">
      <MapContainer 
        center={[6.9271, 79.8612]} 
        zoom={7}
        className="h-[400px] md:h-[500px] w-full"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {branches.map((branch) => (
          <Marker key={branch.id} position={[branch.lat, branch.lng]} icon={customIcon as L.Icon}>
            <Popup>{branch.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>

    {/* Right side: Branch Names */}
    <div className="w-full md:w-1/3 bg-white border-white p-4 rounded-lg shadow-md relative z-10 max-h-[300px] md:max-h-[400px] overflow-auto">
      <h2 className="text-xl md:text-2xl font-bold mb-2 text-gray-950">Branch Locations</h2>
      <ul className="text-gray-700">
        {branches.map((branch) => (
          <li key={branch.id} className="py-2 border-b">{branch.name}</li>
        ))}
      </ul>
    </div>
  </section>
);

export default Network;
