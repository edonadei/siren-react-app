import React, { Component } from "react";
import { Link } from "react-router-dom";
import Cart from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import logo from "../logo.svg";
import styled from "styled-components"

class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to="/">
          <img src={logo} alt="store" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Products
            </Link>
          </li>
        </ul>

        <Link to="/cart" className="ml-auto">
          <Button variant="outlined" color="primary">
            <span className="mr-2">
              <Cart />
            </span>
            My cart
          </Button>
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
background: var(--mainBlue);
.nav-link {
  color: var(--mainWhite) !important;
  font-size: 1.3rem;
  text-transform:capitalize !important;
}
`;

export default Navbar;
