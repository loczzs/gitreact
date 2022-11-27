import React, { Component } from 'react'
    
export default class ConditionalRendering extends Component {
constructor(){
    super()
    this.state = {
        isActive:true,
        isLoggeIn: true,
        undereadMessages:["A","B","C"]
    }
}
handelToggle = ()=>{
    this.setState(
        (state) => ({isActive: !state.isActive})
    )
}

  render() {
    // return (
    //   <div>
    //     <h1>ConditionalRendering</h1>
    //     {/* thẻ h3 chỉ được hiển thị khi state isActive là true */}
    //     {/* sử dụng ternary operator để hiển thị giao diện theo điều kiện */}
    //     {this.state.isActive ? <h3>Hello Cybersoft</h3> : null}
    //     <button onClick={this.handelToggle}>Toggle Active</button>
    //   </div>
    // )
    // sử dụng if/else để hiển thị giao diện theo điều kiện
    if(this.state.isLoggeIn){
        return(
            <div>
                <h1>welcome back !!!</h1>
                {/* dùng toán tử && để chỉ hiển thị giao diện khi chỉ muốn điều kiệu là true */}
                
                {/* {this.state.isActive && <h3>Hello Cybersoft</h3>} */}
                
                {/* nếu mảng rỗng thì hiện ra câu đầu còn mảng có phần tử thì hiện ra câu sau  */}

                {/* dấu !! nó là phủ định của phủ định nên giá trị ko đổi để ép kiểu về boolean là true hoặc false 
                vì chỉ có false thì mới bỏ qua ko render nếu ko có !! thì sẽ render ra số 0 trong trường hợp undereadMessage là false */}
                
                {/* cách viết thứ 2 của câu dưới thay cho câu có dấu !! là this.state.undereadMessages.length >0 nó sẽ trả ra true hoặc false */}
              {!!this.state.undereadMessages.length && <p>  
                    <p> you have {this.state.undereadMessages.length} unread message</p>
                </p>}
                <button onClick={()=> this.setState({undereadMessages:[]})}> clear</button>
                <button onClick={( )=> this.setState({isLoggeIn:false})}>logout</button>
            </div>
        )
    }
    return(
        <div>
            <h1>Please login</h1>
            <button onClick={()=> this.setState({isLoggeIn:true})}>login</button>
        </div>
    )
  }
}
