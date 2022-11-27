import React from "react";
import Callback from "./Callback";
import Product from "./Product";
import Welcome from "./Welcome";
const products = [
  { id: 1, name: "Iphone 13 Pro Max", price: 30000000 },
  { id: 2, name: "Samsung Galaxy S22 Ultra", price: 28000000 },
  { id: 3, name: "Xiaomi Mi 12", price: 20000000 },
];

const Props = () => {
  // Hàm này sẽ được gọi khi component Callback gọi tới prop onClick và truyền kèm params
  const handleClick =(name) =>{
    alert(`hello ${name}`)
  }
  return (
    <div>
    Props
      <Welcome name="Yasuo" email="loczzs@gmail.com" />
      <Welcome name="Yone" email="yone@gmail.com" />
      <br />
      <br />
      <div className="row">
        {products.map((product) => {
          return (
            <div key={product.id} className="col-sm-4">
              <Product productz={product} />
            </div>
          );
        })}
      </div>
      <br />
      <br />
        {/* props là function */}
      <Callback onClick={handleClick}/>
      {/* <button onClick={handleClick}>Click</button> */}
    </div>
  );
};

export default Props;
