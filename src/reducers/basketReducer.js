import {
    ADD_PRODUCT_BASKET, GET_NUMBERS_BASKET, newProducts,
    INCREASE_QUANTITY, DECREASE_QUANTITY,CLEAR_PRODUCT,HANDLE_NEXT,HANDLE_BACK,RESET,WORK,HOMES,
    ADD_VALUE,MOBILENO
} from '../actions/types'


const initialState = {
    basketnum: 0,
    cartCost: 0,
    Products: newProducts,
    activeStep: 0,
    works:false,
    steps: ['MyCart', 'Address', 'Payment'],
     name:"",
     address:"",
     mobileno:"",
     email:"",
     pincode:"",
     city:"",
     states:"",

}


export default (state = initialState, action) => {
    let productSelected = "";
    console.log(action.type,"action")
    console.log(state,"state")
    console.log(state.Products,"payload")
    switch (action.type) {
      
        case ADD_PRODUCT_BASKET:
           
            productSelected = { ...state.Products[action.payload] };
             productSelected.numbers += 1;
            productSelected.inCart = true;
            console.log(productSelected, "quantity");
            return {
                ...state,
                basketnum: state.basketnum + 1,
                cartCost: state.cartCost + state.Products[action.payload].price,
                Products: {
                    ...state.Products,
                    [action.payload]: productSelected
                }

            }
        case GET_NUMBERS_BASKET:

            return {
                ...state
            }
            case HANDLE_NEXT:
               
                return {
                    ...state,
                    activeStep : state.activeStep + 1,
                  
                
                }
                case HANDLE_BACK:
          
                    return {
                        ...state,
                        activeStep : state.activeStep - 1
                    }
                    case RESET:
          
                        return {
                            ...state,
                            activeStep : 0
                        }
                        case ADD_VALUE:
            
                            return {
                            ...state,
                               name:action.payload
                            }
                            case 'ADDRESS':
          
                                return {
                                    ...state,
                                  address:action.payload
                                }
                              case MOBILENO:
                                  return{
                                      ...state,
                                      mobileno:action.payload
                                  }
                                case 'EMAIL':
                                return{
                                    ...state,
                                        email:action.payload
                                }
                        case HOMES:
          
                            return {
                                ...state,
                                works: false
                            }
                            case WORK:
          
                                return {
                                    ...state,
                                    works: true
                                }
                                
           
       
        case INCREASE_QUANTITY:

            productSelected = { ...state.Products[action.payload] };

            productSelected.numbers = productSelected.numbers + 1;
            return {
                ...state,
                basketnum: state.basketnum + 1,
                cartCost: state.cartCost + state.Products[action.payload].price,
                Products: {
                    ...state.Products,
                    [action.payload]: productSelected
                }
            }
        case DECREASE_QUANTITY:
            productSelected = { ...state.Products[action.payload] };
            let newCartCost = 0;
            let newBasketnum = 0;
            if(productSelected.numbers === 0)
            {
                productSelected.numbers = 0;
                newCartCost= state.cartCost;
                newBasketnum = state.basketnum;
            }
            else
            {
                productSelected.numbers -= 1;
                newCartCost=state.cartCost - state.Products[action.payload].price;
                newBasketnum= state.basketnum - 1;
            }
           
            return {
                ...state,
                basketnum: newBasketnum,
                cartCost: newCartCost,
                Products: {
                    ...state.Products,
                    [action.payload]: productSelected
                }
            }
            case CLEAR_PRODUCT:
                productSelected={ ...state.Products[action.payload] };
                let numbersBackup = productSelected.numbers;
                productSelected.numbers=0;
                productSelected.inCart= false;
            return {
                ...state,
                basketnum: state.basketnum - numbersBackup,
                cartCost: state.cartCost - (numbersBackup * productSelected.price),
                Products: {
                    ...state.Products,
                    [action.payload]: productSelected
                }
            }

        default:
            return state;
    }
}