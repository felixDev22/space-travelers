/* eslint-disable react/prop-types */
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import './Rocket.css';
import { bookRocket, cancelReservation } from '../../redux/rockets/RocketApi';

const RocketsUI = () => {
  // get rockets data from the store
  const rocketList = useSelector((state) => state.rockets.data);
  return (
    <div className="container">
      {rocketList.map((rocket) => (
        <RocketCard key={rocket.id} rocket={rocket} />
      ))}
    </div>
  );
};

// reservation state
const RocketCard = ({ rocket }) => {
  const [reserved, setReserved] = useState(rocket.reserved);
  const [btnText, setBtnText] = useState(
    reserved ? 'Cancel Reservation' : 'Reserve Rocket',
  );
  const [btnClass, setBtnClass] = useState(
    reserved ? 'cancel-btn' : 'reserveButton',
  );
  const dispatch = useDispatch();

  // handle button click events
  const onClickHandler = (id) => {
    if (reserved) {
      dispatch(cancelReservation({ id }));
      setReserved(false);
      setBtnText('Reserve Rocket');
      setBtnClass('reserveButton');
    } else {
      dispatch(bookRocket({ id }));
      setReserved(true);
      setBtnText('Cancel Reservation');
      setBtnClass('cancel-btn');
    }
  };

  return (
    <div className="rocket-container">
      <div className="row">
        <div className="image-section">
          <img
            src={rocket.flickr_images[1]}
            alt="rocket"
            className="rocket-pic"
          />
        </div>
        <div className="rocket-text">
          <h3 className="title ">{rocket.name}</h3>
          <p className="description">{rocket.description}</p>
          <button
            type="button"
            className={btnClass}
            onClick={() => onClickHandler(rocket.id)}
          >
            {btnText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RocketsUI;
