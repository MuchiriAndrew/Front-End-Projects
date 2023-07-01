import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import './Map.css'

function Map() {

    let center = [-1,10]
  return (
    <MapContainer 
              center={center}
              zoom={5}
              id='map-div'
            >

            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              {/* <Markerposition coordinates={coordinates}/> */}
     
        </MapContainer>
  )
}

export default Map