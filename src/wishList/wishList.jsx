import React from 'react'

 function WishList(props) {

    
  return (
    <>
    <div class="col-md-2 col-lg-2 col-xl-2">
                      <img
                        src={props.img}
                        className="img-fluid rounded-3" alt="" style={{width:"90px",height:"90px" }}/>
                    </div>
                    <div class="col-md-3 col-lg-3 col-xl-3">
                      <h6 class="text-muted">{props.title}</h6>
                      {/* <h6 class="text-black mb-0">{props.description}</h6> */}
                    </div>

                    <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                      <h6 class="mb-0">€ {props.price * props.quantity}</h6>
                    </div>

                    
                    <div class="col-4  d-flex " style={{alignItems:"center" , justifyContent:"space-between"}}>
                    <button  className='btn btn-secondary'> Add to cart
                      </button>


                      <button  className="btn btn-secondary ">
                        QuickView
                      </button>
                    <div class="col-md-1 col-lg-1 col-xl-1 ">
                        <button  className='btn btn-danger ' style={{color:"black" ,fontWeight:"700"}}>Remove</button>
                    </div>
                    </div>
                    
                  <hr class="my-4"/>
    
    
    </>
  )
}
export default WishList;