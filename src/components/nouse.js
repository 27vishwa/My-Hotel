import React, { Fragment } from 'react'
import {connect} from 'react-redux'
import {useHistory} from 'react-router'
import {Button,ButtonGroup} from 'react-bootstrap'
import {Step,Stepper,StepLabel,Typography} from '@material-ui/core';
import {productQuantity , clearProduct} from '../actions/productQuantity'
import '../App.css'

function getSteps() {
    return ['MyCart', 'Address', 'Payment'];
  }
  
function Carts({basketProps,productQuantity,clearProduct}){
    console.log(basketProps)
    let productsInCart = [];
     const history = useHistory();
    Object.keys(basketProps.Products).forEach(function(item) {
        console.log(item);
        if(basketProps.Products[item].inCart){
            productsInCart.push(basketProps.Products[item])
        }
        console.log(productsInCart)
    })
 
    productsInCart = productsInCart.map((Product , index) =>{
        return(
            <Fragment>
                <div className="product">
                    <Button 
                    onClick={()=>clearProduct(Product.name)}
                    variant="info" className="remove">X</Button>
<span className="sm-hide">{Product.name}</span>
</div>
<div className="price sm-hide">
    {Product.price}
</div>
<div className="quantity">
<ButtonGroup aria-label="Basic example" size="sm" >
                        <Button
                            variant="info"
                            className="decrease"
                            onClick={()=>productQuantity('decrease',Product.name)}
                        >-</Button>
                        <Button
                            variant="success">
                            {Product.numbers}</Button>
                        <Button
                            variant="info"
                           className="increase"
                           onClick={()=>productQuantity('increase',Product.name)}
                        >+</Button>
                    </ButtonGroup>
</div>
<div className="total">{Product.numbers * Product.price}</div>
            </Fragment>
        )
               
    })
    
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
     
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
 history.push({
       pathname:"/address"
   })
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
    return(
        <div>
        <div  style={{ borderStyle: 'ridge', marginTop: '10px', marginLeft: '130px', marginRight: '130px' }}>
        <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
     </div>
    <div  style={{ borderStyle: 'ridge', marginTop: '10px', marginLeft: '130px', marginRight: '130px' }}> 
            <div className="product-header" >
                <h5 className="product-title">PRODUCT</h5>
                <h5 className="price sm-hide">PRICE</h5>
                <h5 className="quantity">QUANTITY</h5>
                <h5 className="total">TOTAL</h5>

            </div>
            
           <div className="products"  >
        {productsInCart}
           </div>

            <div className="basketTotalContainer">
                <h4 className="basketTotalTitle">Items Total</h4>
    <h4 className="basketTotal">{basketProps.cartCost}</h4>
            </div>

        </div>
        <div style={{ borderStyle: 'ridge', marginTop: '10px', marginLeft: '130px', marginRight: '130px' }}>
        <h4>Available Offers</h4>
        <ul>
            <li>
                10% Instant Discount with HSBC Credit Cards on a min
                spend of Rs 2,000.
            </li>
            <li>
                5% Unlimited Cashbackon Flipcart Axis Bank Credit Card.
            </li>
        </ul>
    </div>

    <div style={{ borderStyle: 'ridge', marginTop: '10px', marginLeft: '130px', marginRight: '130px' }}>
        <h4>COUPONS</h4>
        <input type="text"
            placeholder="Enter Coupon code"
        ></input>
        <Button style={{ marginLeft: '20px' }}>Apply</Button>
    </div>
    <div style={{ marginLeft: '600px', marginTop: '10px', marginBottom: '10px' }}>
    {console.log(steps.length,"length")}
    {console.log(activeStep,"activestep")}
  {activeStep === steps.length ? (
    <div>
      <Typography >All steps completed</Typography>
      <Button onClick={handleReset}>Reset</Button>
    </div>
  ) : (
    <div>
     {console.log(steps.length - 1 ,"valuueu")}
      <div>
        <Button
          disabled={activeStep === 0}
          onClick={handleBack}
         
        >
          Back
        </Button>
        {
            activeStep === steps.length - 1 ?
            <Button style={{marginLeft:'10px'}} color="primary" onClick={handleNext}>
                Finish </Button>
                :
                <Button style={{marginLeft:'10px'}} color="primary" onClick={handleNext}>
                Place Order </Button>
        }
      </div>
    </div>
  )}
</div>
</div>
    )
}
const mapStateToProps = state => ({
    basketProps:state.basketState
    })
export default connect(mapStateToProps, {productQuantity ,clearProduct})(Carts)