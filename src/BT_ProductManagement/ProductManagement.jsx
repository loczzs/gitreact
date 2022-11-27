import React, { Component } from "react";
import axios from "axios";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";

export default class ProductManagement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // products: chứa thông tin danh sách sản phẩm
      products: [],
      // selectedProduct: chứa thông tin sản phẩm cần cập nhật
      selectedProduct: null,
    };
  }
  fetchProducts = async () => {
    try {
      const { data } = await axios.get(
        "https://62da614a9eedb699636cab62.mockapi.io/products"
      );
      this.setState({ products: data });
    } catch {}
  };
  fetchProductDetails = async (productId) => {
    // console.log(productId)
    try {
      // Call API get product details
      const { data } = await axios.get(
        `https://62da614a9eedb699636cab62.mockapi.io/products/${productId}`
      );
      // Thành công
      this.setState({ selectedProduct: data });
    } catch (error) {
      console.log(error);
    }
  };
  componentDidMount() {
    this.fetchProducts();
    // console.log(this.state.products)
  }
  render() {
    return (
      <div className="container">
        <h1 className="text-center text-primary"> Product Management</h1>
        <div className="card mb-5">
          <div className="card-header bg-dark text-white">
            <strong>Product Form</strong>
          </div>
          <div className="card-body">
            <ProductForm
              product={this.state.selectedProduct}
              onSuccess={this.fetchProducts}
            />
          </div>
        </div>
        <ProductList
          onSelectProduct={this.fetchProductDetails}
          onDeleteSuccess={this.fetchProducts}
          products={this.state.products}
        />
      </div>
    );
  }
}
