import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home'
import About from './components/pages/About';
import Careers from './components/pages/Careers';
import Events from './components/pages/Events';
import Products from './components/pages/Products';
import Support from './components/pages/Support';


function App() {
  return(
   <>
    <Router>
        <Switch>
          <Route path = '/' exact component ={Home} />
           <Route path = '/about' component ={About} />
           <Route path = '/careers' component ={Careers} />
           <Route path = '/events' component ={Events} />
           <Route path = '/products' component ={Products} />
           <Route path = '/support' component ={Support} />
        </Switch>
    </Router>
   </>
  );
}

export default App;
