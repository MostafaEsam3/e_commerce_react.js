import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CHANGE, DECREMENT, INCREMENT } from '../redux/Types/types'


 function Counter() {
    const [counter,setCount]=useState(0)

    const counterReducer=useSelector(state => state.count)

    const color = useSelector(state => state.background);
    
    const changecolor = () => {
      dispatch({
        type: CHANGE
      });
    };
  

    const dispatch=useDispatch()

    const handleCounterInc=()=>{
        dispatch({
            type:INCREMENT
        })

    }

    const handleDecremnt=()=>{

            dispatch({
                type:DECREMENT
            })
       

    }
  return (
<>
<div style={{ backgroundColor: color }}>

<p >{counterReducer}</p>
<button onClick={changecolor}>Change Color</button>
<button onClick={handleCounterInc}>increment</button>
<button onClick={handleDecremnt} >decremnt</button>

</div>
</>  )
}

export default Counter;
