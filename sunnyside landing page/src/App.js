import React from 'react';
// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css'
import Home from './components/pages/Home'
// import About from './components/pages/About';
// import Contact from './components/pages/Contact';
// import Services from './components/pages/Services';


function App() {
  return(
   <>
   <Home />
    {/* <Router>
        <Routes>
           <Route path = '/' exact component ={Home} />
           <Route path = '/about' component ={About} />
           <Route path = '/contact' component ={Contact} />
           <Route path = '/services' component ={Services} />
        </Routes>
    </Router> */}
   </>
  );
}

export default App;
