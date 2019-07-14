import React, { Component } from 'react'
import {ProductConsumer} from '../../context'
import ProductAdmin from './ProductAdmin'

export default class Admin extends Component {
    render() {
        return (
            <div>
                <div className="mx-auto text-capitalize text-center pt-5">
                    <h2>Admin page</h2>
                    <div className="row">
                            <ProductConsumer>
                                {(value) => {
                                    return value.products.map( product => {
                                        return <ProductAdmin key={product.id} product={product}/>;
                                    })
                                }}
                            </ProductConsumer>
                        </div>
                </div>
            </div>
        )
    }
}
