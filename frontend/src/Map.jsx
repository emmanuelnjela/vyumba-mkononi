import React from "react";
import { MapContainer, TileLayer } from 'react-leaflet';

import './App.css';



// import * as parkData from "./data/skateboard-parks.json";
export default function Map() {
  return (
    <MapContainer center={[-8.901153, 33.5445429]} zoom={12} scrollWheelZoom={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' />
    </MapContainer>
  );
}
