import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../context";

class Product extends Component {
    render() {
        const { id, title, img, price } = this.props.product;
        return (
            <React.Fragment>

                <ProductWrapper className="col-4 mx-auto my-3 ml-3">
                    <div className="card">
                        <ProductConsumer>
                            {value =>
                                <div
                                    className="img-container p-5"
                                    onClick={() => {
                                        value.handleDetail(id);
                                    }}
                                >
                                    <Link to="/details">
                                        <img src={img} alt="product" className="card-img-top" />
                                    </Link>
                                </div>}
                        </ProductConsumer>
                        {/* card footer */}
                        <div className="card-footer d-flex justify-content-between">
                            <p className="align-self-center">
                                {title}
                            </p>
                            <h5 className="text-blue font-italic mb-0">
                                <span className="mr-1">€</span>
                                {price}
                            </h5>
                        </div>
                    </div>
                </ProductWrapper>
                <ProductWrapper className="col-8 mx-auto my-3">
                    <div className="card">
                        <ProductConsumer>
                            {value =>
                                <div className="container">
                                    <div className="row text-capitalize text-centered mx-auto">
                                        <div className="mr-3">edit</div>
                                        <div className="mr-3">delete</div>
                                        <div className="mr-3">stats</div>
                                    </div>
                                </div>
                            }
                        </ProductConsumer>

                    </div>
                </ProductWrapper>
            </React.Fragment>
        );
    }
}

const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 0.3s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 0.3s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba (0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }
  .img-container {
    overflow: hidden;
  }
  .card-img-top {
    transition: all 0.1s linear;
  }
  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 0.5s linear;
  }
  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }
  .cart-btn:hover {
    color: var(--mainBlue);
    cursor: pointer;
  }

  .cart-btn:focus {
    outline: none;
  }
`;

export default Product;