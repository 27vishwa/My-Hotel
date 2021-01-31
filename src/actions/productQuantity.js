import {INCREASE_QUANTITY,DECREASE_QUANTITY,CLEAR_PRODUCT,HANDLE_NEXT,HANDLE_BACK,RESET} from './types'
export function productQuantity(action,name)  {
    return(dispatch) => {
        console.log("inside product quantity");
        console.log("action is",action);
        console.log("product name is :",name)
        dispatch({
            type: action === "increase" ? INCREASE_QUANTITY : DECREASE_QUANTITY,
            payload: name
        })
    }
}
export function clearProduct(name) 
{
    return(dispatch) => {
        console.log("inside clear quantity");
        
        console.log("product name is :",name)
        dispatch({
            type: CLEAR_PRODUCT,
            payload: name
        })
    }
}
export function handlenext()  {
    return(dispatch)=> {
        dispatch({
            type: HANDLE_NEXT
        })
    }
}
export function handleback() {
    return(dispatch)=> {
        dispatch({
            type: HANDLE_BACK
        })
    }
}
export function Reset()  {
    return(dispatch)=> {
        dispatch({
            type: RESET
        })
    }
}

