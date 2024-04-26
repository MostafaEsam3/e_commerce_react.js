import React from 'react';
import { NavLink,Link } from 'react-router-dom';

import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import { faHeart } from '@fortawesome/free-solid-svg-icons'; // Import the heart icon


const Header = () => {
    const COUNT_CART_REDUCER = useSelector((state)=>state.cart.count)

    const COUNT_WISH_REDUCER = useSelector((state)=>state.wish.count)


    
    return (
        <>
{/* <div className='text-white' style={{ backgroundColor: 'rgba(49, 49, 54, 0.993)' }}> */}
<div className='' style={{ backgroundColor: '#FFFFFF' ,color:"black"}}>

        
<nav className="navbar navbar-expand-lg navbar-light " style={{ padding:"0px"}}>
<div className="container-fluid py-2 " >
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ color:"black"}}>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <NavLink className="nav-link " aria-current="page" to="/" >Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link " to="/" >Product</NavLink>
                </li>
                <li className="nav-item">
                    <Link className="nav-link " to="/mostafa" >About</Link>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link " to="/contact" rel="noreferrer">Contact</NavLink>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/wishList">
                           WishList <FontAwesomeIcon icon={faHeart} /> 
        <span className="badge bg-danger">{COUNT_WISH_REDUCER}</span>
      </Link>
                </li>
            </ul>
            <NavLink className="navbar-brand mx-auto fw-bold " to="/" rel="noreferrer">APPLE MART</NavLink>
            
            <div className='d-flex justify-content-between base-line w-25 '>
            <Link className="nav-link" to="/mostafa" >Login</Link>
            <Link className="nav-link" to="/mostafa" >Register</Link>
            <Link className="nav-link" to="/cart">
                    <FontAwesomeIcon icon={faShoppingCart} />
                    <span className="badge bg-danger">{COUNT_CART_REDUCER}</span>
                </Link>
            </div>
        
        </div>
    </div>
</nav>
</div>
<div className='mb-1' style={{ borderBottom: "1px solid grey", width: "100%", height: "1px" }}>

</div>
</>
        );
    }

    export default Header;
