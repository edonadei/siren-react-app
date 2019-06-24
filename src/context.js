import React, { Component } from 'react'
import {storeProducts, detailProducts, detailProduct} from './data';

const ProductContext = React.createContext();
// Provider 
// Consumer

class ProductProvider extends Component {
    state = {
        products:storeProducts,
        detailProducts:detailProduct
    }

handleDetail = () => {
    console.log('hello from detail');
}

addToCart = () => {
    console.log('hello from add to cart');
}

    render() {
        return (
            <ProductContext.Provider value = {{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart
            }}
            >
                {this.props.children};
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider,ProductConsumer};