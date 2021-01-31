import React from 'react'
import Kajukatli from '../sweets/kajukatli'
import GulabJamun from '../sweets/gulabjamun'
import Imati from '../sweets/imati'
import Jalebi from '../sweets/jalebi'
import Kalakand from '../sweets/kalakand'
import Laddu from '../sweets/laddu'
import Mysorepak from '../sweets/mysorepak'
import Peda from '../sweets/peda'
import Soanpapdi from '../sweets/soanpapdi'
import home from '../images/candy1.png'
class Sweets extends React.Component {
    render() {
        return (
            <div style={{ backgroundImage:`url(${home})` ,backgroundSize: "100% 100%"}}>
             
              <div className="container">
             <div className="row"> 
                <Kajukatli />
                <GulabJamun />
                <Jalebi />
             </div>
             </div>
             <div className="container">
             <div className="row"> 
                <Soanpapdi />
                <Imati />
                <Kalakand />
             </div>
             </div>
             <div className="container">
             <div className="row"> 
                <Mysorepak />
                <Peda />
                <Laddu />
             </div>
             </div>
            </div> 
        )
    }
}
export default Sweets;