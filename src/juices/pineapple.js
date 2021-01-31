import React from 'react'
import { Card, Button } from 'react-bootstrap'
import pineapple1 from '../images/pineapple1.jpg'
import '../App.css'
import { addBasket } from '../actions/addAction'
import { connect } from 'react-redux'
function Pineapple(props) {
    return (
        <div>
            <Card className="imagestyle" >
                <Card.Header style={{ textAlign: 'center', color: 'blueviolet' }}>Pineapple</Card.Header>
                <Card.Body>
                    <Card.Img src={pineapple1} className="ss" />
                    <Card.Text style={{ marginTop: '10px', textAlign: 'center' }}>Rs: 40</Card.Text>
                    <Button style={{ marginLeft: '80px' }}
                        onClick={() => props.addBasket('Pineapple')}
                    >Add to cart</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default connect(null, { addBasket })(Pineapple);