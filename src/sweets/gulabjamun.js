import React from 'react'

import { Card, Button } from 'react-bootstrap'
import gulabjamun1 from '../images/gulabjamun.jpg'
import '../App.css'
import { addBasket } from '../actions/addAction'
import { connect } from 'react-redux'
function GulabJamun(props) {
    return (
        <div>
            <div >
                <Card className="imagestyle" >
                    <Card.Header style={{ textAlign: 'center', color: 'blueviolet' }}>GulabJamun [500gm]</Card.Header>
                    <Card.Body>
                        <Card.Img src={gulabjamun1} className="ss" />
                        <Card.Text style={{ marginTop: '10px', textAlign: 'center' }}>Rs: 500</Card.Text>

                        <Button style={{ marginLeft: '80px' }}
                            onClick={() => props.addBasket('Gulabjamun')}
                        >Add to cart</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default connect(null, { addBasket })(GulabJamun);