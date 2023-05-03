import React, { useState } from 'react';
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home'
import SignUp from './components/pages/SignUp';
import Services from './components/pages/Services';
import Products from './components/pages/Products';


function App() {
  return(
   <>
    <Router>
      <Navbar />
        <Switch>
          <Route path = '/' exact component ={Home} />
           <Route path = '/services' component ={Services} />
           <Route path = '/sign-up' component ={SignUp} />
           <Route path = '/products' component ={Products} />
        </Switch>
    </Router>
   </>
  );
}

export default App;
