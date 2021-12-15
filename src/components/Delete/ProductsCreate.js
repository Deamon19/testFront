import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Form, Row, Col, Button } from "react-bootstrap";

class ProductsCreate extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeProductName = this.onChangeProductName.bind(this);
    this.onChangeProductEan = this.onChangeProductEan.bind(this);
    this.onChangeProductType = this.onChangeProductType.bind(this);
    this.onChangeProductWeight = this.onChangeProductWeight.bind(this);
    this.onChangeProductColor = this.onChangeProductColor.bind(this);
    this.onChangeProductQuantity = this.onChangeProductQuantity.bind(this);
    this.onChangeProductPrice = this.onChangeProductPrice.bind(this);
    this.onChangeProductActive = this.onChangeProductActive.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    var uniqid = require('uniqid');

    // sukurti ID su uniqid.


    this.state = {
      id: uniqid(),
      name: "",
      ean: "",
      type: "",
      weight: "",
      color: "",
      quantity: "",
      price: "",
      active: ""
    };
  }



  onChangeProductName(e) {
    this.setState({ name: e.target.value });
  }

  onChangeProductEan(e) {
    this.setState({ ean: e.target.value });
  }

  onChangeProductType(e) {
    this.setState({ type: e.target.value });
  }

  onChangeProductWeight(e) {
    this.setState({ weight: e.target.value });
  }

  onChangeProductColor(e) {
    this.setState({ color: e.target.value });
  }

  onChangeProductQuantity(e) {
    this.setState({ quantity: e.target.value });
  }

  onChangeProductPrice(e) {
    this.setState({ price: e.target.value });
  }

  onChangeProductActive(e) {
    //this.setState({ active: e.target.value() });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(`Product successfully created!`);
    console.log(`Name: ${this.state.name}`);
    console.log(`ID: ${this.state.id}`);

    let products = JSON.parse(localStorage.getItem("products"));

    // let idString = toString(this.state.id);

    var uniqid = require('uniqid');
    var product_id = uniqid();
    this.setState({id: product_id});

    let product = {
      id: this.state.id,
      name: this.state.name,
      ean: this.state.ean,
      type: this.state.type,
      weight: this.state.weight,
      color: this.state.color,
      quantity: this.state.quantity,
      price: this.state.price,
      active: this.state.active
    };

    let existingProducts = JSON.parse(localStorage.getItem("products"));

    if (existingProducts == null) existingProducts = [];
    existingProducts.push(product);
    localStorage.setItem("products", JSON.stringify(existingProducts));

    this.state = {
      products: JSON.parse(localStorage.getItem("products"))
    };

    this.props.history.push("/products");
  }

  render() {
    return (
      <div className="col-md-12 app-wrapper">
        <h1>Products Create</h1>

        <Form onSubmit={this.onSubmit}>
          <Form.Group as={Row} controlId="formHorizontalName">
            <Form.Label column sm={2}>
              Name
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                value={this.state.name}
                onChange={this.onChangeProductName}
                placeholder="Name"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalEAN">
            <Form.Label column sm={2}>
              EAN
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="number"
                value={this.state.Ean}
                onChange={this.onChangeProductEan}
                placeholder="EAN"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalType">
            <Form.Label column sm={2}>
              Type
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                value={this.state.type}
                onChange={this.onChangeProductType}
                placeholder="Type"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalWeight">
            <Form.Label column sm={2}>
              Weight
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="integer"
                value={this.state.weight}
                onChange={this.onChangeProductWeight}
                placeholder="Weight"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalColor">
            <Form.Label column sm={2}>
              Color
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                value={this.state.color}
                onChange={this.onChangeProductColor}
                placeholder="Color"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalQuantity">
            <Form.Label column sm={2}>
              Quantity
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="integer"
                value={this.state.quantitys}
                onChange={this.onChangeProductQuantity}
                placeholder="Quantity"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalPrice">
            <Form.Label column sm={2}>
              Price
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="integer"
                value={this.state.price}
                onChange={this.onChangeProductPrice}
                placeholder="Price"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalCheck">
            <Col sm={{ span: 10, offset: 2 }}>
              <Form.Check label="Active" />
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type="submit">Add a Product</Button>
            </Col>
          </Form.Group>
        </Form>
        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Link to="/products">
              <button type="button" class="btn btn-success">
                Back
              </button>
            </Link>
          </Col>
        </Form.Group>
      </div>
    );
  }
}

export default ProductsCreate;
