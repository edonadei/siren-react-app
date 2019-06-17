import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from '@material-ui/icons/Home';
import Navar from './components/Navbar'
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Product from './components/Product';
import ProductList from './components/ProductList';
import Default from './components/Default';
import Details from './components/Details';

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <ProductList></ProductList>
      <Details></Details>
      <Cart></Cart>
      <Default></Default>
    </React.Fragment>
  );
}

export default App;
