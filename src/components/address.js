import React from 'react'
import { Card,Button} from 'react-bootstrap'
import {work,homes} from '../actions/getAction'
import {connect} from 'react-redux'
import {handlenext,handleback,Reset} from '../actions/productQuantity'
import {handleText} from '../actions/addAction'
function Address(props) {
   
        return (
            <div>
               {console.log( props.basketProps.works,"work")}
                <Card style={{ width: '40rem',bottom:'10px' , height: '40rem', margin: '0 auto', float: 'none', marginTop: '20px', borderColor: 'black' }}>
                    <Card.Body>
                        <Card.Title>CONTACT DETAILS</Card.Title>
                        <input type="text"
                            placeholder="Name" 
                          
                         onChange={(e)=>{props.handleText(e)}}
                            style={{width:'40%',marginTop:'20px'}} 
                        />
                        <input type="text"
                         onChange={(e)=>{props.handleText(e)}}
                            style={{ marginLeft: '30px',width:'40%' }}
                            placeholder="Mobile No"
                        />
               <Card.Title style={{marginTop:'20px'}}>ADDRESS</Card.Title>
                 <input type="text"
                            placeholder="Email"
                            onChange={(e)=>{props.handleText(e)}}
                            style={{width:'60%',marginTop:'10px'}}
                        />
                  <input type="text"
                      style={{ marginLeft: '30px' }}
                            placeholder="Pincode"
                            onChange={(e)=>{props.handleText(e)}}
                        />
                        <input type="text"
                           style={{ marginTop: '20px',width:'50%' }}
                            placeholder="city/district"
                            onChange={(e)=>{props.handleText(e)}}
                          />
                        <input type="text"
                           style={{ marginLeft: '20px',width:'45%' }}
                            placeholder="State"
                            onChange={(e)=>{props.handleText(e)}}
                        />
                        <textarea
                        placeholder="Address"
                        onChange={(e)=>{props.handleText(e)}}
                        style={{marginTop:'20px',width:'100%',height:'10%'}}
                        />
                         <Card.Title style={{marginTop:'20px'}}>SAVE ADDRESS AS</Card.Title>
                         <Button variant="outline-dark"
                         onClick={()=>props.homes()}
                         >Home</Button>
                         <Button variant="outline-dark" style={{marginLeft:'20px'}}
                         onClick={()=>props.work()}
                         >Work</Button>
                         <Card.Body>
                         {
                             props.basketProps.works  ?
                             <div>
                             <input type="checkbox" />
                             Open On Saturday<br />
                             <input type="checkbox" 
                             />Open On Sunday
                             </div>
                             :
                             ""


                         }
                         </Card.Body>
                       <Card.Text>
                        <label>
                            <input type="checkbox" value="" />{' '}
                            Make this my default address
                        </label>
                        </Card.Text>
                      
                          </Card.Body>
                </Card>
            
            </div>
             
        )
    }
    const mapStateToProps = state => ({
        basketProps:state.basketState
        })

export default connect(mapStateToProps, {work ,homes,handleback,handlenext,Reset,handleText})(Address)