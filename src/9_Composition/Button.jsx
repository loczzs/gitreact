import React from "react";
import cn from 'classnames'
// children: là một prop đặc biệt của react, nó đại diện cho cái nội dung nằm ở giữ 2 thẻ mở/đóng của component
// <Button variant="success">
//    <span>Success</span>
// </Button>
// children: <span>Success</span> xem bên file Composition dòng thứ 8
// Dùng thư viện classnames để nối các class lại với nhau (có thể kết hợp thêm class theo điều kiện)
// const classes = cn(`btn btn-${variant}`, className, {
//   foo: 1 === 1,
//   bar: 5 > 10,
// });
const Button = ({ variant, children, className ="", disabled = false,loading = false }) => {
  const classes = cn(`btn btn-${variant}` , className)
  
  return (
    <button className={classes} disabled={disabled || loading}>
    {children}
    {loading && (
      <div
        class="spinner-border text-primary spinner-border-sm ms-2"
        role="status"
      >
        <span class="visually-hidden">Loading...</span>
      </div>
    )}
  </button>
);
};

  

export default Button;
