/* eslint-disable object-curly-newline */
/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import './Rocket.css';

const Rocket = (props) => {
  const { name, description, image, reserved } = props;

  return (
    <>
      <li className="row">
        <div className="image-section">
          <img src={image} alt={name} />
        </div>
        <div className="text-section">
          <h2 className="RocketTitle">{name}</h2>
          <p className="RocketTexts">
            {reserved && <span className="isReserved">Reserved</span>}
            {description}
          </p>
          <button type="button" className="reserveButton">
            Reserve Rocket
          </button>
        </div>
      </li>
    </>
  );
};

Rocket.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
}.isRequired;

export default Rocket;
