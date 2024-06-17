import React from "react";

const ProductItem = ({ shoe, handleClickAddToCart }) => {
  const handleAddToCart = (shoe) => {
    handleClickAddToCart(shoe);
  };

  return (
    <div className="card">
      <img className="card-img-top" src={shoe.image} alt="Shoe" />
      <div className="card-body">
        <h4 className="card-title">{shoe.name}</h4>
        <p className="card-text">{shoe.price}</p>
        <button
          className="btn btn-danger"
          onClick={() => handleAddToCart(shoe)}
        >
          Show Detail
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
