import React from 'react';
import Home from './components/home'
import Sweets from './products/sweets'
import Icecream from './products/icecream'
import Juices from './products/juices'
import Namkeen from './products/namkeen'
import Steppers from './components/stepper'


import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import Address from './components/address'
import {
  BrowserRouter as Router,
  Route,Switch

} from 'react-router-dom'
function App() {
  return (
   
    <div className="page-container">
  <Router>
  <div> <Header /></div> 
  <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/sweets" component={Sweets} />
      <Route exact path="/icecreams" component={Icecream} />
      <Route exact path="/juices" component={Juices} />
      <Route exact path="/namkeens" component={Namkeen} />
      <Route exact path="/carts" component={Steppers} />
      <Route exact path="/address" component={Address} />
      </Switch>
      <div><Footer /></div>
      </Router>
    </div>
   
  );
}

export default App;
