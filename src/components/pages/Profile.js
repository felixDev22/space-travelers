import React from 'react';
import { useSelector } from 'react-redux';
import './Profile.css';

const Profile = () => {
  const rocketList = useSelector((state) => state.rockets.data);

  return (
    <div className="profile-container">
      <div className="rockets-holder">
        <h2>My Missions</h2>
        <ul className="show-rockets">
          <li>missions list</li>
        </ul>
      </div>
      <div className="rockets-holder">
        <h2>My Rockets</h2>
        <ul className="show-rockets">
          {rocketList.map((rocket) => {
            if (rocket.reserved) {
              return (
                <li className="show-list" key={rocket.id}>
                  {rocket.name}
                </li>
              );
            }
            return '';
          })}
        </ul>
      </div>
    </div>
  );
};
export default Profile;
