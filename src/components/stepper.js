import React from 'react'
import {connect} from 'react-redux'
import {Button} from 'react-bootstrap'
import {Step,Stepper,StepLabel} from '@material-ui/core';
import Carts from './carts'
import Address from './address'
import Payment from './payment'
import {handlenext,handleback,Reset} from '../actions/productQuantity'
function Steppers(props){
    return(
        <div>
              <div  style={{ borderStyle: 'ridge', marginTop: '10px', marginLeft: '130px', marginRight: '130px' }}>
        <Stepper activeStep={props.basketProps.activeStep} alternativeLabel>
        {props.basketProps.steps.map((label) => (
          <Step key={label}>
              {console.log(label,"label")}
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
     </div>
     {
         props.basketProps.activeStep === 0 ? 
         <div>
          <Carts />
          <div style={{ marginLeft: '600px', marginTop: '10px', marginBottom: '10px' }}>
          <Button style={{marginLeft:'10px'}} color="primary" onClick={()=>props.handlenext()}>
                 Place Order </Button>
                 </div>
          </div>
         :
         
         props.basketProps.activeStep === 1 ?
         <div>
         <Address />
         <div style={{ marginLeft: '600px', marginTop: '10px', marginBottom: '10px' }}>
         {console.log(props.basketProps.activeStep,"value")}
         {console.log(props.basketProps.steps.length - 1 ,"v2")}
         {console.log(props.basketProps.works,"work")}
   {props.basketProps.activeStep === props.basketProps.steps.length ? (
    ""
   ) : (
     <div>
       <div>
         <Button
           disabled={props.basketProps.activeStep === 0}
           onClick={()=>props.handleback()}
          
         >
           Back
         </Button>
                 <Button style={{marginLeft:'10px'}} color="primary" onClick={()=>props.handlenext()}>
                Add Address </Button>
         
       </div>
     </div>
   )}
        </div>
        </div>
       :
       <div>
        <Payment />
        <div style={{ marginLeft: '600px', marginTop: '10px', marginBottom: '10px' }}>
         {console.log(props.basketProps.activeStep,"value")}
         {console.log(props.basketProps.steps.length - 1 ,"v2")}
         {console.log(props.basketProps.works,"work")}
   {props.basketProps.activeStep === props.basketProps.steps.length ? (
     <div>
       <h4 >All steps completed</h4>
       <Button onClick={()=>props.Reset()}>Reset</Button>
     </div>
   ) : (
     <div>
       <div>
         <Button
           disabled={props.basketProps.activeStep === 0}
           onClick={()=>props.handleback()}
          
         >
           Back
         </Button>
         {
            props.basketProps.activeStep === props.basketProps.steps.length - 1 ?
             <Button style={{marginLeft:'10px'}} color="primary" onClick={()=>props.handlenext()}>
                 Finish </Button>
                 :
                 <Button style={{marginLeft:'10px'}} color="primary" onClick={()=>props.handlenext()}>
                Add Address </Button>
         }
       </div>
     </div>
   )}
        </div>
        </div>
     }
     
        </div>
    )
}
const mapStateToProps = state => ({
    basketProps:state.basketState
    })
export default connect(mapStateToProps,{handlenext,handleback,Reset})(Steppers)