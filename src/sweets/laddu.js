import React from 'react'
import { Card, Button} from 'react-bootstrap'
import laddu1 from '../images/laddu.jpg'
import { addBasket } from '../actions/addAction'
import { connect } from 'react-redux'
import '../App.css'
function Laddu(props) {
     return(
            <div>
                 <Card className="imagestyle" >
                                <Card.Header style={{ textAlign: 'center', color: 'blueviolet' }}>Motichur Laddu [500gm]</Card.Header>
                                <Card.Body>
                                    <Card.Img src={laddu1} className="ss" />
        <Card.Text style={{ marginTop: '10px', textAlign: 'center' }}>Rs: 300</Card.Text>
                         <Button style={{ marginLeft: '50px' }}
                        onClick={() => props.addBasket('Laddu')}
                    >Add to cart</Button>         
                                          </Card.Body>
                            </Card>
                            </div>
                           
                           
        )
    }

export default connect(null, { addBasket }) (Laddu);