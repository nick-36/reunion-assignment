import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faBath, faBed, faSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Card.scss";
const Card = ({ property }) => {
  return (
    <div className="card">
      <div className="card-img-container">
        <img src={property.image} alt="property-img" className="prop-img" />
      </div>
      <div className="card-prop-info">
        <div className="price">
          <p className="price-box">
            <b className="price-text">${property.price}</b>
            <span className="price-duration">/month</span>
          </p>
          <div className="price-icon-box">
            <FontAwesomeIcon icon={faHeart} className="icon-like" />
          </div>
        </div>
        <div className="details">
          <h1 className="prop-title">{property.type}</h1>
          <p className="prop-address">{property.address.location}</p>
        </div>
        <div className="line"></div>
        <div className="features-container">
          <div className="features">
            <FontAwesomeIcon icon={faBed} className="features-icon" />
            <span className="features-text">{property.beds} Beds</span>
          </div>
          <div className="features">
            <FontAwesomeIcon icon={faBath} className="features-icon" />
            <span className="features-text">
              {property.bathrooms} Bathrooms
            </span>
          </div>
          <div className="features">
            <FontAwesomeIcon icon={faSquare} className="features-icon" />
            <span className="features-text">6*7.5m2</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
