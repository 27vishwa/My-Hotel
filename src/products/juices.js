import React from 'react'
//import {Link} from 'react-router-dom'
//import {Button } from 'react-bootstrap'
import Mango from '../juices/mango'
import Orange from '../juices/orange'
import Pineapple from '../juices/pineapple'
import Kiwi from '../juices/kiwi'
import Watermelon from '../juices/watermelon'
import Lemonade from '../juices/lemonade'
import Grapes from '../juices/grapes'
import Guava from '../juices/guava'
import Pomegranate from '../juices/pomegranate'
import candy from '../images/candy1.png'

class Juices extends React.Component {
   
    render() {
        return (
            <div style={{ backgroundImage:`url(${candy})` ,backgroundSize: "100% 100%"}}>
             
              <div className="container">
             <div className="row"> 
                <Mango />
                <Watermelon />
                <Kiwi />
             </div>
             </div>
             <div className="container">
             <div className="row"> 
                <Guava />
                <Orange />
                <Pomegranate />
             </div>
             </div>
             <div className="container">
             <div className="row"> 
                <Pineapple />
                <Lemonade />
                < Grapes/>
             </div>
             </div>
           
            </div>
        )
    }
}
export default Juices;