import React from 'react'
//import {Link} from 'react-router-dom'
//import {Button } from 'react-bootstrap'
import Aaloosev from '../namkeen/aaloosev'
import Bananachips from '../namkeen/bananachips'
import Faralichivda from '../namkeen/faralichivda'
import Khakra from '../namkeen/khakra'
import Mixture from '../namkeen/mixture'
import Papdi from '../namkeen/papdi'
import Potatochips from '../namkeen/potatochips'
import Ratlamisev from '../namkeen/ratlamisev'
import Soyasticks from '../namkeen/soyasticks'
import candy from '../images/candy1.png'

class Namkeen extends React.Component {
   
    render() {
        return (
            <div style={{ backgroundImage:`url(${candy})` ,backgroundSize: "100% 100%"}}>
               
              <div className="container">
             <div className="row"> 
                <Aaloosev />
                <Bananachips />
                <Khakra />
             </div>
             </div>
             <div className="container">
             <div className="row"> 
                <Faralichivda />
                <Mixture />
                <Potatochips />
             </div>
             </div>
             <div className="container">
             <div className="row"> 
                <Ratlamisev />
                <Papdi />
                <Soyasticks />
             </div>
             </div>
            
            </div>
        )
    }
}
export default  Namkeen;