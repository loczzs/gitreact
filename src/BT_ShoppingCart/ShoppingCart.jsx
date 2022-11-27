import React from "react";
import ProductDetail from "./ProductDetail";
import ProductList from "./ProductList";
import data from "./data.json";
import Cart from "./Cart";

class ShoppingCart extends React.Component {
  constructor(props) {
    // viết tắt rconst
    super(props);

    this.state = {
      selectedProduct: null,
      isOpen: false,
      carts: [],
    };

    
  }
  //B1 định nghĩa 1 hàm nhận dữ liệu từ component ProductList
  handleSelect = (product) => {
    console.log(product);
    //  product hiện tại chỉ có thể truy cập được bên trong hàm handleSelect, để có thể truyền giá trị product này xuống component ProductDetails ta cần gán giá trị của nó cho state selectedProduct
    this.setState({ selectedProduct: product });
  };
  // Định nghĩa hàm handleAddToCart để nhận dữ liệu product muốn thêm vào giỏ hàng từ component ProductList
  handleAddToCart = (product) => {
    console.log(product);
    // thêm sản phẩm vào giỏ hàng

    //B1: kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng hay chưa (state carts)
    // nếu index = -1 => sản phẩm chưa tồn tại trong giở hàng

    const index = this.state.carts.findIndex(
      (item) => item.id === product.id
    );
    if (index === -1) {
      // Khi thay đổi state là array/object, ta cần tạo ra một array/object mới sau đó mới gọi setState và gán lại cho state
      // Ví dụ ta không nên làm như thế này: this.state.push({...product, quantity: 1})
      const carts = [...this.state.carts, { ...product, quantity: 1 }];
      this.setState({ carts });
    } else {
      const carts = [...this.state.carts];
      carts[index].quantity += 1;
      this.setState({ carts });
    }
  };
  // Định nghĩa hàm handleRemoveProductFromCart để nhận dữ liệu là productId, và dùng giá trị productId để xoá sản phẩm khỏi giỏ hàng
  handleRemoveProductFromCart = (productId) => {
    // Xoá sản phẩm có id trùng với productId khỏi giỏ hàng
    const carts = this.state.carts.filter((item) => item.id !== productId);
    // trả ra mảng mà trong đó các itemId khác với productIs
    // vd productId = 2; carts = [{id:1},{id:2},{id:3}]
    // trả ra mảng carts = [{id:1}, {id:3}]
    this.setState({ carts });
  };

  // Định nghĩa hàm handleChangeQuantity để nhận dữ liệu là productId và quantity
  //, và dùng productId để tìm sản phẩm muốn thay đổi số lượng
  //, và dùng quantity để tăng hoặc giảm số lượng
  handleChangeQuantity = (productId, quantity) => {
    // productId: 2
    // carts: [{id: 1, quantity: 3}, {id: 2, quantity: 5}, {id: 3, quantity: 2}]
    const carts = this.state.carts.map((item) => {
      if (item.id === productId) {
        return { ...item, quantity: item.quantity + quantity };
      }

      return item;
    });

    this.setState({ carts });
  };

  // 2 hàm dùng để thay trạng thái state isOpen để quyết định xem modal Cart có được hiển thị hay không

  handleOpen = () => {
    this.setState({ isOpen: true });
  };
  handleClose = () => {
    this.setState({ isOpen: false });
  };
  render() {
    const { selectedProduct, isOpen, carts } = this.state;
    return (
      <div className="container">
        {/* b2: truyền hàm handleSelect xuống component ProductList
        thông qua prop onSelect */}
        <h1 className='"text-center text-primary'>Phone shop</h1>
        <div className="text-center text-primary d-flex justify-content-end">
          <button className="btn btn-success" onClick={this.handleOpen}>
            Cart
          </button>
        </div>
        <ProductList
          products={data}
          onSelect={this.handleSelect}
          onAddtoCart={this.handleAddToCart}
        />

        <ProductDetail product={this.state.selectedProduct} />

        <Cart
          onRemove={this.handleRemoveProductFromCart}
          carts={carts}
          isOpen={isOpen}
          onClose={this.handleClose}
          onChangeQuantity={this.handleChangeQuantity}
        />
        {/* dùng es6 tương đương isOpen={this.state.isOpen} xem dòng dưới render */}
      </div>
    );
  }
}

export default ShoppingCart;
