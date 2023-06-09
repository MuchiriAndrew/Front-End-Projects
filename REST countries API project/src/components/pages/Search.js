import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import './Search.css';
import Navbar from 'react-bootstrap/Navbar';
import Countries from '../Countries';
import { Link } from 'react-router-dom';



function Search({mode, setMode}) {

  const [moon, setMoon] = useState("bi bi-moon me-2");
  const [region, setRegion] = useState("");
  const [text, setText] = useState("");
  const [theme, setTheme] = useState("Dark")



  const handleMode = ()=> {
    setMode(!mode);

    if(moon === "bi bi-moon me-2" ){
      setMoon("bi bi-moon-fill me-2")
    } else {
      setMoon("bi bi-moon me-2")
   }
  } 

  useEffect(()=> {
    setTheme(mode ? "Dark" : "Light")
  },[mode])

  return (
    <>
     <Navbar sticky='top' id='nav' style={{backgroundColor:mode ? "hsl(0, 0%, 100%)" : "hsl(209, 23%, 22%)", height:"10vh"}}>
      <Container>
        <Link to={'./'} style={{color: mode ? "black" : "white", textDecoration:"none"}}> <b>Where in the world?</b> </Link>

        <div style={{color: mode ? "black" : "white"}}  id='mode-selector' onClick={handleMode}>
        <i className={moon}></i>
          {theme} Mode
        </div>

      </Container>
    </Navbar>

    <Container fluid id='wrapper-2' className='p-0' style={{backgroundColor: mode ? "hsl(0, 0%, 98%)" : "hsl(207, 26%, 17%)"}}>

      <div id='search-div' className=''>

      <form>

      <input 
          onChange={(e)=> setText(e.target.value)}
          style={{backgroundColor: mode ? "white" : "hsl(209, 23%, 22%)",color: mode ? "black" : "white"}}
          id='searchbar'
          type="text"
          placeholder='Search for a country'
        />
       
      </form>

      <div>
        <select  onChange={(e)=> setRegion(e.target.value)} style={{backgroundColor: mode ? "white" : "hsl(209, 23%, 22%)", color: mode ? "black" : "white", outline:"none"}} name="select" id="dropdown">
          <option value="">Filter by region</option>
          <option value="africa">Africa</option>
          <option value="americas">Americas</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
          <option value="antarctic">Antarctic</option>
        </select>
      </div>
  

      </div>

    </Container>


    <Container fluid id='wrapper-3' style={{backgroundColor: mode ? "hsl(0, 0%, 98%)" : "hsl(207, 26%, 17%)"}}>
      <Countries mode={mode} region={region} text={text} />
    </Container>

    
    </>
  )
}

export default Search