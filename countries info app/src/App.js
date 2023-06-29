import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Search from './components/pages/Search'
import ViewCountry from './components/pages/ViewCountry'

function App() {
  return(
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Search/>} />
        <Route path='/country/:name' element={<ViewCountry/>} />
      </Routes>
    </Router>
    </>

  );
}

export default App;
