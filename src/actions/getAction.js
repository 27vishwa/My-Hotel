import {GET_NUMBERS_BASKET,WORK,HOMES} from './types'
export function getNumbers() {
    return(dispatch)=>{
        console.log("getting all basket numbers")
        dispatch({
            type: GET_NUMBERS_BASKET
        })
      
    } 
}
export function work() {
    return(dispatch)=>{
        
        dispatch({
            type: WORK
        })
      
    } 
}
export function homes() {
    return(dispatch)=>{
       
        dispatch({
            type: HOMES
        })
      
    } 
}


