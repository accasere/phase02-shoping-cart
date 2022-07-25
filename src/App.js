import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Products from './components/Products'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Cart from './components/Cart'
import AddProduct from './components/AddProduct'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
  

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header/>}>
            <Route path="/products" component={Products} />
            <Route path="/products" component={SignUp} />
            <Route path="/products" component={Login} />
            <Route path="/products" component={Cart} />
            <Route path="/products" component={AddProduct} />



          </Route>
        </Routes>
      
      
      </BrowserRouter>
     
  );
}

export default App;
