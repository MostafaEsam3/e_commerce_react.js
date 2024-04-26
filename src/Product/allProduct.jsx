import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../card/card'
import Pagination from '../Pagination/pagination'
 function AllProduct() {
    const [allProduct,setAllProduct]=useState([])
    const [currentPage,setCurrentPage]=useState(1)
    const [postPerPage,setpostPerPage]=useState(10)


    useEffect(()=>{
axios.get('https://dummyjson.com/products')
.then(result=>{
    const data=result.data.products;
    setAllProduct(data)
}
)
.catch(err=>console.log(err))

 },[])

 const lastPostIndex=currentPage * postPerPage
 const firstPostIndex=lastPostIndex - postPerPage
 const currentPost=   allProduct.slice(firstPostIndex,lastPostIndex)


const Search = (e) => {
  const searchTerm = e.target.value.toLowerCase();
  if (searchTerm === "") {
      axios.get("https://dummyjson.com/products")
          .then((res) => setAllProduct(res.data.products))
          .catch((err) => console.log(err));
  } else {
      const filteredMovies = allProduct.filter(product => product.title.toLowerCase().includes(searchTerm));
      setAllProduct(filteredMovies);
  }
}


  return (<>
  <div className='col-12  container-fluid' >

<div className='mt-2 ' style={{width:"15%", margin:"auto" }}>
<input type="text" className="form-control bg-secondary text-white" onChange={(e)=>Search(e)} placeholder="Search"/>
</div>


  <div className='row col-12 ' style={{height:"  800px;"}}>
  {
    currentPost.map((product,key=key.id)=>{
        return <Card title={product.title} 
        image={product.images[0]} price={product.price} rating={product.rating} 
        brand={product.brand} 
        id={product.id} 
        obj={product}
        />

    })
  }
</div>
<Pagination totalPosts={allProduct.length} postsPerPage={postPerPage} SetCurrentPage={setCurrentPage}/>
 
</div>


  </>
  )
}
export default AllProduct