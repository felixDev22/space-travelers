import { useSelector } from 'react-redux';
import './Rocket.css';

const RocketsUI = () => {
  // get rockets data from the store
  const rocketList = useSelector((state) => state.rockets.data);

  return (
    <div className="rocket-container">
      {rocketList.map((rocket) => (
        <div key={rocket.id} className="row">
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
            <button type="button" className="reserveButton">
              Reserve Rocket
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RocketsUI;
