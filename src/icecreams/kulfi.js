import React from 'react'
import { Card, Button } from 'react-bootstrap'
import kulfi1 from '../images/kulfi1.jpg'
import '../App.css'
import { addBasket } from '../actions/addAction'
import { connect } from 'react-redux'
function Kulfi(props) {
    return (
        <div>
            <Card className="imagestyle" >
                <Card.Header style={{ textAlign: 'center', color: 'blueviolet' }}>Kulfi</Card.Header>
                <Card.Body>
                    <Card.Img src={kulfi1} className="ss" />
                    <Card.Text style={{ marginTop: '10px', textAlign: 'center' }}>Rs: 20</Card.Text>
                    <Button style={{ marginLeft: '80px' }}
                        onClick={() => props.addBasket('Kulfi')}
                    >Add to cart</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default connect(null, { addBasket })(Kulfi);