import React, {Component} from "react";
import ProductsList from "./productsList";
import Form from "./form";
import {getProducts, deleteProduct, newProduct} from "../api";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {products: []};
  }

  callGetProducts = async () => {
    let response = await getProducts();
    this.setState({products: response.data});
  };

  componentDidMount() {
    this.callGetProducts();
  }

  handleDelete = async (product) => {
    await deleteProduct(product.id);
    this.callGetProducts();
  };

  handleFormSubmit = async (state) => {
    const {formName, formAvatar} = state;
    await newProduct({name: formName, avatar: formAvatar});
    this.callGetProducts();
  };

  render() {
    return (
      <div className="container mt-3">
        <Form onSubmit={this.handleFormSubmit} />
        <ProductsList
          products={this.state.products}
          onDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default Products;
