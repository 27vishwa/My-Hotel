import React from 'react'
import { Card, Button } from 'react-bootstrap'
import aaloosev1 from '../images/aaloosev1.jpg'
import '../App.css'
import { addBasket } from '../actions/addAction'
import { connect } from 'react-redux'
function Aaloosev(props) {
    return (
        <div>
            <Card className="imagestyle" >
                <Card.Header style={{ textAlign: 'center', color: 'blueviolet' }}>Aaloosev</Card.Header>
                <Card.Body>
                    <Card.Img src={aaloosev1} className="ss" />
                    <Card.Text style={{ marginTop: '10px', textAlign: 'center' }}>Rs: 10</Card.Text>
                    <Button style={{ marginLeft: '80px' }}
                        onClick={() => props.addBasket('Aaloosev')}
                    >Add to cart</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
export default connect(null, { addBasket })(Aaloosev);