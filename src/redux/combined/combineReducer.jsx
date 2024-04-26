import { combineReducers } from "redux";
import counterReducer from "../reducer/reducer.jsx";
import FavouriteReducer from "../reducer/FAV_REDUCER.jsx";

export default combineReducers({
    cart:counterReducer,
    wish:FavouriteReducer
 
})