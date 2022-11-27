// tại thời điểm học Stat,ta chỉ có thể sử dụng ở class component
// snippet tạo class component là rcc

import React, { Component } from 'react'

export default class State extends Component {
    constructor(){
        super()
        // this.state là một object đặc biệt của class component
        // khi giá trị của state bị thay đổi, component sẽ tự động chạy lại hàm render
        this.state = {
            count:0,
            message:""
        }
        
    }
    increase = ()=>{
            
        // ta ko thể thay đổi theo dạng this.state.count +=1
        // khi thay đổi giá trị của state ta cần dùng hàm setState
         console.log("count trước khi setState:" ,this.state.count)
        this.setState({count: this.state.count +1},()=>{
          //callback này chỉ đc chạy khi quá trình thay đổi state hoàn tất
          console.log("count sau khi setState:" ,this.state.count)
        })
        // quá trình thay đổi state là bất đồng => ko thể lấy giá trị mói của state sau khi thay đổi ở đây
        // console.log("count sau khi setState:" ,this.state.count)
    }
    decrease =()=>{ //********** */
      // this.setState({count: this.state.count -1})
      // this.setState({count: this.state.count -1})
      // khi cập nhật state ,à cần dùng giá trị hiện tại của state để tính toán thì ta nên viết hàm setState nhận vào callback
      this.setState((state) =>({count:state.count -1})) //xem arrow function viết tắt 
      this.setState((state) =>({count:state.count -1}))
      
    }
    getMessage = ()=>{
      const message = prompt("input your message")
      // setState message
      this.setState({message}) // khi key và value trùng nhau dùng tính chất của es6
    }
  render() {
    return (
      <div>
        <h1>State</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increase}>Increase</button>
        <button onClick={this.decrease}>crease</button>

      <br />
      <br />

      <p>Message:{this.state.message}</p>
      <button onClick={this.getMessage}>Get Message</button>




      </div>
    )
  }
}
