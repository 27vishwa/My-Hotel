import React from 'react'
import { Card, Button } from 'react-bootstrap'
import mysorepak1 from '../images/mysorepak.jpg'
import '../App.css'
import { addBasket } from '../actions/addAction'
import { connect } from 'react-redux'
function Mysorepak(props) {
    return (
        <div>
            <Card className="imagestyle" >
                <Card.Header style={{ textAlign: 'center', color: 'blueviolet' }}>Mysorepak [500gm]</Card.Header>
                <Card.Body>
                    <Card.Img src={mysorepak1} className="ss" />
                    <Card.Text style={{ marginTop: '10px', textAlign: 'center' }}>Rs: 300</Card.Text>
                    <Button style={{ marginLeft: '50px' }}
                        onClick={() => props.addBasket('Mysorepak')}
                    >Add to cart</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default connect(null, { addBasket })(Mysorepak);