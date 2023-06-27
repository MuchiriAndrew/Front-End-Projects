import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Search.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';


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

    <Container fluid id='wrapper-2' className='p-0' style={{backgroundColor: mode ? "hsl(0, 0%, 100%)" : "hsl(207, 26%, 17%)"}}>

      <div id='search-div' className=''>

      <form>

        <button id='searchbtn' style={{backgroundColor: mode ? "white" : "hsl(209, 23%, 22%)"}}><i className={search}></i></button>
        <input 
          style={{backgroundColor: mode ? "white" : "hsl(209, 23%, 22%)"}}
          id='searchbar'
          type="text"
          placeholder='Search for a country'
        />
      </form>


      <NavDropdown title="Filter by Region" id="dropdown" style={{backgroundColor: mode ? "white" : "hsl(209, 23%, 22%)", color: mode ? "hsl(200, 15%, 8%)" : "white"}}>
        <NavDropdown.Item >Africa</NavDropdown.Item>
        <NavDropdown.Item >America</NavDropdown.Item>
        <NavDropdown.Item >Asia</NavDropdown.Item>
        <NavDropdown.Item >Europe</NavDropdown.Item>
        <NavDropdown.Item >Oceania</NavDropdown.Item>
      </NavDropdown>

      </div>

    </Container>

    <Container fluid id='wrapper-3' className='' style={{backgroundColor: mode ? "hsl(0, 0%, 100%)" : "hsl(207, 26%, 17%)"}}>

      <Row className='myrow1  mb-xl-5'>

      <Col id='country-col' className='mb-5 mb-xl-2' md={3}>
      <Card id='mycards'  style={{border:"none"}}>
        <Card.Img variant="top" src="../../images/ke.png" />
        <Card.Body style={{backgroundColor:mode ? "hsl(0, 0%, 100%)" : "hsl(209, 23%, 22%)"}}>
          <Card.Title style={{color: mode ? "black" : "white"}}>Card Title</Card.Title>
          <Card.Text style={{color: mode ? "black" : "white"}}>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        </Card>
          
        </Col>

        <Col id='country-col' className='mb-5 mb-xl-2' md={3}>
          
        <Card id='mycards' style={{border:"none"}}>
        <Card.Img variant="top" src="../../images/ke.png" />
        <Card.Body style={{backgroundColor:mode ? "hsl(0, 0%, 100%)" : "hsl(209, 23%, 22%)"}}>
          <Card.Title style={{color: mode ? "black" : "white"}}>Card Title</Card.Title>
          <Card.Text style={{color: mode ? "black" : "white"}}>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        </Card>
          
        </Col>

        <Col id='country-col' className='mb-5 mb-xl-2' md={3}>
          
        <Card id='mycards' style={{border:"none"}}>
        <Card.Img variant="top" src="../../images/ke.png" />
        <Card.Body style={{backgroundColor:mode ? "hsl(0, 0%, 100%)" : "hsl(209, 23%, 22%)"}}>
          <Card.Title style={{color: mode ? "black" : "white"}}>Card Title</Card.Title>
          <Card.Text style={{color: mode ? "black" : "white"}}>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        </Card>
          
        </Col>

        <Col id='country-col' className='mb-5 mb-xl-2' md={3}>
          
        <Card id='mycards' style={{border:"none"}}>
        <Card.Img variant="top" src="../../images/ke.png" />
        <Card.Body style={{backgroundColor:mode ? "hsl(0, 0%, 100%)" : "hsl(209, 23%, 22%)"}}>
          <Card.Title style={{color: mode ? "black" : "white"}}>Card Title</Card.Title>
          <Card.Text style={{color: mode ? "black" : "white"}}>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        </Card>
          
        </Col>

      </Row>

      <Row className='myrow1 '>

        <Col id='country-col' className='mb-5 mb-xl-2' md={3}>

        <Card id='mycards' style={{border:"none"}}>
        <Card.Img variant="top" src="../../images/ke.png" />
        <Card.Body style={{backgroundColor:mode ? "hsl(0, 0%, 100%)" : "hsl(209, 23%, 22%)"}}>
          <Card.Title style={{color: mode ? "black" : "white"}}>Card Title</Card.Title>
          <Card.Text style={{color: mode ? "black" : "white"}}>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        </Card>
          
        </Col>

        <Col id='country-col' className='mb-5 mb-xl-2' md={3}>
          
        <Card id='mycards' style={{border:"none"}}>
        <Card.Img variant="top" src="../../images/ke.png" />
        <Card.Body style={{backgroundColor:mode ? "hsl(0, 0%, 100%)" : "hsl(209, 23%, 22%)"}}>
          <Card.Title style={{color: mode ? "black" : "white"}}>Card Title</Card.Title>
          <Card.Text style={{color: mode ? "black" : "white"}}>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        </Card>
          
        </Col>

        <Col id='country-col' className='mb-5 mb-xl-2' md={3}>
          
        <Card id='mycards' style={{border:"none"}}>
        <Card.Img variant="top" src="../../images/ke.png" />
        <Card.Body style={{backgroundColor:mode ? "hsl(0, 0%, 100%)" : "hsl(209, 23%, 22%)"}}>
          <Card.Title style={{color: mode ? "black" : "white"}}>Card Title</Card.Title>
          <Card.Text style={{color: mode ? "black" : "white"}}>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        </Card>
          
        </Col>

        <Col id='country-col' className='mb-5 mb-xl-2' md={3}>
          
        <Card id='mycards' style={{border:"none"}}>
        <Card.Img variant="top" src="../../images/ke.png" />
        <Card.Body style={{backgroundColor:mode ? "hsl(0, 0%, 100%)" : "hsl(209, 23%, 22%)"}}>
          <Card.Title style={{color: mode ? "black" : "white"}}>Card Title</Card.Title>
          <Card.Text style={{color: mode ? "black" : "white"}}>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        </Card>
          
        </Col>

      </Row>

    </Container>
    </>
  )
}

export default Search