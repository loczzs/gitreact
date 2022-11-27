import React, { Component } from 'react'
const products = [
    {id:1,name:"Iphone 13 Pro Max",price:30000000},
    {id:2,name:"Samsung Galaxy S22 Ultra",price:28000000},
    {id:3,name:"Xiaomi Mi 12",price:20000000},
]

export default class Map extends Component {
  render() {
    return (
      <div>
        <h1>Map</h1>
        {products.map((product)=>{
            // return về jsx
            // khi dùng map để return về jsx, bắt buộc phải có thuộc tính key cho thẻ cha
            // và giá trị của key ko đc trùng lặp
            // khi dùng map để return về jsx,bắt buộc phải có thuộc tính key cho thẻ cha, và giá trị của key 
            // không được trùng lặp
            return <div key={product.id}>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
            </div>
        })}
      </div>
    )
  }
}
