import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import './App.css';
import Counter from './counter/counter';
import mystore from './redux/store';
import { CHANGE } from './redux/Types/types';
import Footer from './footer/footer';
import Header from './NAVBAR/navBar';
import { BrowserRouter,Route,Router,Switch } from 'react-router-dom/cjs/react-router-dom.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './Form/Login';
import RegistrationForm from './Form/Register';
import AllProduct from './Product/allProduct';
import Card from './card/card';
import OneCard from './OneCard/oneCard';
import Cart from './cart/cart';
import RendWishList from './wishList/wishList._fun';



function App() {

  return (<>
  <div   style={{backgroundColor:'#FFFFFF'}}>


  
  <BrowserRouter>
<Header/>
<Switch>
<Route exact  component={Cart} path={'/cart'}/>

  <Route exact  component={AllProduct} path={'/'}/>
  <Route exact  component={OneCard} path={'/product/:id'}/>
  <Route exact  component={RendWishList} path={'/wishList'}/>


  <Route exact  component={RegistrationForm} path={'/mostafa'}/>

  
</Switch>
<Footer/>
</BrowserRouter>
</div>
  </>

    
  );
}

export default App;
