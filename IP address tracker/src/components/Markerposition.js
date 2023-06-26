import React, { useEffect } from 'react'
import { Marker, Popup, useMap } from 'react-leaflet'
import icon from './icon'

function Markerposition({coordinates}) {

const map = useMap()

useEffect(()=> {
    map.flyTo(coordinates, 13, {
        animate:true,
    })

    console.log(coordinates);
},[coordinates])

  return (
    <>
        <Marker icon={icon}  position={coordinates}>
            <Popup>
                A pretty css3 popup <br /> Easily customizable.
            </Popup>
        </Marker>
    </>
)}

export default Markerposition