import React from "react";

function ProductItem({ element, count, addCart }) {
  return (
    <>
      <div>
        <div className="element">
          <img src={element.image} alt="" />
          <div className="bu">
            <p id="name"> {element.title} </p>
            <p id="price">{element.price}</p>
          </div>
          <div className="buttonDouble">
            <p className="giam"> Interest </p>
            <span> {count}</span>
            <p className="add" onClick={() => addCart(element)}>
              {" "}
              Add
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductItem;
