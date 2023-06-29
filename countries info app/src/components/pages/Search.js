import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import './Search.css';
import Navbar from 'react-bootstrap/Navbar';
import Countries from '../Countries';
import { Link } from 'react-router-dom';
import ViewCountry from './ViewCountry';


function Search() {

  const [mode, setMode] = useState(true);
  const [moon, setMoon] = useState("bi bi-moon me-2");
  const [search, setSearch] = useState("bi bi-search")


  const handleMode = ()=> {
    setMode(!mode);

    if(moon === "bi bi-moon me-2" ){
      setMoon("bi bi-moon-fill text-light me-2")
    } else {
      setMoon("bi bi-moon me-2")
    }

    if(search === "bi bi-search"){
      setSearch("bi bi-search text-light")
    } else {
      setSearch("bi bi-search")
    }
  } 
  


  return (
    <>
     <Navbar id='nav' style={{backgroundColor:mode ? "hsl(0, 0%, 100%)" : "hsl(209, 23%, 22%)", height:"10vh"}}>
      <Container>
        <h4 style={{color: mode ? "black" : "white"}}>Where in the world?</h4>

        <div style={{color: mode ? "black" : "white"}}  id='mode-selector' onClick={handleMode}>
        <i className={moon}></i>
          Dark Mode
        </div>

      </Container>
    </Navbar>

    <Container fluid id='wrapper-2' className='p-0' style={{backgroundColor: mode ? "hsl(0, 0%, 98%)" : "hsl(207, 26%, 17%)"}}>

      <div id='search-div' className=''>

      <form>

      <input 
          style={{backgroundColor: mode ? "white" : "hsl(209, 23%, 22%)",color: mode ? "black" : "white"}}
          id='searchbar'
          type="text"
          placeholder='Search for a country'
        />

        <button id='searchbtn' style={{backgroundColor: mode ? "white" : "hsl(209, 23%, 22%)"}}><i className={search}></i></button>
        
      </form>

      <div>
        <select style={{backgroundColor: mode ? "white" : "hsl(209, 23%, 22%)", color: mode ? "black" : "white", outline:"none"}} name="select" id="dropdown">
          <option  value="Filter by Region">Filter by region</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Ocaenia">Oceania</option>
        </select>
      </div>
  

      </div>

    </Container>


    <Container fluid id='wrapper-3' style={{backgroundColor: mode ? "hsl(0, 0%, 98%)" : "hsl(207, 26%, 17%)"}}>
      <Countries mode={mode}/>
    </Container>

    
    </>
  )
}

export default Search