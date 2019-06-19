import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from '@material-ui/icons/Home';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Product from './components/Product';
import ProductList from './components/ProductList';
import Default from './components/Default';
import Details from './components/Details';
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={ProductList}></Route>
        <Route path="/details" component={Details}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route component={Default}></Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
