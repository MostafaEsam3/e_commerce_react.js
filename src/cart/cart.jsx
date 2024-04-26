import React from 'react'
import { useSelector } from 'react-redux'
import CartLayout from './cartLayout';

export default function Cart() {
    const car = useSelector((state)=>state.cart.cartArray);
  return (
<>
<h1 className='mx-3'>
Shopping cart
</h1>
<div class="row mb-4 d-flex justify-content-between align-items-center mt-5 col-8 mx-auto pt-3">
      {car.map((e)=> 
<CartLayout img={e.images[0]} title={e.title} description={e.description} price={e.price} quantity={e.quantity} obj={e}/>
     )} 
</div>
</>
    
)
     
     
}
