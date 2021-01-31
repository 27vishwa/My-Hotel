import React, { Fragment } from 'react'
import {connect} from 'react-redux'
//import {useHistory} from 'react-router'
//import Steppers from './stepper'
import {Button,ButtonGroup} from 'react-bootstrap'
//import {Step,Stepper,StepLabel,Typography} from '@material-ui/core';
import {productQuantity , clearProduct,handlenext,handleback,Reset} from '../actions/productQuantity'
import '../App.css'
function Carts({basketProps,productQuantity,clearProduct,handlenext,handleback,Reset}){
    console.log(basketProps)
    let productsInCart = [];
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

    return(
        <div>
      
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
        <ul key="idnew">
            <li key="id1">
                10% Instant Discount with HSBC Credit Cards on a min
                spend of Rs 2,000.
            </li>
            <li key="id2">
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
   
</div>
    )
}
const mapStateToProps = state => ({
    basketProps:state.basketState
    })
export default connect(mapStateToProps, {productQuantity ,clearProduct,handlenext,handleback,Reset})(Carts)