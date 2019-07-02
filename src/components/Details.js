import React, { Component } from 'react';
import { ProductConsumer } from '../context'
import { Link } from 'react-router-dom'
import { ButtonContainer } from './Button'

class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const { id, company, img, info, price, title, inCard } =
                        value.detailProducts;
                    return (
                        <div className="container py-5">
                            {/* title */}
                            <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                <h1>{title}</h1>
                            </div>
                            {/* end title */}

                            {/* product info */}
                            
                            {/* end product info */}
                            
                        </div>
                    )
                }}
            </ProductConsumer>
        );
    }
}

export default Details;