import React, { useEffect, useState } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link, useParams } from 'react-router-dom';
import './ViewCountry.css'
import Map from '../Map';

function ViewCountry() {

    const [mode, setMode] = useState(true);
    const [moon, setMoon] = useState("bi bi-moon me-2");
    const [country, setCountry] = useState([])
    const [theme, setTheme] = useState("Dark");
    const [location, setLocation] = useState([]);
    const {name} = useParams()

  useEffect(()=> {
      const fetchCountryData = async() => {
        const res = await fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`)

        const data = await res.json()
        setCountry(data)
      }

      fetchCountryData();
    },[name, country])

    const handleMode = ()=> {
    setMode(!mode);
    if(moon === "bi bi-moon me-2" ){
      setMoon("bi bi-moon-fill text-light me-2")
    } else {
      setMoon("bi bi-moon me-2")
    }
  }

  useEffect(()=> {
    setTheme(mode ? "Dark" : "Light")
  },[mode])

  // useEffect(()=> {
  //   const fetchCountryData = async() => {
  //     const res = await fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
  //     const data = await res.json()
  //     setLocation([data[0].latlng[0], data[0].latlng[1]]);
  //     console.log(location);
  //   }
  //   fetchCountryData();
  // },[])


  return (
    <>
    <Container className='p-0' fluid id='wrapper-4' style={{backgroundColor: mode ? "hsl(0, 0%, 98%)" : "hsl(207, 26%, 17%)"}}>

    <Navbar sticky='top' id='nav' style={{backgroundColor:mode ? "hsl(0, 0%, 100%)" : "hsl(209, 23%, 22%)", height:"10vh"}}>
      <Container>
        <h4 style={{color: mode ? "black" : "white"}}>Where in the world?</h4>

        <div style={{color: mode ? "black" : "white"}}  id='mode-selector' onClick={handleMode}>
        <i className={moon}></i>
          {theme} Mode
        </div>

      </Container>
    </Navbar>

   <Container id='wrapper-5' fluid style={{backgroundColor: mode ? "hsl(0, 0%, 98%)" : "hsl(207, 26%, 17%)"}}>
    <Link to='/' style={{backgroundColor: mode ? "white" : "hsl(209, 23%, 22%)",color: mode ? "black" : "white"}} id='backbtn'>
    <i className="bi bi-arrow-left me-3"></i>
       Back
    </Link>
   </Container>

   <Container style={{color: mode ? "black" : "white"}} fluid id='wrapper-6' className=' p-0'>

   {country.map((mydata)=> {
        const {name, population, region, subregion, capital, tld, flags, borders } = mydata;

        const currencies = (x) =>
        Object.keys(x.currencies).map((e) => x.currencies[e].name);

        const languages = (x) =>
        Object.keys(x.languages).map((e) => x.languages[e]);

        const nativeName = (x) =>
        Object.keys(x.name.nativeName).map((e) => x.name.nativeName[e].common);


        return<Row key={population} id='row' className=''>
      <Col lg= {6} id='flag-col' className='= p-0'>
        <img id='country_img' className='img-fluid' src={flags.svg} alt={name.common} />
      </Col>

      <Col lg= {6} className='p-0' id='txt-col'>

      <div id='txt_wrapper' className=''>

        <Row className=' m-0' id='text_row'>
          <Col id='my_col1' className=''>

          {mydata.name && (
            <>
            <h3>{name.common}</h3>
            </>
          )}

          <h5>Native Name: <span>{mydata.name.nativeName && (
            <>
            {nativeName(mydata)[0]}
            {nativeName(mydata)[1] && (<>,  {nativeName(mydata)[1]}</>)}
            {nativeName(mydata)[2] && (<>,  {nativeName(mydata)[2]}</>)}
            </>
          )} </span></h5>

          <h5>Population: <span>{mydata.population && (
            <>
            {population.toLocaleString()}
            </>
          )} </span></h5>

          <h5>Region: <span>{mydata.region && (
            <>
            {region}
            </>
          )} </span></h5>

          <h5>Subregion: <span>{mydata.subregion && (
            <>
            {subregion}
            </>
          )} </span></h5>
 

          <h5>Capital: <span>{mydata.capital && (
            <>
            {capital[0]}
            {capital[1] && (<>, {capital[1]}</>)}
            {capital[2] && (<>, {capital[2]}</>)}
            </>
          )} </span></h5>
          
          </Col>

          <Col  id='my_col2' className=''>


          <h5>Top Level Domain: <span>{mydata.tld && (
            <>
            {tld[0]}
            </>
          )} </span></h5>



          <h5>Currency: <span>{mydata.currencies && (
            <>
            {currencies(mydata)}
            </>
          )} </span></h5> 



          <h5>Languages: <span>{mydata.languages && (
            <>
            {languages(mydata)[0]}
            {languages(mydata)[1] && (<>, {languages(mydata)[1]}</>)}
            {languages(mydata)[2] && (<>, {languages(mydata)[2]}</>)}
            {languages(mydata)[3] && (<>, {languages(mydata)[3]}</>)}
            {languages(mydata)[4] && (<>, {languages(mydata)[4]}</>)}
            {languages(mydata)[5] && (<>, {languages(mydata)[5]}</>)}
            {languages(mydata)[6] && (<>, {languages(mydata)[6]}</>)}
            {languages(mydata)[7] && (<>, {languages(mydata)[7]}</>)}
            {languages(mydata)[8] && (<>, {languages(mydata)[8]}</>)}
            {languages(mydata)[9] && (<>, {languages(mydata)[9]}</>)}
            {languages(mydata)[10] && (<>, {languages(mydata)[10]}</>)}
            </>
          )} </span></h5>      

          </Col>
        </Row>


        
        <div id='border-countries' className=''>

        <h5 className='me-md-3 '>Border Countries: </h5>

        {mydata.borders && (
        <>
          <ul id='list' className='p-0'>
              <li id='borders' >{borders[0]}</li>
              {borders[1] && (<> <li id='borders'>{borders[1]}</li></>)}
              {borders[2] && (<> <li id='borders'>{borders[2]}</li></>)}
              {borders[3] && (<> <li id='borders'>{borders[3]}</li></>)}
              {borders[4] && (<> <li id='borders'>{borders[4]}</li></>)}
          </ul>
        </>
      )}
        </div>


      </div>
      
      
      </Col>
    </Row>
    })}
   </Container>

   <Map />


    </Container>
    


    </>
  )
}

export default ViewCountry 