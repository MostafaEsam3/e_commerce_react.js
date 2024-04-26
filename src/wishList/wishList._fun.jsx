import React from 'react'
import { useSelector } from 'react-redux';
import WishList from './wishList';

 function RendWishList() {

    const WishListArray = useSelector((state)=>state.wish.wishListArray)


    return (<>
      <h1 className='mx-3'>WISH LIST</h1>
<div class="row mb-4 d-flex justify-content-between align-items-center mt-5 col-8 mx-auto pt-3">
 {WishListArray.map((e)=> 
<WishList img={e.images[0]} title={e.title} description={e.description} price={e.price} quantity={e.quantity} obj={e}/>
     )} 
</div>
  
  </>
  )
}

export default RendWishList;