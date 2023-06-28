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
        <Route path='/' element={<ViewCountry/>} />
      </Routes>
    </Router>
    </>

  );
}

export default App;
