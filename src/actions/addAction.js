import {ADD_PRODUCT_BASKET,ADD_VALUE,MOBILENO} from './types'
export function addBasket(itemName) {
    return function(dispatch){
       
        dispatch({
            type: ADD_PRODUCT_BASKET,
            payload: itemName
        })
      
    } 
   
}
export function handleText(e) {
    return(dispatch)=>{
       
        dispatch({
            type: ADD_VALUE,
            payload:e.target.value
        })
        dispatch({
            type: 'ADDRESS',
            payload:e.target.value
        })
        dispatch({
            type: MOBILENO,
            payload:e.target.value
        })
        dispatch({
            type: 'CITY',
            payload:e.target.value
        })
        dispatch({
            type: 'PINCODE',
            payload:e.target.value
        })
        dispatch({
            type: 'STATE',
            payload:e.target.value
        })
        dispatch({
            type: 'EMAIL',
            payload:e.target.value
        })
      
    } 
   
}