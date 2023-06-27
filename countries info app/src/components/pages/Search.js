import React from 'react'
import NavbarComp from '../NavbarComp'
import Container from 'react-bootstrap/Container';
import './Search.css';

function Search() {
  return (
    <>
    <NavbarComp/>

    <Container fluid id='wrapper-2' className='p-0'>

      <div id='search-div' className=''>

      <form>

        <button id='searchbtn'><i className="bi bi-search"></i></button>
        <input 
          id='searchbar'
          type="text"
          placeholder='Search for a country'
          //  <i class="bi bi-search"></i>
        />
      </form>

      <select id='dropdown' >
            <option >Filter by Region</option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
      </select>


      {/* <div id='dropdown-head'>
        <div id='txt'>
        <p className='m-0'>Filter by region</p>
        <i className="bi bi-chevron-down"></i>
        </div>
      </div>

      <div id='dropdown-body'>
        <ul>
          <li>Africa</li>
          <li>America</li>
          <li>Asia</li>
          <li>Europe</li>
          <li>Oceania</li>
        </ul>
      </div> */}
     
      </div>

    </Container>

    
    
    </>
  )
}

export default Search