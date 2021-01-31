import React from 'react'
import { Card, Button } from 'react-bootstrap'
import cone1 from '../images/cone1.jpg'
import '../App.css'
import { addBasket } from '../actions/addAction'
import { connect } from 'react-redux'
function Cone(props) {
        return(
                <div>
                 <Card className="imagestyle" >
                                <Card.Header style={{ textAlign: 'center', color: 'blueviolet' }}>Cone</Card.Header>
                                <Card.Body>
                                    <Card.Img src={cone1} className="ss" />
        <Card.Text style={{ marginTop: '10px', textAlign: 'center' }}>Rs: 30</Card.Text>
        <Button style={{ marginLeft: '80px' }}
                            onClick={() => props.addBasket('Cone')}
                        >Add to cart</Button>
                                      </Card.Body>
                            </Card>
                            </div>
        )
    }

export default connect(null, { addBasket })(Cone);