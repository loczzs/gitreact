// import React from "react";
// // HTMl: <button onclick = "handelClick()"> CLick <button>
// const Event = () => {
//   // hàm được gọi tới khi user click vào button Click
//   const handelClick = (event) => {
//     console.log(event.target);
//     alert("clickked");
//   };
//   // hàm đc gọi khi user click vào button showmessage và truyền vào 1 tham số
//   const showMessage = (message) => {
//     alert(message);
//   };

//   // hàm được gọi khi user thay đổi giá trị của input
//   const handleChange = (event) =>{
//     console.log(event.target.value)
//   }
//   const handleKeyDown = (event) =>{
//     // kiểm tra nếu không phải Enter thì không làm gì hết
//     if (event.key !== "Enter"){
//         return;
//     }
//     // Đây là kí tự enter
//     console.log(event.target.value)
//   }
//   return (
//     <div>
//       <h1>Event</h1>
//       {/* // ko có dấu () khi gọi hàm mà chỉ truyền vào dạng callback` */}
//       <button onClick={handelClick}>click</button>

//       <br />
//       <br />
//       {/* trường hợp muốn truyền tham số vào cho hàm xử lý sự kiện, ta sẽ gọi ra 1 hàm ẩn danh và bên trong hàm ẩn danh đó gọi 
//       ra 1 hàm ẩn danh và bên trong hàm ẩn danh ta sẽ gọi tới hàm xử lý sự kiện và truyền vào tham số
//        */}

//       <button
//         onClick={() => {
//           showMessage("hello Cybersoft");
//         }}
//       >
//         Show Message
//       </button>

//       <br />
//       <br />
//       {/* lắng mghe sự kiện khi user thay đổi giá trị của inout */}
//       <input
//         type="text"
//         placeholder="Input your name"
//         // onChange={handleChange} 
//         onKeyDown={handleKeyDown} // nhấn nút xuống sẽ kích hoạt sự kiện
//       />
//     </div>
//   );
// };
import React, { Component } from 'react'

 class Event extends Component {
    constructor(){
        super()
        this.showMessage = this.showMessage.bind(this)
    }
     message = "Cybersoft"
    // phương thức xử lý sự kiện của button Click
    handleClick = (event) =>{
        alert("click")
    }
    // showMessage = ()=>{
    //     alert(this.message)
    // } c1*
    // khi một hàm xử lý sự kiện sử dụng this bên trong hàm,ta cần lưu ý:
    // c1*:viết hàm theo arrow function nếu là c1 thì dễ hơn và ko cần viết contructor
    //c2* : cần bind this của class Event vào bên trong hàm ShowMessage ở contructor(dòng 63)
    showMessage  (){ // c2* cần dòng contructor c1* ko cần
        alert(this.message)
    }
  render() {
    return (
      <div>
        <h1>Event</h1>
        <button onClick={this.handleClick}>Click</button>
        <br />
        <br />
        <button onClick={this.showMessage} >Show Message</button>
      </div>
    )
  }
}


export default Event;
