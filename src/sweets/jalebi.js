import React from 'react'
import { connect } from 'react-redux'
import { Card, Button } from 'react-bootstrap'
import jalebi1 from '../images/jalebi.jpg'
import '../App.css'
import { addBasket } from '../actions/addAction'
function Jalebi(props) {
    console.log(props)
    return (
        <div>

            <div>
                <Card className="imagestyle" >
                    <Card.Header style={{ textAlign: 'center', color: 'blueviolet' }}>Jalebi [500gm]</Card.Header>
                    <Card.Body>
                        <Card.Img src={jalebi1} className="ss" />
                        <Card.Text style={{ marginTop: '10px', textAlign: 'center' }}>Rs: 300</Card.Text>

                        <Button style={{ marginLeft: '80px' }}
                            onClick={() => props.addBasket('Jalebi')}
                        >Add to cart</Button>

                    </Card.Body>
                </Card>
            </div>


        </div>
    )
}

export default connect(null, { addBasket })(Jalebi);