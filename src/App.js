import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MyProfile from './components/MyProfile';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/myprofile" element={<MyProfile />} />
      </Routes>
    </div>
  );
}

export default App;
