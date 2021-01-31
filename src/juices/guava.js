import React from 'react'
import { Card, Button } from 'react-bootstrap'
import guava1 from '../images/guava1.jpg'
import '../App.css'
import { addBasket } from '../actions/addAction'
import { connect } from 'react-redux'
function Guava(props) {
    return (
        <div>
            <Card className="imagestyle" >
                <Card.Header style={{ textAlign: 'center', color: 'blueviolet' }}>Guava</Card.Header>
                <Card.Body>
                    <Card.Img src={guava1} className="ss" />
                    <Card.Text style={{ marginTop: '10px', textAlign: 'center' }}>Rs: 30</Card.Text>
                    <Button style={{ marginLeft: '80px' }}
                        onClick={() => props.addBasket('Guave')}
                    >Add to cart</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default connect(null, { addBasket })(Guava);