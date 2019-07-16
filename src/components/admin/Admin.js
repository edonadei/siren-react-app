import React, { Component } from 'react'
import { ProductConsumer } from '../../context'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const cellEditProp = {
    mode: 'dbclick'
};

function onAfterInsertRow(row) {
    let newRowStr = '';

    for (const prop in row) {
        newRowStr += prop + ': ' + row[prop] + ' \n';
    }
    alert('The new row is:\n ' + newRowStr);
}

const options = {
    afterInsertRow: onAfterInsertRow,
    sizePerPageList: [5, 10, 15, 20],
    sizePerPage: 5,
};

export default class Admin extends Component {

    render() {
        return (
            <div>
                <div className="mx-auto text-capitalize text-center p-5">
                    <div className="row">
                        <ProductConsumer>
                            {(value) => {
                                return (
                                    <BootstrapTable data={value.products} cellEdit={cellEditProp} options={options} striped hover>
                                        <TableHeaderColumn isKey dataField='id'>ID</TableHeaderColumn>
                                        <TableHeaderColumn dataField='title'>Name</TableHeaderColumn>
                                        <TableHeaderColumn dataField='price'>Price</TableHeaderColumn>
                                        <TableHeaderColumn dataField='company'>Company</TableHeaderColumn>
                                        <TableHeaderColumn dataField='info'>Info</TableHeaderColumn>
                                        <TableHeaderColumn dataField='inCart'>In cart</TableHeaderColumn>
                                    </BootstrapTable>
                                )
                            }}
                        </ProductConsumer>
                    </div>
                </div>
            </div>

        )
    }
}
