import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Cart from "./components/cart";
import ProductList from "./components/ProductList";
import Default from "./components/Default";
import Details from "./components/Details";
import Admin from "./components/admin/AdminConditional"
import Login from "./components/login/LoginPage"
import { Switch, Route } from "react-router-dom";
import Modal from './components/Modal'

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route path="/admin" component={Admin} />
        <Route path="/login" component={Login} />
        <Route component={Default} />
      </Switch>
      <Modal />
    </React.Fragment>
  )
}

export default App;
