import React from 'react'
import { Card, Button } from 'react-bootstrap'
import soanpapdi1 from '../images/soanpapdi.jpg'
import '../App.css'
import { addBasket } from '../actions/addAction'
import { connect } from 'react-redux'
function Soanpapdi(props) {
    return (
        <div>
            <Card className="imagestyle"   >
                <Card.Header style={{ textAlign: 'center', color: 'blueviolet' }}>Soanpapdi [500gm]</Card.Header>
                <Card.Body>
                    <Card.Img src={soanpapdi1} className="ss" />
                    <Card.Text style={{ marginTop: '10px', textAlign: 'center' }}>Rs: 300</Card.Text>
                    <Button style={{ marginLeft: '50px' }}
                        onClick={() => props.addBasket('Mysorepak')}
                    >Add to cart</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default connect(null, { addBasket })(Soanpapdi);