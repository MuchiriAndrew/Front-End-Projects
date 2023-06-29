import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import './Countries.css'
import { Link } from 'react-router-dom';

function Countries({mode, region, text}) {

    const urlAll = "https://restcountries.com/v3.1/all"
    const [ countries, setCountries ] = useState([])


    const countryData = async () => {

        if (region === "") {
            const response = await fetch(urlAll);
            const data = await response.json();
            setCountries(data);
        }

        if (region === "europe") {
            const response = await fetch(`https://restcountries.com/v3.1/region/${region}`);
            const data = await response.json();
            setCountries(data);
        }

        if (region === "africa") {
            const response = await fetch(`https://restcountries.com/v3.1/region/${region}`);
            const data = await response.json();
            setCountries(data);
        }

        if (region === "asia") {
            const response = await fetch(`https://restcountries.com/v3.1/region/${region}`);
            const data = await response.json();
            setCountries(data);
        }

        if (region === "americas") {
            const response = await fetch(`https://restcountries.com/v3.1/region/${region}`);
            const data = await response.json();
            setCountries(data);
        }

        if (region === "oceania") {
            const response = await fetch(`https://restcountries.com/v3.1/region/${region}`);
            const data = await response.json();
            setCountries(data);
        }

        if (region === "antarctic") {
            const response = await fetch(`https://restcountries.com/v3.1/region/${region}`);
            const data = await response.json();
            setCountries(data);
        }
}

    useEffect(()=> {
        countryData()
    },[region])


    // const searchForCountry = async() => {

    // }



  return (
    <>

    <section className='grid'>

    {countries.map((country)=> {
        const { numericCode, name, population, region, capital, flags } = country;

        return <article id='cardcont' key = {numericCode}>
            <Card style={{backgroundColor:mode ? "hsl(0, 0%, 100%)" : "hsl(209, 23%, 22%)"}} id='mycards'>
                <Link id='img_cont' to={`/country/${name.common}`}>
                <Card.Img id='country-img' className='img-fluid' variant="top" src={flags.png}  />
                </Link>
                <Card.Body className='body-txt' >
                    <Card.Title style={{color: mode ? "black" : "white"}} id='country-title'>{name.common}</Card.Title>
                    <Card.Text >
                        <h4 style={{color: mode ? "black" : "white"}}>Population: <span>{population.toLocaleString()}</span></h4>
                        <h4 style={{color: mode ? "black" : "white"}}>Region: <span>{region}</span></h4>
                        <h4 style={{color: mode ? "black" : "white"}}>Capital: <span>{capital && (<>{capital[0]}{capital[1] && (<>, {capital[1]}</>)}{capital[2] && (<>, {capital[2]}</>)} </>)} </span></h4>
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