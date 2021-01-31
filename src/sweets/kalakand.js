import React from 'react'
import { Card, Button } from 'react-bootstrap'
import kalakand1 from '../images/kalakand.jpg'
import '../App.css'
import { addBasket } from '../actions/addAction'
import { connect } from 'react-redux'
function Kalakand(props) {
    return (
        <div>
            <Card className="imagestyle" >
                <Card.Header style={{ textAlign: 'center', color: 'blueviolet' }}>Kalakand [500gm]</Card.Header>
                <Card.Body>
                    <Card.Img src={kalakand1} className="ss" />
                    <Card.Text style={{ marginTop: '10px', textAlign: 'center' }}>Rs: 300</Card.Text>
                    <Button style={{ marginLeft: '50px' }}
                        onClick={() => props.addBasket('Kalakand')}
                    >Add to cart</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default connect(null, { addBasket })(Kalakand);