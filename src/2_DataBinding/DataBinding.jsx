// import React from "react";

// const DataBinding = () => {
//   const message = "Hello Cybersoft";
//   const username = "Dan Nguyen";
//   const getMessage = () => {
//     return "Hello BC27";
//   };

//   // <h1>{expression}</h1>: Khi muốn truyền vào các biến, hàm, biểu thức javascript bên trong jsx ta sẽ đưa vào bên trong cặp ngoặc nhọn {}
//   return (
//     <div>
//       <h1>{message}</h1>

//       <h1>1 + 1 = {1 + 1}</h1>

//       <h1>{getMessage()}</h1>

//       <input value={username} />
//     </div>
//   );
// };

// export default DataBinding;

// class
// cú pháp viết tắt rcc

import React, { Component } from 'react'

 class DataBinding extends Component {
  username = "locle"
  email = "loczzs"
  getInfo = ()=>{
    // return `Name: ${this.username} - Email: ${this.email}`
    return <span>Name {this.username} - Email : {this.email}</span>
  }
  render() {
    const message = "helloBC27"
    return (
      <div>
        <h1>{message}</h1>
        <h1>{this.username}</h1>
        <h1>{this.getInfo()}</h1>
      </div>
    )
  }
}
export default DataBinding

