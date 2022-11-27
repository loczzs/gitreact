import React from "react";
import Productitem from "./Productitem";


const ProductList = ({ products }) => {
  return (
    <div className="row">
      {products.map((product) => {
        return (
          <div key={product.id} className="col-sm-4">
            <Productitem product={product}/>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;