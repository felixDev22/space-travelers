import { useSelector, useDispatch } from 'react-redux';
import './Rocket.css';
import { bookRocket } from '../../redux/rockets/RocketApi';

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
