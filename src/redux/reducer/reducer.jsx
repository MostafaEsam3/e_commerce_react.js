    import { faAppleWhole } from "@fortawesome/free-solid-svg-icons";
    import { ADD_TO_CART, CHANGE, DECREMENT, INCREMENT, REMOVE_FROM_CART } from "../Types/types";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

    // const counterReducer=( state = {count:0 , background:'white'} , action ) => {

    //     if(action.type === INCREMENT){

    //     return {...state,
    //          count:state.count+1}
    //     }else if (action.type === DECREMENT){
    //         return {
    //             ...state,
    //          count:state.count-1
    //         }
    //     }  else if(action.type === CHANGE){

    //         const back = state.background === "black"?"white":"black"
    //         return{
    //             ...state,
    //             background:back
    //         }
    //     }
    // return state;
    // }

    const counterReducer =(state ={cartArray:[] , count:0} , action )=>{



 

        if (action.type === ADD_TO_CART){




    // const newCartArray = [...state.cartArray, action.payload];
    // why first click not run 

    let newCartArray = [...state.cartArray]

    if (newCartArray.some((pro)=>pro.id == action.payload.id)){
        const findIndex= newCartArray.findIndex((e)=>e.id == action.payload.id)
        newCartArray[findIndex].quantity++
    }else{
        action.payload.quantity=1
        newCartArray.push(action.payload)
    }

    const newCount= newCartArray.length
    return{
            ...state,
            cartArray: newCartArray,
            count:newCount
    }
    }
    if(action.type === REMOVE_FROM_CART){
        const indexToRemove = state.cartArray.findIndex(item => item.id === action.payload);
console.log(state.cartArray[indexToRemove].quantity);
        if (    indexToRemove !== -1   ) {
      const newCart=  state.cartArray.splice(indexToRemove, 1);
     const cart= state.cartArray.filter((e)=> e.id !=newCart.id)
     console.log(cart)

     return{
        ...state,
        cartArray:cart,
        count:state.cartArray.length
     }
    
    }} 
    
    if(action.type === INCREMENT){
        
        const newCart = [...state.cartArray]
        // why i need understand this conncept carfully 
    // AND I NEED WHY SAY TO ME NOT PUSH OUTSIDE AND THIS LEAD  TO MUTABLE 
        const index = state.cartArray.findIndex(item => item.id === action.payload);
        newCart[index].quantity+=1
        return{
            ...state,
             cartArray:newCart

        }


    }


    if(action.type === DECREMENT){
        
        let newCart = [...state.cartArray]
        // why i need understand this conncept carfully 
    // AND I NEED WHY SAY TO ME NOT PUSH OUTSIDE AND THIS LEAD  TO MUTABLE 
        const index = state.cartArray.findIndex(item => item.id === action.payload);
        if( newCart[index].quantity > 0 ){
            newCart[index].quantity-=1
            if(newCart[index].quantity === 0){
             const z=  newCart.splice(index, 1);
                newCart=newCart.filter((e)=> e.id != z.id)
                console.log(newCart)
            }
        }
        return{
            ...state,
             cartArray:newCart,
             count:newCart.length


        }


    }



  

    return state;
    }
    export default counterReducer;

