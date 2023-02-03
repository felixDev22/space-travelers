import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector } from 'react-redux';
import './Profile.css';

const Profile = () => {
  const { missions } = useSelector((state) => state.missions);
  const Missions = missions.filter((m) => m.isMember);
  const rocketList = useSelector((state) => state.rockets.data);

  return (
    <div className="profile-container">
      <div className="mission-holder">
        <h2>My Missions</h2>
        <ListGroup>
          {Missions.map(((m) => (
          <ListGroup.Item key={m.mission}>{m.mission_name}</ListGroup.Item>
          )))}
        </ListGroup>
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
