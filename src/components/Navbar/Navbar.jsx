import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import companyLogo from "../../assets/logo.png";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav className="nav">
        <div className="nav-left">
          <ul className="nav-list-items">
            <li className="list-item">
              <a href="/" className="company-logo">
                <img src={companyLogo} alt="" className="logo-img" />
                <span>Estatery</span>
              </a>
            </li>
            <li className="list-item">
              <a href="/" className="active">
                Rent
              </a>
            </li>
            <li className="list-item">
              <a href="/">Buy</a>
            </li>
            <li className="list-item">
              <a href="/">Sell</a>
            </li>
            <li className="list-item">
              <a href="/" className="item-explore">
                <span> ManageProperty</span>
                <FontAwesomeIcon icon={faChevronDown} />
              </a>
            </li>
            <li className="list-item">
              <a href="/" className="item-explore">
                <span>Resources</span>
                <FontAwesomeIcon icon={faChevronDown} />
              </a>
            </li>
          </ul>
        </div>
        <div className="nav-right">
          <div className="nav-cta-box">
            <button className="btn btn-login">Login</button>
            <button className="btn btn-signup">Sign up</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
