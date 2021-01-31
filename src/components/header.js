import React from 'react'
import {Navbar,Nav,NavDropdown} from 'react-bootstrap'
import '../App.css'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getNumbers} from '../actions/getAction'
function Header(props) {
  console.log(props);
 
    return(
        <div >
   <Navbar  expand="lg" variant="light" bg="light" className="nav">
  <Navbar.Brand href="#home">sweetshop</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    
    </Nav>
    <Nav>
    <Nav.Link href="/">Home</Nav.Link>  </Nav>
    <Nav>  
    <NavDropdown title="Products" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1" href="/sweets">Sweets</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2" href="/icecreams">Ice Creams</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3" href="/juices">Juices</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.4" href="/namkeens">Namkeens</NavDropdown.Item>
      </NavDropdown>
     </Nav>
    <Nav>   <Nav.Link href="/About">About</Nav.Link> </Nav> 
    <Nav>  <Link to="/carts" className="cart-color">Cart<span>{props.basketProps.basketnum}</span> </Link> </Nav> 
   
   
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}
const mapStateToProps = state => ({
basketProps:state.basketState
})
export default connect(mapStateToProps,{getNumbers})(Header);