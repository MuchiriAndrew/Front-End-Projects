import React from 'react'
import Container from 'react-bootstrap/Container';
import { useState, useEffect } from 'react';
import './everything.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import 'leaflet/dist/leaflet.css';
import { Marker, Popup, useMap } from 'react-leaflet'
import Markerposition from './Markerposition';
import arrow from "../images/icon-arrow.svg"


function Everything() {

  

  const [warning, setWarning] = useState(false);
  const [text,setText] = useState('');
  const [ip, setIp] = useState('');
  const [location, setLocation] = useState('');
  const [timezone, setTimezone] = useState('');
  const [isp, setIsp] = useState('');
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState(true);
  const [coordinates, setCoordinates] = useState([-22.9518171845764, -43.210465747563134]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const getLocation = async() => {
      const key = "at_vphtNU8fqOKUSKlv1mbmFt6Secpzc";

      const response = await axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=${key}&ipAddress=${text}`)
      
      console.log(response.data);

      const mydata = await response.data

      setIp(`${mydata.ip}`)
      setLocation(`${mydata.location.region}, ${mydata.location.country}`)
      setTimezone(`${mydata.location.timezone}`)
      setIsp(`${mydata.isp}`)
      setCoordinates([mydata.location.lat, mydata.location.lng]);
  }

    if(!text){
        setWarning(true);
    }else {
        setWarning(false);
        getLocation();
        setVisible(true);
        setPosition(false);
    }
}

return (
    <Container fluid className='wrapper p-0'>

        <div id='input-div' style={{justifyContent: position ? "center" : "start"}}>

          <div className='inner-div ' >
              <h1 className='text-light'>IP Address Tracker</h1>
              <form className='form'  onSubmit={handleSubmit}>
                <input
                className='txtbox' 
                type="text"
                value={text}
                onChange={(e)=> setText(e.target.value)}
                placeholder={warning ? "Please input IP address" : 'Search for any IP address or domain'}
                style={{border:warning ? "2px solid red" : "none"}}
                />

                <button className='mybtn'>
                  <img src={arrow} alt="arrow" />
                </button>
              </form> 
          </div>    

        </div>

        <Container style={{display: visible ? "block" : "none"}} className='results-div  rounded-4'>
                          <Row className='myrow'>
                            
                            <Col id='col' className=''>

                              <div className=''>
                              <h6 className=''>IP ADDRESS</h6>
                              <h3>{ip}</h3>
                              </div>
                          
                            </Col>

                            <Col id='col' className=''>
                            <div>
                              <h6 className=''>LOCATION</h6>
                              <h3>{location}</h3>
                              </div>
                            </Col>

                            <Col  id='col' className=''>
                            <div>
                              <h6 className=''>TIMEZONE</h6>
                              <h3>{timezone}</h3>
                              </div>
                            </Col>

                            <Col id='col' className='' style={{borderRight:"none"}}>
                            <div>
                              <h6 className=''>ISP</h6>
                              <h3>{isp}</h3>
                              </div>
                            </Col>

                          </Row>
        </Container>

        <MapContainer 
              center={coordinates}
              zoom={13}
              id='map-div'
            >

            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              <Markerposition coordinates={coordinates}/>
     
        </MapContainer>

    </Container >
  )
}

export default Everything;