import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Products from './components/Products'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Cart from './components/Cart'
import AddProduct from "./components/AddProduct"

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        'http://localhost:8000/products',
      );
      const json = await res.json();
      setItems(json);
    };
    fetchData();
  }, []) ;


  function handleAddCart(product){
    const ProductsExist = cartItems.find((item) => item.id === product.id)
    if(ProductsExist){
      setCartItems(cartItems.map((item) => item.id === product.id ? { ...ProductsExist, quantity: ProductsExist.quantity + 1 } : item));
    } else {
      setCartItems( [...cartItems, {...product, quantity: 1}])
    }
  }

  function handleRemove(product){
    const ProductsExist = cartItems.find((item) => item.id === product.id)
    if(ProductsExist.quantity === 1){
      setCartItems(cartItems.filter((item) => item.id !== product.id))
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
          ? { ...ProductsExist, quantity: ProductsExist.quantity - 1}
          : item
        )
      );
    }
  } 

  function handleClearCart() {
    setCartItems([])
  }


  return (
    <div className="App">
  
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header cartItems={cartItems}/>}>
            <Route path='/products' element={< Products items={items} handleAddCart={handleAddCart} />}/>
            <Route path='/addproducts' element={<AddProduct/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/cart' element={<Cart cartItems={cartItems} handleAddCart={handleAddCart} handleRemove={handleRemove} handleClearCart={handleClearCart}/>}/>
           
          </Route>
        
        </Routes>      
      </BrowserRouter>
       
    </div>
     
  );
}

export default App;
