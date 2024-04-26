import React from 'react'

 function CardDetails(props) {
  return (<>


<div className='mo bg-danger'>
        <div className="row edit-row col-12 mt-4 " >
          <div className="col-md-3" >
            <img src={`${props.img}`} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8 " >
            <div className="card-body edit-card">
              <h5 className="card-title">{props.tittle}</h5>
              <p className="card-text text-white">{props.description}</p>
              <p className="card-text text-white">{props.price}</p>
              <p className="card-text text-white"><small className="text-white">{props.category}</small></p>
            </div>
          </div>
        </div>
      </div>
    




  
  
  
  
  </>
  )
}
export default CardDetails