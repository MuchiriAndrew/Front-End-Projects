import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/App.css'
import Home from './components/pages/Home'
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Services from './components/pages/Services';
import Projects from './components/pages/Projects';

function App() {
  return(
   <>
    <Router>
        <Switch>
           <Route path = '/' exact component ={Home} />
           <Route path = '/about' component ={About} />
           <Route path = '/contact' component ={Contact} />
           <Route path = '/services' component ={Services} />
           <Route path = '/projects' component ={Projects} />
        </Switch>
    </Router>
   </>
  );
}

export default App;
