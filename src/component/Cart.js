import React from "react";
import cart from "../images/icon-cart.svg";
import minus from "../images/icon-minus.svg";
import more from "../images/icon-plus.svg";

function Cart({ less, number, mas, sendCart }) {
  return (
    <div className="cart-container">
      <div className="Numbers">
        <div className="Numbers-2">
          <p>$125.00</p>
          <span>50%</span>
        </div>

        <p>$250.00</p>
      </div>
      <form>
        <div>
          <button type="#" onClick={less}>
            <img src={minus} alt="" />
          </button>
          <input type="text" name="" value={number} />
          <button onClick={mas}>
            <img src={more} alt="" />
          </button>
        </div>
        <button onClick={sendCart}>
          <img alt="" src={cart}></img>Add to cart
        </button>
      </form>
    </div>
  );
}

export default Cart;
