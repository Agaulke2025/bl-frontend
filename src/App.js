import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Plan from './pages/Plan';
import Trips from './pages/Trips';
import LogIn from './pages/Login';
import Home from './pages/Home';
import SignUp from './pages/Signup';
import Navbar from './components/Navbar';
import TripModal from './components/TripModal';
import EditModal from './components/EditModal';
import { GlobalStyles } from './styles/Global.style';
import 'bootstrap/dist/css/bootstrap.min.css';
import tripData from './assets/trips.json';

function App() {
  return (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/plan" element={<Plan />}/>
      <Route path="/trips" element={<Trips />}/>
      <Route path="/login" element={<LogIn />}/>
      <Route path="/signup" element={<SignUp />}/>
      <Route path="/trip/:id" element={<TripModal tripData={tripData}/>}/>
      <Route path="/trip/edit/:id" element={<EditModal />}/>
    </Routes>
    <GlobalStyles />
  </Router>
  );

}

export default App;
