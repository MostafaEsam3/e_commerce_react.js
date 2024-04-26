import { ADD_TO_FAVOURITE } from "../Types/types"

const FavouriteReducer= (state ={wishListArray:[] , count:0} ,action)=>{


    if (action.type === ADD_TO_FAVOURITE){

    
        let newWishArray = [...state.wishListArray]
    
        if (newWishArray.some((pro)=>pro.id == action.payload.id)){
            const findIndex= newWishArray.findIndex((e)=>e.id == action.payload.id)
            newWishArray[findIndex].quantity++
        }else{
            action.payload.quantity=1
            newWishArray.push(action.payload)
        }
    
        const newCount= newWishArray.length
        return{
                ...state,
                wishListArray: newWishArray,
                count:newCount
        }


    }

    return state;



}

export default FavouriteReducer;