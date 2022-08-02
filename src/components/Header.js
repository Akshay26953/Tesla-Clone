import React, { useState } from "react";
import "./Header.scss";
import "./Section.css";
import Logo from "./images/logo.svg";
import { Link } from "react-router-dom";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className="header">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Tesla Logo" />
          </Link>
        </div>
        <div className="nav">
          <ul>
            <li>
              <Link to="/">Model S</Link>
            </li>
            <li>
              <Link to="/">Model 3</Link>
            </li>
            <li>
              <Link to="/">Model X</Link>
            </li>
            <li>
              <Link to="/">Model Y</Link>
            </li>
            <li>
              <Link to="/">Solar Roof</Link>
            </li>
            <li>
              <Link to="/">Solar Panels</Link>
            </li>
          </ul>
        </div>
        <div className="menu">
          <ul>
            <li>
              <Link to="/" className="menuHide">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/" className="menuHide" >
                Account
              </Link>
            </li>
            <li>
              <button
                onClick={() => {
                  setShowMenu(true);
                }}
              >
                Menu
              </button>
            </li>
          </ul>
        </div>
        <div
          className="backdrop"
          style={{
            display: `${!showMenu ? "none" : "block"}`,
          }}
        ></div>
        <div
          className="sm-menu"
          style={{
            transform: `${showMenu ? "translateX(0)" : "translateX(100%)"}`,
            transitionProperty: `transform`,
            transitionDuration: "0.25s",
            transitionTimingFunction: "ease-in",
          }}
        >
          <div className="close">
            <button
              onClick={() => {
                setShowMenu(false);
              }}
            >
              <i className="fa-solid fa-xmark fa-xl" style={{ color: "#393c41" }}></i>
            </button>
          </div>
          <div className="menu1">
            <ul>
              <li className="smMenuHide">
                <Link to="/">Model S</Link>
              </li>
              <li className="smMenuHide">
                <Link to="/">Model 3</Link>
              </li>
              <li className="smMenuHide">
                <Link to="/">Model X</Link>
              </li>
              <li className="smMenuHide">
                <Link to="/">Model Y</Link>
              </li>
              <li className="smMenuHide">
                <Link to="/">Solar Roof</Link>
              </li>
              <li className="smMenuHide">
                <Link to="/">Solar Panels</Link>
              </li>
              <li>
                <Link to="/">Existing Inventory</Link>
              </li>
              <li>
                <Link to="/">Used Inventory</Link>
              </li>
              <li>
                <Link to="/">Trade-In</Link>
              </li>
              <li>
                <Link to="/">Test Drive</Link>
              </li>
              <li>
                <Link to="/">Insurance</Link>
              </li>
              <li>
                <Link to="/">Powerwall</Link>
              </li>
              <li>
                <Link to="/">Commercial Energy</Link>
              </li>
              <li>
                <Link to="/">Utilites</Link>
              </li>
              <li>
                <Link to="/">Charging</Link>
              </li>
              <li>
                <Link to="/">Find Us</Link>
              </li>
              <li>
                <Link to="/">Support</Link>
              </li>
              <li>
                <Link to="/">Investor Relations</Link>
              </li>
              <li>
                <Link to="/">Shop</Link>
              </li>
              <li>
                <Link to="/">Account</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
