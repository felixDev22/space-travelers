/* eslint-disable import/extensions */
import React from 'react';
import rocket1 from '../../assets/images/rocket1.jpeg';
import './Rocket.css';

const Rockect = () => (
  <div className="rocket-container">
    <div className="row">
      <div className="image-section">
        <img src={rocket1} alt="rocket" className="rocket-pic" />
      </div>
      <div className="text-section">
        <h2>Falcon 1</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in
        </p>
        <button type="button" className="btn">
          Reserve Rocket
        </button>
      </div>
    </div>
    <div className="row">
      <div className="image-section">
        <img src={rocket1} alt="rocket" className="rocket-pic" />
      </div>
      <div className="text-section">
        <h2>Falcon 1</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in
        </p>
        <button type="button" className="btn2">
          Cancel Reservation
        </button>
      </div>
    </div>
    <div className="row">
      <div className="image-section">
        <img src={rocket1} alt="rocket" className="rocket-pic" />
      </div>
      <div className="text-section">
        <h2>Falcon 1</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in
        </p>
        <button type="button" className="btn">
          Reserve Rocket
        </button>
      </div>
    </div>
  </div>
);

export default Rockect;
