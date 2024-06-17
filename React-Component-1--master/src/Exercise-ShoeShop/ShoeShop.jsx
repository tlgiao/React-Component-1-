import React, { useState } from "react";
import shoeShop from "./shoeData.json";
import ProductList from "./ProductList";
import Modal from "./Modal";

const ShoeShop = () => {
  const [cart, setCart] = useState([]);

  const handleClickAddToCart = (value) => {
    const newCart = [...cart];
    const index = newCart.findIndex((item) => {
      return item.id === value.id;
    });
    if (index !== -1) {
      return newCart;
    } else if (index === -1) {
      newCart.push(value);
    }
    setCart(newCart);
  };
  return (
    <div className="container">
      <h1 className="text-center text-danger">Shoe Shop</h1>
      <div className="cart" data-bs-toggle="modal" data-bs-target="#modalId">
        <p className="text-end" style={{ cursor: "pointer" }}>
          <i className="fa-solid fa-cart-shopping"></i>({cart.length})
        </p>
        <Modal cart={cart} />
      </div>

      <ProductList
        shoeList={shoeShop}
        handleClickAddToCart={handleClickAddToCart}
      />
    </div>
  );
};

export default ShoeShop;
