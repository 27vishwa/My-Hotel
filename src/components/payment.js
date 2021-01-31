import React from 'react' 
import {Card,ListGroup} from 'react-bootstrap'
import {connect} from 'react-redux'
function Payment(props)
{
    return(
        <div>
              <div  style={{ borderStyle: 'ridge', marginTop: '10px', marginLeft: '130px', marginRight: '130px' }}>
                  Address:
    <h4>Name:{props.basketProps.name}</h4>
    <h4>MobileNo:{props.basketProps.mobileno}</h4>
    <h4>Email:{props.basketProps.email}</h4>
    <h4>Pincode:{props.basketProps.pincode}</h4>
    <h4>City:{props.basketProps.city}</h4>
    <h4>State:{props.basketProps.states}</h4>
    <h4>Address:{props.basketProps.address}</h4>
              </div>
 <Card style={{ width: '40rem', height: '20rem', margin: '0 auto', float: 'none', marginTop: '20px', borderColor: 'black' }}>
                   
    <h1>Pay Rs: {props.basketProps.cartCost}</h1>
    
    <Card.Title> Payment Options</Card.Title>
    <ListGroup variant="flush" >
    <ListGroup.Item>CASH ON DELIVERY</ListGroup.Item>
    <ListGroup.Item>CREDIT/DEBIT CARD</ListGroup.Item>
    <ListGroup.Item>GOOGLE PAY</ListGroup.Item>
    <ListGroup.Item>PHONE PAY</ListGroup.Item>
  </ListGroup>
                        
</Card>


        </div>
    )
}
const mapStateToProps = state => ({
    basketProps:state.basketState
    })
export default connect(mapStateToProps,null)(Payment)