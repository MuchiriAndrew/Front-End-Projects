import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'leaflet/dist/leaflet.css';
import Search from './components/pages/Search'
import ViewCountry from './components/pages/ViewCountry'
import { useState } from 'react';

function App() {

  const [mode, setMode] = useState(true);

  // useEffect(() => {
  //   localStorage.setItem('mode', mode);
  //   console.log(mode);
  // }, [mode]);

  // useEffect(() => {
  //   const prevMode = localStorage.getItem('mode')
  //   if (prevMode) {
  //     setMode(prevMode)
  //     console.log(mode);
  //   }
  // }, []);

  return(
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Search mode = {mode} setMode = {setMode}/>} />
        <Route path='/country/:name' element={<ViewCountry mode = {mode} setMode = {setMode}/>} />
      </Routes>
    </Router>
    </>

  );
}

export default App;
