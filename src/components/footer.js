import React from 'react'
import '../App.css'
import {Link } from 'react-router-dom'
class Footer extends React.Component{
    render()
    {
        return(
            <div className="main-footer">
             <div className="container">
             <div className="row">
                    <div className="col-md-3 col-sm-6" >
                    <h4 className="headers">About</h4>
                    <ul className="list-unstyled">
                        <li>Over the course of decades,</li>
                        <li>a lot has changed about us.</li>
                        <li>We have relocated,undergone</li>
                        <li>expansion,developed new products</li>
                        <li>and added segments and stores </li>
                        <li>across India.We are committed to </li>
                        <li>serving the most authentic taste of</li>
                        <li>india through our products.</li>
                    </ul>
                    </div>

                    <div className="col-md-3 col-sm-6" style={{marginLeft:'180px'}}>
                <h4 className="headers">Products</h4>
                <ul className="list-unstyled">
                <li><Link to="/sweets" className="list-unstyled" >SWEETS</Link></li>
                <li><Link to="/icecreams" className="list-unstyled">ICE CREAMS</Link></li>
                <li><Link to="/juices" className="list-unstyled">JUICES</Link></li>
                <li><Link to="/namkeens" className="list-unstyled">NAMKEENS</Link></li>
                </ul>
                </div>

                <div className="col-md-3 col-sm-6" >
                <h4 className="headers">Contact Us</h4>
                <ul className="list-unstyled">
                    <li>13-107/2,Bapunagar</li>
                    <li>Near Police station</li>
                    <li>Delhi,504293.</li>
                </ul>
                </div>

             </div>
            </div>
             </div>
               

        )
    }

}
export default Footer;