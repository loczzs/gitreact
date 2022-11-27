import React from "react";
// props:
// -isOpen(boolen): dùn để quyết định modal giỏ hàng có đc hiển thị hay không
// - onClose (function): dùng để tắt modal
const Cart = ({
  isOpen = false,
  onClose,
  carts,
  onRemove,
  onChangeQuantity,
}) => {
  const handleRemoveProduct = (productId) => {
    // productId : id của sản phẩm muốn xóa khỏi giỏ hàng
    // Props là read-only: chỉ dùng để đọc không được thay đổi giá trị của props =>
    // ta không thể thay đổi giá trị của prop carts tại component này

    // Ta cần đưa productId lên component ShoppingCart để thay đổi giá trị state carts
    onRemove(productId);
  };
  const handleChangeQuantity = (productId, quantity) => {
    // productId: id của sản phẩm muốn thay đổi số lượng
    // quantity(-1 hoặc 1): số lượng muốn thay đổi
    onChangeQuantity(productId, quantity);
  };

  return (
    <>
      <div
        style={{ display: isOpen ? "block" : "none" }}
        className="modal fade show"
        tabindex="-1"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Product Cart</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={onClose}
              ></button>
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total Price</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {carts.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>
                          <img
                            src={item.image}
                            alt={item.name}
                            width="50px"
                            height="50px"
                          />
                        </td>
                        <td>{item.price}</td>
                        <td>
                          <button
                            onClick={() => handleChangeQuantity(item.id, -1)}
                            disabled={item.quantity === 1}
                            className="btn btn-dark"
                          >
                            -
                          </button>
                          <span className="mx-2">{item.quantity}</span>
                          <button
                            onClick={() => handleChangeQuantity(item.id, 1)}
                            className="btn btn-dark"
                          >
                            +
                          </button>
                        </td>
                        <td>{item.price * item.quantity}</td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => handleRemoveProduct(item.id)}
                          >
                            X
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* lớp mờ */}
      <div
        style={{ display: isOpen ? "block" : "none" }}
        className="modal-backdrop fade show"
      ></div>
      {/* {isOpen && <div className="modal-backdrop fade show"></div>} */}
    </>
  );
};

export default Cart;
