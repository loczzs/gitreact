import React from "react";

const ProductList = ({ products, onSelect , onAddtoCart }) => {
  const handleSelect = (product) => {
    // Đây là product muốn xem chi tiết => ta cần truyền dữ liệu của product này lên component ShoppingCart
    // console.log(product);
    // B3: Gọi tới prop onSelect và truyền product vào
    onSelect(product);
  };
  const handleAddToCart = (product)=>{
    // product muốn thêm vào giỏ hàng
    // gọi tới prop onAddtoCart và truyền vào param là product để
    // dưa dữ liệu lên component Shopping Cart.
    onAddtoCart(product) 
   }
  return (
    <div className="row">
      {products.map((product) => {
        return (
          <div key={product.id} className="col-sm-4">
            <div className="card">
              <div className="card-header">phone</div>
              <div className="card-body">
                <img
                  width={"100%"}
                  height={"300px"}
                  src={product.image}
                  alt=""
                />
                <h3 className="card-title">{product.name}</h3>
                <p className='"card-text'> {product.price}</p>
                <button
                  className="btn btn-dark"
                  onClick={() => handleSelect(product)}
                >
                  Details
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => handleAddToCart(product)}
                >
                  add to cart
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
