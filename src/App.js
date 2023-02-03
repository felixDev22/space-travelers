import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';
import RockectsUI from './components/pages/Rockect';
import Missions from './components/pages/Missions';
import Profile from './components/pages/Profile';
import { GetRockets } from './redux/rockets/RocketApi';
import './App.css';

function App() {
  const dispatch = useDispatch(); // fetch rockets list when page loads for the first time..
  useEffect(() => {
    dispatch(GetRockets());
  }, [dispatch]);
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<RockectsUI />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
