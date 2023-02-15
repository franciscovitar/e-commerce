import React from "react";
import Sneakers from "../images/logo.svg";
import menu from "../images/icon-menu.svg";
import cart from "../images/icon-cart.svg";
import Icon from "../images/image-avatar.png";
import Menu from "./Menu";

function Navbar({ num }) {
  return (
    <nav className="navbar_container">
      <div className="left">
        <img
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          src={menu}
          alt=""
        />
        <Menu className="d-none"></Menu>
        <img src={Sneakers} alt="hello" />
        <div className="center">
          <ul>
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

      <div className="right">
        <button
          type="button"
          class="position-relative"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <img src={cart} alt="" />
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {num}
          </span>
        </button>

        <img className="" src={Icon} alt="" />
      </div>
    </nav>
  );
}

export default Navbar;
