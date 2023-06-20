import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home'


function App() {
  return(
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        {/* <Route path='/destination' element={<Destination/>} />
        <Route path='/crew' element={<Crew/>} />
        <Route path='/technology' element={<Technology/>} /> */}
      </Routes>
    </Router>
    </>

  );
}

export default App;
