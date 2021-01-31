import React from 'react'
//import {Link} from 'react-router-dom'
//import {Button } from 'react-bootstrap'
import Candy from '../icecreams/candy'
import Casata from '../icecreams/casata'
import Chocobar from '../icecreams/chocobar'
import Cone from '../icecreams/cone'
import Kulfi from '../icecreams/kulfi'
import Sandwich from '../icecreams/sandwich'
import Rollcut from '../icecreams/rollcut'
import Softy from '../icecreams/softy'
import Cups from '../icecreams/cups'
import candy from '../images/candy1.png'

class Icecream extends React.Component {
   
    render() {
        return (
            <div style={{ backgroundImage:`url(${candy})` ,backgroundSize: "100% 100%"}}>
              
              <div className="container">
             <div className="row"> 
                <Candy />
                <Chocobar />
                <Cups />
             </div>
             </div>
             <div className="container">
             <div className="row"> 
                <Kulfi />
                <Casata />
                <Softy />
             </div>
             </div>
             <div className="container">
             <div className="row"> 
                <Rollcut />
                <Cone />
                <Sandwich />
             </div>
             </div>
           
            </div>
        )
    }
}
export default Icecream;