import React from 'react'
import { Card, Button } from 'react-bootstrap'
import mixture1 from '../images/mixture1.jpg'
import '../App.css'
import { addBasket } from '../actions/addAction'
import { connect } from 'react-redux'
function Mixture(props) {
    return (
        <div>
            <Card className="imagestyle" >
                <Card.Header style={{ textAlign: 'center', color: 'blueviolet' }}>Mixture</Card.Header>
                <Card.Body>
                    <Card.Img src={mixture1} className="ss" />
                    <Card.Text style={{ marginTop: '10px', textAlign: 'center' }}>Rs: 35</Card.Text>
                    <Button style={{ marginLeft: '80px' }}
                        onClick={() => props.addBasket('Mixture')}
                    >Add to cart</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default connect(null, { addBasket })(Mixture);