import React from 'react'
import { Card, Button } from 'react-bootstrap'
import kiwi1 from '../images/kiwi1.jpg'
import '../App.css'
import { addBasket } from '../actions/addAction'
import { connect } from 'react-redux'
function Kiwi(props) {
    return (
        <div>
            <Card className="imagestyle" >
                <Card.Header style={{ textAlign: 'center', color: 'blueviolet' }}>Kiwi</Card.Header>
                <Card.Body>
                    <Card.Img src={kiwi1} className="ss" />
                    <Card.Text style={{ marginTop: '10px', textAlign: 'center' }}>Rs: 60</Card.Text>
                    <Button style={{ marginLeft: '80px' }}
                        onClick={() => props.addBasket('Kiwi')}
                    >Add to cart</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default connect(null, { addBasket })(Kiwi);