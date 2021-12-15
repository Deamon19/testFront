// import React, { Component } from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class Products extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: JSON.parse(localStorage.getItem('user')),
      productSelected: '',
    };
  }

  delProduct = (product) => {
    const productWithout = this.state.user.filter(
      (prod) => prod.id !== product.id
    );
    this.setState({ user: productWithout });
  };

  render() {
    return (
      <div class="app-wrapper">
        <Link to="/user/create">
          <button type="button" class="btn btn-success">
            Add Product
          </button>
        </Link>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">EAN</th>
              <th scope="col">Type</th>
              <th scope="col">Color</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
              <th scope="col">Active</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.user.map((product, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{product.name}</td>
                <td>{product.ean}</td>
                <td>{product.type}</td>
                <td>{product.color}</td>
                <td>{product.quantity}</td>
                <td>{product.price}</td>
                <td>{product.active}</td>
                <td>
                  <Link
                    className="btn btn-sm btn-primary"
                    to={`/user/${product.id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-sm btn-info"
                    to={`/user/${product.id}/edit`}
                  >
                    Edit
                  </Link>
                  <Link
                    className="btn btn-sm btn-danger"
                    // to={`/user/${product.id}`}
                    onClick={this.delProduct.bind(this, product)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Products;
