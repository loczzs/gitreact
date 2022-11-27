// khái niệm lifecycle chỉ tồn tại ở class component
import React, { Component } from "react";
import axios from "axios";
/**
 * MOUNTING: component được khởi tạo
 * - constructor: thường dùng để khởi tạo state, bind các method
 * - render: dùng để return về react element (jsx) là giao diện sẽ được hiển thị
 * - componentDidMount:
 *   + Dùng để setState
 *   + Dùng để xử lý side effect: callAPI, setTimeout, setInterval,...
 *   + Dùng để tương tác với DOM
 *
 * UPDATING: component nhận được props mới hoặc gọi setState
 * - render
 * - componentDidUpdate
 *   + Dùng để setState
 *   + Dùng để xử lý 1 logic nào đó khi state hoặc props thay đổi
 *
 * UNMOUNTING: trước khi component bị huỷ bỏ
 * - componentWillUnmount
 *   + Dùng để dọn dẹp dữ liệu
 *   + Trong trường hợp ở componentDidMount có sử dụng setTimeout/setInterval ta cần clearTimeout/ clearInterval
 */

export default class Lifecycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // users: dùng để chứa data từ API trả về
      users: [],
      // userId: dùng để lưu trữ id của user đang được chọn
      userId: "",
      // selectedUser: dùng để lưu trữ data user đang được chọn từ API
      selectedUser: null,
    };

    console.log("contructor run");
  }

  fetchUsers = async () => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      // Call API thành công => setState cho users bằng data nhận được từ API
      this.setState({ users: data });
    } catch (error) {
      console.log(error);
    }
  };

  fetchUserDetails = async () => {
    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${this.state.userId}`
      );
      // Call API thành công => setState cho selectedUser bằng data từ API
      this.setState({ selectedUser: data });
    } catch (error) {
      console.log(error);
    }
  };

  handleSelect = (userId) => {
    this.setState({ userId });
  };

  componentDidMount() {
    console.log("componentDidMount run");

    this.fetchUsers();
 this.timer = setTimeout(()=>{
      alert('Bigshow')
    },5000)

  
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate run");

    // Kiểm tra xem state userId có thay đổi hay không, để gọi API get user details
    // componentDidUpdate cung cấp 2 tham số là giá trị trước khi thay đổi của props và state
    // Ta sẽ dùng 2 giá trị để so sánh vs state và props hiện tại để biết được giá trị nào đã thay đổi để thực hiện đúng logic của mình
    if (prevState.userId !== this.state.userId) {
      // prevState là state trước đó this.state.userId là state hiện tại
      console.log("state userId change");
      this.fetchUserDetails();
    }
  }
  componentWillUnmount(){
    console.log("componentWillumount run");
    clearTimeout(this.timer)
  }

  render() {
    console.log(" render runada");
    const{user,selectedUser} = this.state
    return <div>
        <h1>lifebycicle</h1>
       {this.state.users.map(user =>{
         return(
            <p key={user.id} className = "mb-2">
                Name:{user.name} - Email: {user.email}
                <button onClick={()=>this.handleSelect(user.id)}>Details</button>
            </p>
         )
       })}
       <h1>Chi tiết người dùng</h1>
        {selectedUser && (
          <div>
            <h3>{selectedUser.name}</h3>
            <p>Email: {selectedUser.email}</p>
            <p>Phone: {selectedUser.phone}</p>
            <p>Website: {selectedUser.website}</p>
          </div>
        )}
    </div>;

  }
}
