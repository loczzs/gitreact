import React from 'react'
// dùng nhận dữ liệu từ prop và render ra giao diện
// // function component Component nhận được 1 tham số là một object chứa dữ liệu được truyền từ component cha
// // const Welcome = (props) => {
// //     console.log(props)
// //   return (
// //    <div> <p>Name: {props.name} - Email: {props.email}</p></div>
// //   )
// // }

// export default Welcome
// class component mặc định có một thuộc tính là props chứa dữ liệu được truyền từ component cha
class Welcome extends React.Component {
    render() {
      return (
        <div>
          <p>
            Name: {this.props.name} - Email: {this.props.email}
          </p>
        </div>
      );
    }
  }
  // giá trị mặc định khi không có tham số truyền vào
  Welcome.defaultProps = {
    name: "bc27",
    email: "bc27@gmail.com",
  };
  
  export default Welcome;