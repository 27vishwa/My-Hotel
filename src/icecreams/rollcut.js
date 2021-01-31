import React from 'react'
import { Card, Button } from 'react-bootstrap'
import rollcut1 from '../images/rollcuts1.jpg'
import '../App.css'
import { addBasket } from '../actions/addAction'
import { connect } from 'react-redux'
function Rollcut(props) {
        return(
                <div>
                 <Card className="imagestyle" >
                                <Card.Header style={{ textAlign: 'center', color: 'blueviolet' }}>Rollcut</Card.Header>
                                <Card.Body>
                                    <Card.Img src={rollcut1} className="ss" />
        <Card.Text style={{ marginTop: '10px', textAlign: 'center' }}>Rs: 60</Card.Text>
        <Button style={{ marginLeft: '80px' }}
                            onClick={() => props.addBasket('Rollcut')}
                        >Add to cart</Button>
                           </Card.Body>
                            </Card>
                            </div>
        )
    }

export default connect(null, { addBasket })(Rollcut);