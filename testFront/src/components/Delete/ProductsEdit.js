import React from "react";
import "../App.css";
import { Form, Row, Col, Button } from "react-bootstrap";
import ProductsPreview from "./ProductsPreview";

class ProductsEdit extends React.Component {
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

    this.state = {
      products: JSON.parse(localStorage.getItem("products")),
      productSelected: ''
    }

    let prod_id = props.match.params.id;

    console.log("Product ID in Edit: " + prod_id);

    let productSelected = this.state.products.filter(
      product => product.id === prod_id
    )[0];

      this.setState = {
        productSelected: productSelected
      }

      console.log("productSelected NAME is " + this.state.productSelected.name);

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

    // let product = {
    //   name: productSelected.name,
    //   ean: productSelected.ean,
    //   type: productSelected.type,
    //   weight: productSelected.weight,
    //   color: productSelected.color,
    //   quantity: productSelected.quantity,
    //   price: productSelected.price,
    //   active: productSelected.active
    // };
    // Updating a product 
    // Find product by id
    // Update it

    // let prodId = JSON.parse(this.match.params.id);

    // let product = products.find(product => product.id === prodId);

    // console.log('Product is: ' + product.name);

    this.props.history.push('/products')
  }


  render() {

    let productSelectedRender = this.state.productSelected;

    console.log(" productSelected in RENDER " + productSelectedRender);

    return (
      <div className="col-md-12 app-wrapper">
        <h1>Products Edit</h1>

        <Form onSubmit={this.onSubmit}>
          <Form.Group as={Row} controlId="formHorizontalName">
            <Form.Label column sm={2}>
              Name
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                value={productSelectedRender.name}
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
                value={productSelectedRender.Ean}
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
              <Button type="submit">Update a Product</Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
    );
  }
}


export default ProductsEdit;
