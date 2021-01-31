import React from 'react'
import { Card, Button } from 'react-bootstrap'
import imati1 from '../images/imati.jpg'
import '../App.css'
import { addBasket } from '../actions/addAction'
import { connect } from 'react-redux'
function Imati(props) {
    return (
        <div>
            <Card className="imagestyle" >
                <Card.Header style={{ textAlign: 'center', color: 'blueviolet' }}>Imati [500gm]</Card.Header>
                <Card.Body>
                    <Card.Img src={imati1} className="ss" />
                    <Card.Text style={{ marginTop: '10px', textAlign: 'center' }}>Rs: 300</Card.Text>
                    <Button style={{ marginLeft: '80px' }}
                        onClick={() => props.addBasket('Imati')}
                    >Add to cart</Button>

                </Card.Body>
            </Card>
        </div>
    )
}

export default connect(null, { addBasket })(Imati);