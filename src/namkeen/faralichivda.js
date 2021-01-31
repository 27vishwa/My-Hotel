import React from 'react'
import { Card, Button } from 'react-bootstrap'
import faralichivda1 from '../images/faralichivda1.jpg'
import { addBasket } from '../actions/addAction'
import { connect } from 'react-redux'
import '../App.css'
function Faralichivda(props) {
    return (
        <div>
            <Card className="imagestyle" >
                <Card.Header style={{ textAlign: 'center', color: 'blueviolet' }}>Farali Chivda</Card.Header>
                <Card.Body>
                    <Card.Img src={faralichivda1} className="ss" />
                    <Card.Text style={{ marginTop: '10px', textAlign: 'center' }}>Rs: 20</Card.Text>
                    <Button style={{ marginLeft: '80px' }}
                        onClick={() => props.addBasket('Faralichivda')}
                    >Add to cart</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default connect(null, { addBasket })(Faralichivda);