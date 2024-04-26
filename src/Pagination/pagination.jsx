import React from "react";

const Pagination=({totalPosts,postsPerPage,SetCurrentPage})=>{
    let pages=[];
    for(let i =1 ; i <=Math.ceil( totalPosts/postsPerPage) ;i++){
        pages.push(i)
    }
    return(<>
    <div className="text-center ">

        {   
             pages.map((page,index)=>{
             return <button className=" btn btn-info mx-1 mt-5 mb-3" key={index} onClick={()=>SetCurrentPage(page)}> {page} </button>
            })
        }
    </div>
    </>)
}

export default Pagination;