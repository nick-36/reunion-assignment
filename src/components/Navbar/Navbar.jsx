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
              <span className="company-logo">
                <img src={companyLogo} alt="" className="logo-img" />
                <span>Estatery</span>
              </span>
            </li>
            <li className="list-item">
              <span className="active">Rent</span>
            </li>
            <li className="list-item">
              <span>Buy</span>
            </li>
            <li className="list-item">
              <span>Sell</span>
            </li>
            <li className="list-item">
              <span className="item-explore">
                <span> ManageProperty</span>
                <FontAwesomeIcon icon={faChevronDown} />
              </span>
            </li>
            <li className="list-item">
              <span className="item-explore">
                <span>Resources</span>
                <FontAwesomeIcon icon={faChevronDown} />
              </span>
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
