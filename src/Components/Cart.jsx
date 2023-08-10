import React from "react";

function Cart({ cart, closeModal,handleChange,handleDelete }) {
  return (
    <div className="cart">
      <div className="cartLogo" onClick={closeModal}>
        <img width={"50px"} src="/shopping-cart.png" alt="" />
        <p> {cart.length} </p>
      </div>

      <div className="cartParent">
        {cart.map((e, i) => (
          <div className="cartItem" key={i}>
            <div className="cartImg">
              <img width={"180px"} height={"100px"} src={e.image} alt="" />
            </div>
            <div className="cartContent">
              <p className="title">{e.name}</p>
              <p className="price" style={{maxWidth:"70px"}}> {e.price}</p>
              <div className="congTruNum">
                <p className="tru" onClick={() => handleChange(e, -1)}>
                  {" "}
                  -{" "}
                </p>
                <span> {e.quantity}</span>
                <p className="cong" onClick={() => handleChange(e, +1)}>
                  {" "}
                  +
                </p>
              </div>
              <p className="delete" onClick={()=>handleDelete(e)}> Xóa</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
