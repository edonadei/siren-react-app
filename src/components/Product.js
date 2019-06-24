import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context'

class Product extends Component {
    render() {
        const { id, title, img, price, inCart } = this.props.product;
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <div className="img-container p-5" onClick={() => console.log('you clicked on the image container')}>
                        <Link to="/details">
                            <img src={img} alt="product" className="card-img-top" />
                        </Link>
                        <button className="cart-btn" disabled={inCart ? true : false} onClick={() => console.log('added to the cart')}>
                        </button>
                    </div>
                </div>
            </ProductWrapper >
        );
    }
}

const ProductWrapper = styled.div`

`

export default Product;