import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { width } from '@fortawesome/free-brands-svg-icons/fa42Group';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { DECREMENT, INCREMENT, REMOVE_FROM_CART } from '../redux/Types/types';

export default function CartLayout(props) {

  const history = useHistory();

  const cartArrayReduser = useSelector((state)=>state.cart)


const dispatch = useDispatch()

  const handleRemove = (p)=>{
    dispatch({
      type:REMOVE_FROM_CART,
      payload:p.id
    })
    history.push('/cart')
  }

  const inc=(p)=>{
    
    dispatch({
      type:INCREMENT,
      payload:p.id
    })
  
   
}



const dec=(p)=>{
    
  dispatch({
    type:DECREMENT,
    payload:p.id
  })

 
}

  return (
<>



             <div class="col-md-2 col-lg-2 col-xl-2">
                      <img
                        src={props.img}
                        className="img-fluid rounded-3" alt="" style={{width:"90px",height:"90px" }}/>
                    </div>
                    <div class="col-md-3 col-lg-3 col-xl-3">
                      <h6 class="text-muted">{props.title}</h6>
                      <h6 class="text-black mb-0">{props.description}</h6>
                    </div>
                    <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                    <button onClick={()=>inc(props.obj)} className='btn btn-secondary'> +
                      </button>

                      <input id="form1" min="0" name="quantity" value={Number(props.quantity)}  className="form-control form-control-sm" />

                      <button onClick={()=>dec(props.obj)} className="btn btn-secondary ">
                        -
                      </button>


                    </div>
                    <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                      <h6 class="mb-0">€ {props.price * props.quantity}</h6>
                    </div>
                    <div class="col-md-1 col-lg-1 col-xl-1 ">
                        <button onClick={()=>handleRemove(props.obj)} className='btn btn-light ' style={{color:"black" ,fontWeight:"700"}}>Remove</button>
                    </div>
                  
                  <hr class="my-4"/>




</>  
)
}
