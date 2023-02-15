import React from "react";

import Shoes1 from "../images/image-product-1.jpg";
import Shoes2 from "../images/image-product-2.jpg";
import Shoes3 from "../images/image-product-3.jpg";
import Shoes4 from "../images/image-product-4.jpg";

import Shoes1Thumb from "../images/image-product-1-thumbnail.jpg";
import Shoes2Thumb from "../images/image-product-2-thumbnail.jpg";
import Shoes3Thumb from "../images/image-product-3-thumbnail.jpg";
import Shoes4Thumb from "../images/image-product-4-thumbnail.jpg";

function Modal() {
  return (
    <div className="container-modal ">
      <div
        class="modal fade"
        id="modalImage"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-Body">
              {/* Carrousel */}

              <div
                id="carouselExampleIndicators2"
                class="carousel slide main-container"
                data-bs-ride="true"
              >
                {/* IMAGE */}

                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src={Shoes1} class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src={Shoes2} class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src={Shoes3} class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src={Shoes4} class="d-block w-100" alt="..." />
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators2"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators2"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>

                {/* indicators */}

                <div className="indicators-carousel w-75 m-auto">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators2"
                    data-bs-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  >
                    <img src={Shoes1Thumb} alt="" />
                  </button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators2"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  >
                    <img src={Shoes2Thumb} alt="" />
                  </button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators2"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  >
                    <img src={Shoes3Thumb} alt="" />
                  </button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators2"
                    data-bs-slide-to="3"
                    aria-label="Slide 4"
                  >
                    <img src={Shoes4Thumb} alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
