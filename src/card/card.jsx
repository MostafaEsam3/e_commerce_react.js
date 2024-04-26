import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { ADD_TO_CART, ADD_TO_FAVOURITE } from '../redux/Types/types';



 function Card(props) {

  const ReducerState = useSelector((state)=>state.cart);
  const dispatch = useDispatch()
  const HandleAddCart=(Product)=>{
    
    dispatch({  
      type:ADD_TO_CART,
      payload: Product 

    }
    )

    
  }

  // cart Finshed ALL FUNCTION 

  // BELOW IS WISH LIST FUNCTION 

const handleWishList =(product)=>{
  
  dispatch({
    type:ADD_TO_FAVOURITE,
    payload:product
    
  })


}


  return (
  <>

<div className=" card text-center mt-2 mx-2 " style={{ backgroundColor: '#F6F6F6', 
fontFamily: 'SF Pro Display', fontWeight: "900",
 width: '268px', color: "#000000" ,size:"16px",
 height:"50%",borderRadius:"9px",lineHeight:"15px"}}>

  
<div className='button_fav  text-end mt-1  ' style={{padding:"0",margin:"0"}}> 
   <button onClick={()=>handleWishList(props.obj)} style={{ color: 'RED', fontSize: '40px', textDecoration: 'none' , border:"none", background:"none"}}>
      &hearts;
    </button>    
      </div>
       <div className='mt-2 '>

        <img  src={props.image} style={{ height: '160px' ,width:"160px", fill:"true"}} alt='' /></div>
              <p class="mt-2 ">{props.title} </p>   
              <p ><strong>Price</strong> : {props.price}</p>
              <p ><strong>Rate</strong> :  {props.rating}  </p>   
              <p><strong>Brand</strong> : {props.brand}  </p> 
    <div class=" align-items-baseline justify-content-between">
    <button onClick={() => HandleAddCart(props.obj)}  className='btn btn' style={{ color: "white" ,backgroundColor:"black"}}>Add to CART</button>
 <br />
 
 {/* <div className='d-flex  mt-1' style={{alignItems:"center",justifyContent:"space-between"}}> */}

    <Link to={`/product/${props.id}`} className="btn btn-dark">Details</Link>


 {/* </div> */}
    </div>

    </div>
  
  </>
  )
}
export default Card