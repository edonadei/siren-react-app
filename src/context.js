import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = React.createContext();
// Provider
// Consumer

class ProductProvider extends Component {
  state = {
    // Products
    products: [],
    detailProduct: detailProduct,

    // Cart
    cart: [],
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,

    // Modal menu
    modalOpen: false,
    modalProduct: detailProduct
  };

  // Used to give to pass the copies, not the actual values
  componentDidMount() {
    this.setProducts();
  }

  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(item => {
      // Here we COPY the value, not referencing it, it breaks the problem we had with messed up values in database
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState(() => {
      return { products: tempProducts };
    });
  };

  getItem = id => {
    const product = this.state.products.find(item => item.id === id);
    return product;
  };

  handleDetail = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };

  addToCart = id => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    // We update the tempProducts with the new values
    this.setState(() => {
      // Reminder ... means we had all the properties of the cart to this.state.cart
      return { products: tempProducts, cart: [...this.state.cart, product] };
    });
  };

  openModal = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { modalProduct: product, modalOpen: true };
    });
  };

  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };

  increment = (id) => {
    console.log('this is increment method');
  }

  decrement = (id) => {
    console.log('this is decrement method');
  }

  removeItem = (id) => {
    console.log('this is remove method');
  }

  clearCart = () => {
    console.log('this is clear cart method');
  }

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart 
        }}
      >
        {this.props.children};
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
