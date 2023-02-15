import React from "react";
import Shoes from "../images/image-product-1-thumbnail.jpg";
import Trash from "../images/icon-delete.svg";

function Carts({ trash, num }) {
  const multiplication = (a) => {
    return num * a;
  };

  return (
    <div className="carts-container">
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h2 class="modal-title fs-5 fw-bold " id="exampleModalLabel">
                Cart
              </h2>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            {/* Cart Empty */}
            <div
              style={{ display: num === 0 ? "block" : "none" }}
              className="modal-body"
            >
              Your cart is empty
            </div>
            {/* Cart Full*/}
            <div
              style={{ display: num > 0 ? "block" : "none" }}
              className="modal-body-full"
            >
              <div className="modal-contents d-flex">
                <img src={Shoes} alt="" />
                <div>
                  <p>Fall Limited Edition Sneakers</p>
                  <p>
                    $125.00 x {num}
                    <span className="fw-bold"> ${multiplication(125)}.00</span>
                  </p>
                </div>
                <img type="button" src={Trash} alt="" onClick={trash} />
              </div>
              <button data-bs-dismiss="modal" aria-label="Close" type="">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carts;
