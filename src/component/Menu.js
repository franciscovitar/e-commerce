import React from "react";
import Close from "../images/icon-close.svg";

function Menu() {
  return (
    <div
      className="menu-container offcanvas offcanvas-start"
      tabindex="-1"
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
    >
      <button type="button" data-bs-dismiss="offcanvas" aria-label="Close">
        <img src={Close}></img>
      </button>
      <div>
        <p>Collections</p>
        <p>Men</p>
        <p>Women</p>
        <p>About</p>
        <p>Contact</p>
      </div>
    </div>
  );
}

export default Menu;
