import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import './Countries.css'

function Countries({mode}) {
    const url = "https://restcountries.com/v3.1/all"
    const [ countries, setCountries ] = useState([])

    const countryData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setCountries(data);
    console.log(data);
    }

    useEffect(()=> {
        countryData()

    },[])


  return (
    <>

    <section className='grid'>

    {countries.map((country)=> {
        const { numericCode, name, population, region, capital, flags } = country;

        return <article id='cardcont' key = {numericCode}>
            <Card style={{backgroundColor:mode ? "hsl(0, 0%, 100%)" : "hsl(209, 23%, 22%)"}} id='mycards'>
                <Card.Img id='country-img' className='img-fluid' variant="top" src={flags.svg}  />
                <Card.Body className='body-txt' >
                    <Card.Title style={{color: mode ? "black" : "white"}} id='country-title'>{name.common}</Card.Title>
                    <Card.Text >
                        <h4 style={{color: mode ? "black" : "white"}}>Population: <span>{population}</span></h4>
                        <h4 style={{color: mode ? "black" : "white"}}>Region: <span>{region}</span></h4>
                        <h4 style={{color: mode ? "black" : "white"}}>Capital: <span>{capital}</span></h4>
                    </Card.Text>
                </Card.Body>
            </Card>

        </article>
    })}

    </section>



    
    </>
  )
}

export default Countries