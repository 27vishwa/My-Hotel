import React from 'react'
import { Card, Button } from 'react-bootstrap'
import candy1 from '../images/mangodolly1.jpg'
import '../App.css'
import { addBasket } from '../actions/addAction'
import { connect } from 'react-redux'
function Candy(props) {

    return (
        <div>
            <Card className="imagestyle" >
                <Card.Header style={{ textAlign: 'center', color: 'blueviolet' }}>Candy</Card.Header>
                <Card.Body>
                    <Card.Img src={candy1} className="ss" />
                    <Card.Text style={{ marginTop: '10px', textAlign: 'center' }}>Rs: 50</Card.Text>
                    <Button style={{ marginLeft: '80px' }}
                        onClick={() => props.addBasket('Candy')}
                    >Add to cart</Button>
                </Card.Body>
            </Card>
        </div>


    )
}

export default connect(null, { addBasket })(Candy);