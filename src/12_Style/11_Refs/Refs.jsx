// import React, { Component } from 'react'

// export default class Refs extends Component {
//     constructor(props) {
//       super(props)
//      // Cú pháp tạo ref
//     this.inputRef = React.createRef();
     
//     }
//     handleClick = () =>{
//         console.log(this.inputRef.current)
//         console.log(this.inputRef.current.value)
//     }
//     componentDidMount() {
//             this.inputRef.current.focus();
//             // tự động focus vào input
//           }
//   render() {
//     return (
//       <div>
//       <h1>reft</h1>

//         <input type="text" ref = {this.inputRef} />
//         <button onClick={this.handleClick}>Click</button>


//       </div>
//     )
//   }
// }
import React, { useRef, useEffect } from "react";

const Refs = () => {
  const inputRef = useRef();

  const handleClick = () => {
    console.log(inputRef.current);
    console.log(inputRef.current.value);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h1>Refs</h1>

      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default Refs; 
