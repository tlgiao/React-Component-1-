import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ shoeList, handleClickAddToCart }) => {
  return (
    <div className="row row-gap-4">
      {shoeList.map((shoe) => {
        return (
          <div className="col-4" key={shoe.id}>
            <ProductItem
              key={shoe.id}
              shoe={shoe}
              handleClickAddToCart={handleClickAddToCart}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
